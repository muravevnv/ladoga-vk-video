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


