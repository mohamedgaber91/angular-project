import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'category-component',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './category-component.component.html',
  styleUrls: ['../../../assets/css/responsive.css']
})

export class CategoryComponentComponent {
  categories = [
    { id: 1, image: 'assets/imges/sec1 (1).png',title:"CATEGORY_TITLE" },
    { id: 1, image: 'assets/imges/sec1 (2).png',title:"CATEGORY_TITLE" },
    { id: 1, image: 'assets/imges/sec1 (3).png',title:"CATEGORY_TITLE" },
    { id: 1, image: 'assets/imges/sec1 (4).png',title:"CATEGORY_TITLE" },
    { id: 1, image: 'assets/imges/sec1 (5).png',title:"CATEGORY_TITLE" },
    { id: 1, image: 'assets/imges/sec1 (6).png',title:"CATEGORY_TITLE" },
    { id: 1, image: 'assets/imges/sec1 (7).png',title:"CATEGORY_TITLE" },

  ];
}
