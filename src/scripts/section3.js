import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from "swiper";

Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

const swiper = new Swiper(".mySwiper", {
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
    1800: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

swiper();
