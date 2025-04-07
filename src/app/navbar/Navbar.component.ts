import {  Renderer2, OnInit } from "@angular/core";
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from "@angular/forms";
import Swiper from 'swiper';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'Navbar-view',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule, FormsModule,TranslateModule],
  templateUrl: './Navbar.component.html',
  styleUrls: [
    './Navbar.component.css',
    '../../assets/css/global-styles/Navbar.css',
    '../../assets/css/global-styles/style.css',
    '../../assets/css/global-styles/Swiper.css',
    '../../assets/css/global-styles/colors.css',
    '../../assets/css/global-styles/Utilities.css'
  ]
})
export class Navbar implements OnInit, AfterViewInit {
  currentLang: string = 'en';
  currentFragment: string | null = null;
  currentRoute: string = '';

  deliveryBaners=[
    {
      id: 1,
      data: 'DELIVERY_BANER_1',

    },
    {
      id: 2,
      data: 'DELIVERY_BANER_2',

    },
  ]
  private swiper: Swiper | undefined;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    translate.onLangChange.subscribe(() => {
      this.updateSwiperDirection();
    });

  }


  ngOnDestroy() {
    this.destroySwiper();
  }

  ngOnInit() {
    const savedLang = localStorage.getItem('userLang') || 'en';
    this.currentLang = savedLang;
    this.applyLanguageSettings(savedLang);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const urlTree = this.router.parseUrl(event.urlAfterRedirects);
      this.currentFragment = urlTree.fragment || '';
    });
  }

  ngAfterViewInit() {
    this.setupSidebarLinks();
    this.initSwiper();
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  private setupSidebarLinks() {
    const links = document.querySelectorAll('.side-link');
    links.forEach(link => {
      this.renderer.listen(link, 'click', () => this.hideSidebar());
    });
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.applyLanguageSettings(lang);
    localStorage.setItem('userLang', lang);
  }


  private applyLanguageSettings(lang: string) {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(`lang-${lang}`);
  }

  toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('active');
    console.log("Sidebar toggled");
  }

  hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('active');
    console.log("Sidebar hidden");
  }
  private initSwiper() {
    const isRTL = this.translate.currentLang === 'ar';

    this.swiper =    new Swiper('.delevery-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: false,
      pagination: false,
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

  trackById(index: number, delivery: any): number {
    return delivery.id;
  }

}

