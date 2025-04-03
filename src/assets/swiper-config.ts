import Swiper from 'swiper';
// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // استخدام ملف CSS الخاص بـ Swiper (يمكن استيراده بهذا الشكل فقط)
import {Navigation,Pagination,Autoplay} from 'swiper/modules';

export function initializeSwipers() {
  console.log("Initializing Swipers...");

  new Swiper('.products-swiper', {
    slidesPerView:4,
    spaceBetween: 0,
    modules: [Navigation, Pagination, Autoplay],

    navigation: {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-next'
  },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});
new Swiper('.larg-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Navigation, Pagination, Autoplay],

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});

new Swiper('.category-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  modules: [Navigation, Pagination, Autoplay],

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: false,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});
 new Swiper('.brands-swiper', {
    slidesPerView: 7,
    spaceBetween: 30,
    modules: [Navigation, Pagination, Autoplay],

    loop: true,

    navigation: {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-next'
  },
    breakpoints: {
        1200: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});
 new Swiper('.delevery-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  modules: [Navigation, Pagination, Autoplay],

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: false,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },


});
}
