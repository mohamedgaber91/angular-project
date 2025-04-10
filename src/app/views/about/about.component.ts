import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthServices } from '../../shared/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
templateUrl: './about.component.html',
  // styleUrls: ['../../assets/css/main.css','../../styles.css','../../assets/css/normalize.css','../../assets/css/responsive.css']
})
export class AboutComponent {
  constructor(public authService:AuthServices){
    console.log('isLoggedIn global about',this.authService.isLoggedIn$);
  }
  OnInit(){


  }

}
