// content/detector.js - fixed and hardened detector
// Root fixes:
// 1) removed the broken/mismatched quote that caused a syntax error
// 2) avoid CSS4 case-insensitive attribute selectors; instead query broadly and filter in JS
// 3) safer heuristics to avoid removing large or main-content containers
// 4) defensive guards around DOM measurements

(function () {
  // small helper to safely remove an element only when it's small/overlay-like
  function safeRemove(node) {
    try {
      if (!node || !(node instanceof Element)) return;
      // avoid removing main content containers by text length and children count
      const text = (node.textContent || '').trim();
      if (text.length > 500) return; // too much text => probably important content
      if (node.childElementCount > 30) return; // huge element, skip
      // avoid removing if node contains the main video element
      if (node.querySelector && node.querySelector('video, ytd-player')) return;
      node.remove();
    } catch (e) {
      // ignore removal errors
    }
  }

  function looksOverlayLike(el) {
    try {
      const rect = el.getBoundingClientRect();
      if (!rect || (rect.width === 0 && rect.height === 0)) return false;
      // If element covers most of viewport it's probably not an ad overlay (avoid removing)
      if (rect.width > 0.8 * window.innerWidth && rect.height > 0.8 * window.innerHeight) return false;
      // small elements or narrow overlays are likely ad UI
      if (rect.width < 0.9 * window.innerWidth && rect.height < 0.9 * window.innerHeight) return true;
    } catch (e) {
      // if measuring fails, be conservative and say false
    }
    return false;
  }

  function runScan() {
    if (!window.__SENTINEL_ENABLED) return;

    try {
      // Known YouTube ad renderers / safe targets
      const safeSelectors = [
        'ytd-display-ad-renderer',
        '.ytp-ad-module',
        '.ytp-ad-player-overlay',
        '.ytp-ad-overlay-container',
        '.video-ads',
        'ytd-promoted-video-renderer',
        'ytd-ad-slot-renderer'
      ];

      safeSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => safeRemove(el));
      });

      // Broadly query nodes that might carry aria-labels or data attributes and filter in JS
      const attrCandidates = Array.from(document.querySelectorAll('[aria-label], [data-ad-status], [role]'));

      attrCandidates.forEach(node => {
        try {
          const aria = (node.getAttribute && node.getAttribute('aria-label')) || '';
          const role = (node.getAttribute && node.getAttribute('role')) || '';
          const dataAd = (node.getAttribute && node.getAttribute('data-ad-status')) || '';

          const textLower = (aria + ' ' + role + ' ' + dataAd).toLowerCase();

          // basic keywords that suggest ad/partner/promoted content
          const adKeywords = ['ad', 'sponsor', 'sponsored', 'promoted', 'promo'];

          const matchesKeyword = adKeywords.some(k => textLower.includes(k));
          if (matchesKeyword && looksOverlayLike(node)) {
            safeRemove(node);
          }
        } catch (e) {
          // ignore per-node failures
        }
      });

      // Additional small-class targets (skip button / small ad text)
      document.querySelectorAll('.ytp-ad-skip-button, .ytp-ad-text, .ytp-ad-overlay-container').forEach(el => {
        try {
          // only remove if it appears small and non-essential
          if (looksOverlayLike(el)) safeRemove(el);
        } catch (e) {}
      });

    } catch (e) {
      // global safety: fail quietly so content script doesn't crash
      console.warn('Sentinel detector error', e);
    }
  }

  // run periodically rather than relying on mutation storms
  const INTERVAL_MS = 900;
  setInterval(runScan, INTERVAL_MS);
  runScan();
})();
