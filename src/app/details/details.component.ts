import { Component, OnInit } from '@angular/core';
import { initializeSwipers } from '../../assets/swiper-config';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
    initializeSwipers();  // تهيئة السلايدر بعد تحميل الصفحة
  }
}
