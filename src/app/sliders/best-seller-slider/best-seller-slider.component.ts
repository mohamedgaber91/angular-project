import { Component } from '@angular/core';
import { ProductCardComponent } from '../../sub-products/product-card/product-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'best-seller-slider',
  standalone: true,
  imports: [ProductCardComponent,RouterModule],
  templateUrl: './best-seller-slider.component.html',
  styleUrls: ['../../../styles.css','../../../assets/css/main.css','../../../assets/css/normalize.css','../../../assets/css/responsive.css']
})
export class BestSellerSliderComponent {

}
