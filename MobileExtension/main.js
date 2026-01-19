// We have to make a youtube ad blocker extension for mobile browsers
// because they don't support uBlock Origin or other ad blockers.
// This extension will block YouTube ads by intercepting network requests
// and preventing ad-related URLs from loading.
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // List of URL patterns that are associated with YouTube ads
        const adUrlPatterns = [
            "*://*.doubleclick.net/*",
            "*://*.googleadservices.com/*",
            "*://*.googlesyndication.com/*",
            "*://*.youtube.com/get_video_info*adformat=*",
            "*://*.youtube.com/api/stats/ads*",
            "*://*.youtube.com/pagead/*",
            "*://*.youtube.com/ads/*"
        ];
        for (let pattern of adUrlPatterns) {
            const regex = new RegExp(pattern.replace(/\*/g, '.*'));
            if (regex.test(details.url)) {
                console.log("Blocking YouTube ad URL: " + details.url);
                return { cancel: true };
            }
        }
        return { cancel: false };
    },
    { urls: ["*://*.youtube.com/*"] },
    ["blocking"]
);
chrome.runtime.onInstalled.addListener(function() {
    console.log("YouTube Ad Blocker Extension Installed");
});
chrome.runtime.onStartup.addListener(function() {
    console.log("YouTube Ad Blocker Extension Started");
});
// Note: This is a basic implementation and may not block all ads.
// YouTube frequently updates its ad delivery methods, so maintaining
// an effective ad blocker may require regular updates to the URL patterns.
// Additionally, be aware of the ethical considerations regarding ad blocking
// and the impact it may have on content creators who rely on ad revenue.
// Always consider supporting content creators through alternative means if you choose to block ads.