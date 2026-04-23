
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav'); 

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
});
