document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".js-our-stories-slider")) {
    const ourStoriesSlider = new Swiper(".js-our-stories-slider", {
      slidesPerView: 'auto',
      spaceBetween: 10,
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
