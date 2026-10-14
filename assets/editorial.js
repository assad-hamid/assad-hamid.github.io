/* Enhancement only: pages are fully usable without JavaScript. */
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let ticking = false;
  function update() { header.classList.toggle('is-scrolled', window.scrollY > 12); ticking = false; }
  update();
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, {passive:true});
})();
