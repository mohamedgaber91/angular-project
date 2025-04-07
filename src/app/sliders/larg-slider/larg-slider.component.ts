import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

@Component({
  selector: 'larg-slider',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './larg-slider.component.html',
  styleUrls: [
    '../../../assets/css/global-styles/style.css',
    '../../../assets/css/main.css',
    '../../../assets/css/normalize.css',
    '../../../assets/css/responsive.css',
    '../../../assets/css/global-styles/Swiper.css'
  ]
})
export class LargSliderComponent implements AfterViewInit, OnDestroy {
  private swiper: Swiper | undefined;
  largs = [
    { id: 1, image: 'assets/imges/larg1.webp' },
    { id: 2, image: 'assets/imges/larg2.webp' },
    { id: 3, image: 'assets/imges/larg3.webp' },
    { id: 4, image: 'assets/imges/larg4.webp' },
    { id: 5, image: 'assets/imges/larg5.webp' },
    { id: 1, image: 'assets/imges/larg1.webp' },
    { id: 2, image: 'assets/imges/larg2.webp' },
    { id: 3, image: 'assets/imges/larg3.webp' },
    { id: 4, image: 'assets/imges/larg4.webp' },
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

    this.swiper = new Swiper('.larg-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
          navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
          pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      touchEventsTarget: 'container',
      grabCursor: true,

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

  trackById(index: number, larg: any): number {
    return larg.id;
  }
}
