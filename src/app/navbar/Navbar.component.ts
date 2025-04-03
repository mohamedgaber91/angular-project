import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

// ايه هي خصئص الكمبوننت اللي حضرتك عايزها يجابر
@Component({
selector:'Navbar-view',
standalone:true,
imports:[RouterModule,CommonModule],
templateUrl:'./Navbar.component.html',
styleUrls:['./Navbar.component.css','../../styles.css']
})

// خلصت الخصائص ندخل بقي علي الاسم واللوجيك

export class Navbar{
  toggleMenu() {
    document.querySelector('.sidebar')?.classList.toggle('active');
    console.log("seee");

  }
}
