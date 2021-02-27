



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

  const mobileNav =() =>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.mobile-nav-hidden')
    const deactivate = document.querySelector('header')
    const worldNews = document.querySelector('.world-news')
    const bodyFlex = document.querySelector('.body-flex')
    const swiper = document.querySelector('.swiper-container')
    const main = document.querySelector('.main-content')
    
    

    burger.addEventListener('click', () =>{
      nav.classList.toggle('mobile-nav-active')
      deactivate.classList.toggle('deactivate', )
      // deactivate.classList.toggle('deactivate', )
      bodyFlex.classList.toggle('deactivate')
      swiper.classList.toggle('deactivate')
      main.classList.toggle('deactivate')
      worldNews.classList.toggle('deactivate')

    })
     
  


    var min_horizontal_move = 30;
    var max_vertical_move = 30;
    var within_ms = 1000;
 
    var start_xPos;
    var start_yPos;
    var start_time;
    function touch_start(event) {
        start_xPos = event.touches[0].pageX;
        start_yPos = event.touches[0].pageY;
        start_time = new Date();
    }
 
 
    function touch_end(event) {
        var end_xPos = event.changedTouches[0].pageX;
        var end_yPos = event.changedTouches[0].pageY;
        var end_time = new Date();
        let move_x = end_xPos - start_xPos;
        let move_y = end_yPos - start_yPos;
        let elapsed_time = end_time - start_time;
        if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
            if (move_x < 0) {
              swipeMenu.classList.toggle('mobile-nav-hidden')
            } else {
                //alert("right");
            }
        }
    }
 
    var swipeMenu = document.querySelector('.mobile-nav-active');
    content.addEventListener('touchstart', touch_start);
    content.addEventListener('touchend', touch_end);




  }




  mobileNav()