const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 50,
    direction: 'vertical',
     
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1025:{
        slidesPerView: 3,
        spaceBetween: 40,
        direction: 'horizontal',
      },
      570:{
        slidesPerView: 2,
        spaceBetween: 40,
        direction: 'horizontal',
      },
    }
    
  });