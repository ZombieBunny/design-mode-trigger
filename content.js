chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    message.mode ? document.designMode = "on" : document.designMode = "off";
    return true;
});