
let mode = false;
let disabled = {
    16: "/images/dmi_disable_16.png",
    32: "/images/dmi_disable_32.png"
};
let enabled = {
    16: "/images/dmi_enabled_16.png",
    32: "/images/dmi_enabled_32.png"
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ mode });
});

chrome.action.onClicked.addListener((tab) => {
    mode = !mode;
    chrome.storage.sync.set({ mode });
    chrome.tabs.sendMessage(tab.id, { mode }, updateIcon(tab, mode));
});

function updateIcon(tab, mode) {
    chrome.action.setIcon({ path: mode ? enabled : disabled, tabId: tab.id });
}