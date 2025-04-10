import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId :any;
  specialProduct:any
  constructor(private route: ActivatedRoute ,private http:HttpClient) {}

  ngOnInit() {

   this.route.paramMap.subscribe((res)=> this.productId= res.get('id'));
  console.log('id',this.productId);
  this.http.get(`https://fakestoreapi.com/products/${this.productId}`).subscribe((res)=>{
    console.log('data',res);
    this.specialProduct=res
  })



  }
}
