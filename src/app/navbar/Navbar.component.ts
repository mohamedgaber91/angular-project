import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
selector:'Navbar-view',
standalone:true,
imports:[RouterModule,CommonModule],
templateUrl:'./Navbar.component.html',
styleUrls:['./Navbar.component.css','../../styles.css']
})
export class Navbar{
  toggleMenu() {
    document.querySelector('.sidebar')?.classList.toggle('active');
    console.log("seee");

  }
}
