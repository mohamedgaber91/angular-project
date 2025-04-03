import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from "@angular/common";

@Component({
  selector:'testing-component',
  templateUrl:'./testing.component.html',
  styleUrls:['./testing.component.css'],
  standalone:true,
  imports:[ButtonComponent,CommonModule]
})

export class TestingComponent{

@Input () isTesting=true
}
