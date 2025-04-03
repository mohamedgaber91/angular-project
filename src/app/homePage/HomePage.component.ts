
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DBServices } from '../db.services';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { initializeSwipers } from '../../assets/swiper-config';
import { RouterModule } from '@angular/router';
import { LargSliderComponent } from '../sliders/larg-slider/larg-slider.component';
import { BestSellerSliderComponent } from '../sliders/best-seller-slider/best-seller-slider.component';
import { FeatureComponentComponent } from '../base-components/feature-component/feature-component.component';
import { BrandSliderComponent } from '../sliders/brand-slider/brand-slider.component';
import { OffersComponentComponent } from '../base-components/offers-component/offers-component.component';
import { ButtonComponent } from '../sub-products/button/button.component';
import { BtnScrollComponent } from '../base-components/btn-scroll/btn-scroll.component';

@Component({
  selector: 'home',
  standalone: true,

  imports: [CommonModule,RouterModule,LargSliderComponent,BestSellerSliderComponent,FeatureComponentComponent,BrandSliderComponent,OffersComponentComponent,BtnScrollComponent],
templateUrl: './HomePage.component.html',
  styleUrls: ['../../styles.css','../../assets/css/main.css','../../assets/css/normalize.css','../../assets/css/responsive.css']
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    initializeSwipers();
  }
}
