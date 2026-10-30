const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpening = mobileNav.hidden;
    mobileNav.hidden = !isOpening;
    menuButton.setAttribute('aria-expanded', String(isOpening));
    menuButton.setAttribute('aria-label', isOpening ? 'Close navigation' : 'Open navigation');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();

document.querySelectorAll('[data-open-detail]').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = document.getElementById(button.getAttribute('data-open-detail'));
    if (!detail) return;
    detail.open = true;
    detail.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  });
});

const activeLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = [...document.querySelectorAll('section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const active = entries.find((entry) => entry.isIntersecting);
    if (!active) return;
    activeLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${active.target.id}`);
    });
  }, { rootMargin: '-20% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
}
