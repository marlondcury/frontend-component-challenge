document.addEventListener('DOMContentLoaded', () => {
  
  const heroSliderElement = document.querySelector('#hero-slider');
  if (heroSliderElement) {
    new Splide(heroSliderElement, {
      type: 'loop',       
      autoplay: true,     
      interval: 5000,     
      arrows: true,       
      pagination: true,   
      speed: 800,         
    }).mount();
  }


  const locationSplides = [];

  const locationSliders = document.querySelectorAll('.locations__slider');
  
  locationSliders.forEach(slider => {
    const carousel = new Splide(slider, {
      type: 'loop',
      perPage: 1,         
      arrows: true,
      pagination: true,
    }).mount();
    
    locationSplides.push(carousel);
  });

  // ==========================================
  // 2. SISTEMA DE ABAS (TABS) DE LOCALIZAÇÃO
  // ==========================================

  const tabs = document.querySelectorAll('.locations__tab');
  const contents = document.querySelectorAll('.locations__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');

      tabs.forEach(t => t.classList.remove('active'));
      
      contents.forEach(c => c.classList.remove('active'));

      this.classList.add('active');
      
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
        setTimeout(() => {
          locationSplides.forEach(carousel => {
            carousel.refresh();
          });
        }, 10);
      }
    });
  });
});


