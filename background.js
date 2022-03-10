
let mode = false;
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ mode });
});
chrome.action.onClicked.addListener((tab) => {
    mode = !mode;
    chrome.storage.sync.set({ mode });
    chrome.tabs.sendMessage(tab.id, { mode });
});
