// Small enhancement: add the current year automatically.
document.querySelectorAll(".copyright").forEach(el => {
  el.innerHTML = el.innerHTML.replace("2026", new Date().getFullYear());
});