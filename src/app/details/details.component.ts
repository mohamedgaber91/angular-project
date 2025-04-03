import { Component, OnInit } from '@angular/core';
import { initializeSwipers } from '../../assets/swiper-config';
import { LikedSliderComponent } from '../sliders/liked-slider/liked-slider.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [LikedSliderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
    initializeSwipers();  // تهيئة السلايدر بعد تحميل الصفحة
  }
}
