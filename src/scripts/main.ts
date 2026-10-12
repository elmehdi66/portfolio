// Interactions globales : menu, en-tête, apparitions, horloge, copie d'e-mail, barre mobile.
declare global {
  interface Window { __gzReady?: boolean }
}

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Apparitions au scroll ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}
window.__gzReady = true;

/* ---------- En-tête : ombre, masquage au scroll, barre mobile ---------- */
let lastY = window.scrollY;
let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  root.classList.toggle('is-scrolled', y > 8);
  if (y > lastY + 4 && y > 240 && !root.classList.contains('menu-open')) root.classList.add('is-hidden-hdr');
  else if (y < lastY - 4 || y < 120) root.classList.remove('is-hidden-hdr');
  root.classList.toggle('is-past-hero', y > window.innerHeight * 0.55);
  lastY = y;
  ticking = false;
};
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
requestAnimationFrame(onScroll);

// Masque la barre mobile quand le pied de page (et son grand appel à l'action) est visible
const footer = document.querySelector('footer');
if (footer && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => root.classList.toggle('at-footer', e.isIntersecting), { rootMargin: '0px 0px -15% 0px' }).observe(footer);
}

/* ---------- Menu mobile ---------- */
const menu = document.querySelector<HTMLElement>('[data-menu]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
const openMenu = () => {
  if (!menu || !toggle) return;
  menu.hidden = false;
  toggle.setAttribute('aria-expanded', 'true');
  root.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
  closeBtn?.focus();
};
const closeMenu = (restoreFocus = true) => {
  if (!menu || !toggle || menu.hidden) return;
  menu.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  root.classList.remove('menu-open');
  document.body.style.overflow = '';
  if (restoreFocus) toggle.focus();
};
toggle?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', () => closeMenu());
menu?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) closeMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
  if (e.key === 'Tab' && menu && !menu.hidden) {
    const f = menu.querySelectorAll<HTMLElement>('a, button');
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.matchMedia('(min-width: 980px)').addEventListener('change', (m) => { if (m.matches) closeMenu(false); });

/* ---------- Heure locale (Casablanca) ---------- */
const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');
if (clocks.length) {
  const fmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Casablanca' });
  const tick = () => clocks.forEach((c) => (c.textContent = `${fmt.format(new Date())} à Casablanca`));
  tick();
  setInterval(tick, 30_000);
}

/* ---------- Copier l'e-mail ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const value = btn.dataset.copy || '';
    const label = btn.querySelector<HTMLElement>('[data-copy-label]');
    try {
      await navigator.clipboard.writeText(value);
      if (label) label.textContent = 'Copiée';
    } catch {
      window.location.href = `mailto:${value}`;
      return;
    }
    setTimeout(() => { if (label) label.textContent = 'Copier'; }, 2000);
  });
});

export {};
