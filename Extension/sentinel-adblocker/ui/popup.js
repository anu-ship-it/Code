const toggle = document.getElementById('toggle');
const count = document.getElementById('count');
const updateBtn = document.getElementById('update');

chrome.storage.local.get(["enabled", "blocked"], data => {
  toggle.checked = data.enabled ?? true;
  count.textContent = data.blocked ?? 0;
});

toggle.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: toggle.checked });
  chrome.runtime.sendMessage({ type: "TOGGLE", enabled: toggle.checked });
});

updateBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "UPDATE_RULES" });
});
