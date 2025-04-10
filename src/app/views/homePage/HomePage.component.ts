
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { LargSliderComponent } from '../../sliders/larg-slider/larg-slider.component';
import { BestSellerSliderComponent } from '../../sliders/best-seller-slider/best-seller-slider.component';
import { FeatureComponentComponent } from '../../base-components/feature-component/feature-component.component';
import { BrandSliderComponent } from '../../sliders/brand-slider/brand-slider.component';
import { CategoryComponentComponent } from '../../base-components/category-component/category-component.component';
import { BtnScrollComponent } from '../../base-components/btn-scroll/btn-scroll.component';

@Component({
  selector: 'home',
  standalone: true,
  styleUrls: ['../../../assets/css/responsive.css'],

  imports: [CommonModule,RouterModule,LargSliderComponent,BestSellerSliderComponent,TranslateModule,FeatureComponentComponent,BrandSliderComponent,CategoryComponentComponent,BtnScrollComponent],
templateUrl: './HomePage.component.html',
})
export class HomePage  {

}
