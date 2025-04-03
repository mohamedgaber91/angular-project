import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/responsive.css','../../styles.css','../../assets/css/main.css','../../assets/css/normalize.css',]
})
export class LoginComponent {
binding: any;
send(email: any){
  console.log("errors", email.errors);
  console.log('ngmodel',email);

}
ngOnInit(){
console.log('login init');

}

}
