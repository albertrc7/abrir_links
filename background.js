
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "abrir_links") {
    chrome.storage.local.get("enlacesDetectados", (data) => {
      (data.enlacesDetectados || []).forEach((url, i) => {
        chrome.tabs.create({ url, index: i });
      });
    });
  }
});
