

import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from "swiper/modules";

@Component({
  selector: 'best-seller-slider',
  standalone: true,
  imports: [TranslateModule, CommonModule,RouterModule],
  templateUrl: './best-seller-slider.component.html',
  styleUrls: [
    '../../../assets/css/global-styles/style.css',
    '../../../assets/css/main.css',
    '../../../assets/css/normalize.css',
    '../../../assets/css/responsive.css',
    '../../../assets/css/global-styles/Swiper.css'
  ]
})
export class BestSellerSliderComponent implements AfterViewInit, OnDestroy {
  private swiper: Swiper | undefined;
  products = [
    {
      id: 1,
      name: 'PRODUCT_1',
      description: 'PRODUCT_DESC_1',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (1).jpg'
    },
    {
      id: 2,
      name: 'PRODUCT_2',
      description: 'PRODUCT_DESC_2',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (2).jpg'
    },
    {
      id: 1,
      name: 'PRODUCT_1',
      description: 'PRODUCT_DESC_1',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (1).jpg'
    },
    {
      id: 2,
      name: 'PRODUCT_2',
      description: 'PRODUCT_DESC_2',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (2).jpg'
    },
    {
      id: 1,
      name: 'PRODUCT_1',
      description: 'PRODUCT_DESC_1',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (1).jpg'
    },
    {
      id: 2,
      name: 'PRODUCT_2',
      description: 'PRODUCT_DESC_2',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (2).jpg'
    },
    {
      id: 1,
      name: 'PRODUCT_1',
      description: 'PRODUCT_DESC_1',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (1).jpg'
    },
    {
      id: 2,
      name: 'PRODUCT_2',
      description: 'PRODUCT_DESC_2',
      price: 29.99,
      discount: 25,
      image: 'assets/imges/pro1 (2).jpg'
    },
  ];

  constructor(public translate: TranslateService) {
    translate.onLangChange.subscribe(() => {
      this.updateSwiperDirection();
    });
  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  ngOnDestroy() {
    this.destroySwiper();
  }

  private initSwiper() {
    const isRTL = this.translate.currentLang === 'ar';

    this.swiper = new Swiper('.category-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: false,
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
    if (isRTL) {
      this.swiper.changeLanguageDirection('rtl');
    }
  }

  private updateSwiperDirection() {
    this.destroySwiper();
    setTimeout(() => this.initSwiper(), 50);
  }

  private destroySwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = undefined;
    }
  }

  trackById(index: number, product: any): number {
    return product.id;
  }
}
