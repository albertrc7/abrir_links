(() => {
  const tabla = document.querySelector("table");
  if (!tabla) return;

  const links = Array.from(tabla.querySelectorAll("tbody tr")).map(tr => {
    const celdas = tr.querySelectorAll("td");
    if (celdas.length < 2) return null;
    const link = celdas[1].querySelector("a[href^='http']");
    return link ? link.href : null;
  }).filter(Boolean);

  chrome.storage.local.set({ enlacesDetectados: links });
})();