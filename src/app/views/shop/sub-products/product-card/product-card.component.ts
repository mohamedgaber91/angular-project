import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'productCard-component',
  standalone:true,
  templateUrl: './product-card.component.html',
  styleUrls: [
    '../../../../../assets/css/global-styles/style.css',
    '../../../../../assets/css/main.css',
    '../../../../../assets/css/normalize.css',
    '../../../../../assets/css/responsive.css',
    '../../../../../assets/css/global-styles/Swiper.css'],
  imports:[RouterModule]
})
export class ProductCardComponent {
  @Input() imageUrl: string = 'assets/imges/pro1 (1).jpg';
  @Input() description: string = 'This is a brief description of product 1.';
  @Input() price: string = '$29.99';
  @Input() discount: string = 'save 100%';
  @Input() routerLink: string = '/details';
}
