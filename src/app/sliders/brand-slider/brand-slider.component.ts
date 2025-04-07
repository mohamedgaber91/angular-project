import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

@Component({
  selector: 'brand-slider',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './brand-slider.component.html',
  styleUrls: [
    '../../../assets/css/global-styles/style.css',
    '../../../assets/css/main.css',
    '../../../assets/css/normalize.css',
    '../../../assets/css/responsive.css',
    '../../../assets/css/global-styles/Swiper.css'
  ]
})
export class BrandSliderComponent implements AfterViewInit, OnDestroy {
  private swiper: Swiper | undefined;
  brands = [
    { id: 1, image: 'assets/imges/brand1.webp' },
    { id: 2, image: 'assets/imges/brand2.webp' },
    { id: 3, image: 'assets/imges/brand3.webp' },
    { id: 4, image: 'assets/imges/brand4.webp' },
    { id: 5, image: 'assets/imges/brand5.webp' },
    { id: 6, image: 'assets/imges/brand6.webp' },
    { id: 7, image: 'assets/imges/brand7.webp' },
    { id: 1, image: 'assets/imges/brand1.webp' },
    { id: 2, image: 'assets/imges/brand2.webp' },
    { id: 3, image: 'assets/imges/brand3.webp' },
    { id: 4, image: 'assets/imges/brand4.webp' },
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

    this.swiper = new Swiper('.brands-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 7,
      spaceBetween: 30,
      navigation: false,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: false,
      touchEventsTarget: 'container',
      grabCursor: true, 
      breakpoints: {
        1200: { slidesPerView: 7 },
        992: { slidesPerView: 4 },
        768: { slidesPerView: 4 },
        576: { slidesPerView: 3 },
        320: { slidesPerView: 2 }
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

  trackById(index: number, brand: any): number {
    return brand.id;
  }
}
