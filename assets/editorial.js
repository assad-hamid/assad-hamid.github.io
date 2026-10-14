/* Enhancement only: pages are fully usable without JavaScript. */
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let ticking = false;
  function update() { header.classList.toggle('is-scrolled', window.scrollY > 12); ticking = false; }
  update();
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, {passive:true});

  const factCards = Array.from(document.querySelectorAll('.fact-card'));
  if (factCards.length) {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    factCards.forEach((card) => {
      card.addEventListener('toggle', () => {
        if (!card.open) return;
        factCards.forEach((other) => { if (other !== card) other.open = false; });
      });
      if (canHover) {
        card.addEventListener('mouseenter', () => {
          factCards.forEach((other) => { if (other !== card) other.open = false; });
          card.open = true;
        });
        card.addEventListener('mouseleave', () => { card.open = false; });
      }
    });
    document.addEventListener('click', (event) => {
      if (factCards.some((card) => card.contains(event.target))) return;
      factCards.forEach((card) => { card.open = false; });
    });
  }
})();
