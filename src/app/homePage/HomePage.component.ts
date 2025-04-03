// import { CommonModule } from '@angular/common';
// import { Component, Input, input, OnInit } from '@angular/core';
// import { DBServices } from '../db.services';
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { initializeSwipers } from '../../assets/swiper-config';

// @Component({
//   selector: 'home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './HomePage.component.html',
//   styleUrls: ['../../styles.css']
// })
// export class HomePage  {
//   OnInit() {
//     initializeSwipers();

//   }


// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DBServices } from '../db.services';  // تأكد من أن هذا الملف موجود
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { initializeSwipers } from '../../assets/swiper-config';  // تأكد من مسار هذا الملف
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './HomePage.component.html',
  styleUrls: ['../../styles.css','../../assets/css/main.css','../../assets/css/normalize.css','../../assets/css/responsive.css']
})
export class HomePage implements OnInit {
  // هنا يمكن إضافة أي متغيرات تحتاجها

  ngOnInit(): void {
    initializeSwipers();  // تهيئة السلايدر بعد تحميل الصفحة
  }
}
