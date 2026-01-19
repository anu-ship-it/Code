// content/observer.js
(async () => {
  // Lightweight promise wrapper for storage.get
  const get = (k) => new Promise(r => chrome.storage.local.get(k, r));

  try {
    const s = await get(['enabled', 'whitelist']);
    const enabled = s.enabled !== false;
    const whitelist = s.whitelist || [];

    // Build normalized host match (example.com)
    const host = location.hostname.replace(/^www\./, '').toLowerCase();

    // Check whitelist: allow matching by exact host or subdomain
    const isWhitelisted = whitelist.some(item => {
      if (!item) return false;
      const n = item.toLowerCase().replace(/^www\./, '');
      // exact match or suffix match (e.g., "youtube.com" matches "m.youtube.com")
      return host === n || host.endsWith('.' + n);
    });

    if (!enabled || isWhitelisted) {
      // ensure content scripts do nothing further
      window.__SENTINEL_ENABLED = false;
      console.info('Sentinel: disabled in-page (whitelist or global off).', { host, isWhitelisted, enabled });
      return;
    }

    window.__SENTINEL_ENABLED = true;
    console.info('Sentinel: enabled in-page', host);

    // minimal observer to trigger other content modules if needed
    const observer = new MutationObserver((mutations) => {
      // noop — detector/skipper polls / uses own timers for stability
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {
    console.warn('Sentinel content init error', e);
    window.__SENTINEL_ENABLED = false;
  }
})();
