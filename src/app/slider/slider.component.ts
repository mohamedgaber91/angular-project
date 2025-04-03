import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ضروري لدعم *ngFor

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  sliders= [
    "https://sp.yimg.com/ib/th?id=OIP.fuQwid6YFS87OKPC5dY8mQHaE6&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    "https://up.yimg.com/ib/th?id=OIP.2cKAdWsLVWuqOBi25yBypAHaFL&pid=Api&rs=1&c=1&qlt=95&w=170&h=118",
    "https://sp.yimg.com/ib/th?id=OIP.TKpPfuk6_wtmoE7Pgi1qngHaJQ&pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    "https://sp.yimg.com/ib/th?id=OIP.dMo49N-yuyVGuvpZb-KXUgHaE8&pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
  ];
}
