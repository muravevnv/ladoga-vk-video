document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".js-our-stories-slider")) {
    const ourStoriesSlider = new Swiper(".js-our-stories-slider", {
      slidesPerView: 'auto',
      spaceBetween: 10,
      nested: true,
      allowTouchMove: true,
      navigation: {
        nextEl: ".js-our-stories-slider-next",
        prevEl: ".js-our-stories-slider-prev",
      },
      breakpoints: {
        560: {
          spaceBetween: 10,
          slidesPerView: "auto",
        },
        767: {
          spaceBetween: 20,
          slidesPerView: "auto",
        },

        1024: {
          spaceBetween: 30,
          slidesPerView: "auto",
        }
      },
    });
  }
});


// document.querySelectorAll('.js-iframe-mask').forEach(function(mask) {
//   mask.addEventListener('mouseenter', function() {
//     setTimeout(function() {
//       mask.style.pointerEvents = 'none';
//     }, 1000);
//      // Отключаем маску для пропуска касания в iframe
//   });

//   mask.addEventListener('mouseleave', function() {
//     setTimeout(function() {
//       mask.style.pointerEvents = 'auto'; // Включаем маску обратно после взаимодействия
//     }, 1000); // Небольшая задержка
//   });
// });

// document.querySelectorAll('.js-iframe-mask').forEach(function(mask) {
//   mask.addEventListener('touchstart', function() {
//     mask.style.pointerEvents = 'none'; // Отключаем маску для пропуска касания в iframe
//   });

//   mask.addEventListener('touchend', function() {
//     setTimeout(function() {
//       mask.style.pointerEvents = 'auto'; // Включаем маску обратно после взаимодействия
//     }, 500); // Небольшая задержка
//   });
// });

// const storiesItems = document.querySelectorAll('.our-stories__item');

// if(storiesItems.length > 0) {
//   storiesItems.forEach(item => {
//     const itemLink = item.querySelector('.our-stories__item-preview');
//     const itemFrame = item.querySelector('.our-stories__item-frame');
    
//     itemLink.addEventListener('click', function(event) {
//       event.preventDefault();
//       const iframeSrc = this.href;
//       const iframe = document.createElement('iframe');
//       iframe.src = iframeSrc;
//       item.classList.add('is-active')
//       itemFrame.appendChild(iframe);
//     });
//   })
// }


