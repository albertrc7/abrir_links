
document.getElementById('openLinks').addEventListener('click', async () => {
  chrome.runtime.sendMessage({ action: "abrir_links" });
});
