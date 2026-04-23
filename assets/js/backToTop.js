document.addEventListener('DOMContentLoaded', () => {

  const backToTopButton = document.querySelector('.footer__back-top');
  
  if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
