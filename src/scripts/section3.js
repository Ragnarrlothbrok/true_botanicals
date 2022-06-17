import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from "swiper";

Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

swiper();
