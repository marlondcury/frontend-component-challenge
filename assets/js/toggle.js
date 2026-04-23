const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav'); 
const items = document.querySelectorAll('.nav__item--has-submenu');

// ===== MENU MOBILE =====
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('is-active');

  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
});

// ===== SUBMENU =====
items.forEach(item => {
  let timeout;
  const toggle = item.querySelector('.nav__toggle');

  // ===== DESKTOP (hover com delay) =====
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth > 996) {
      clearTimeout(timeout);
      item.classList.add('nav__item--open');
    }
  });

  item.addEventListener('mouseleave', () => {
    if (window.innerWidth > 996) {
      timeout = setTimeout(() => {
        item.classList.remove('nav__item--open');
      }, 250);
    }
  });

  // ===== DESKTOP CLICK (toggle real) =====
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth > 996) {
      e.preventDefault();

      const isOpen = item.classList.contains('nav__item--open');

      items.forEach(i => {
        if (i !== item) i.classList.remove('nav__item--open');
      });

      item.classList.toggle('nav__item--open', !isOpen);
    }

    // ===== MOBILE CLICK =====
    if (window.innerWidth <= 996) {
      e.preventDefault();

      const isOpen = item.classList.contains('nav__item--open');

      items.forEach(i => i.classList.remove('nav__item--open'));

      if (!isOpen) {
        item.classList.add('nav__item--open');
      }
    }
  });
});

// ===== FECHAR AO CLICAR FORA =====
document.addEventListener('click', (e) => {

  const clickedInsideNav = e.target.closest('.nav');
  const clickedToggle = e.target.closest('#menu-toggle');

  if (!clickedInsideNav && !clickedToggle) {
    nav.classList.remove('is-active');
    items.forEach(item => item.classList.remove('nav__item--open'));
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// ===== FECHAR AO CLICAR EM LINKS =====
const navLinks = document.querySelectorAll('.nav a, .nav__sublink');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-active');
    items.forEach(item => item.classList.remove('nav__item--open'));
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});