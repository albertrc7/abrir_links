(() => {
  const contenedor = document.querySelector(".portlet.box.taronja");
  if (!contenedor) return;

  const dominioRegex = /\\.\w{2,}/; // Detecta .com, .org, .cat, etc.

  const links = Array.from(contenedor.querySelectorAll('a'))
    .filter(a =>
      a.href.startsWith("http") &&
      dominioRegex.test(a.href) &&
      !a.href.includes("google.com/search?q=site:")
    )
    .map(a => a.href);

  chrome.storage.local.set({ enlacesDetectados: links });
})();
