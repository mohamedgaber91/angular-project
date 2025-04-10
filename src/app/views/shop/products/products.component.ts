import { Component,OnInit } from '@angular/core';
import { DBServices } from '../../../db.services';
import { CommonModule } from '@angular/common';
// import { Home } from '../home/Home.component';
import { ButtonComponent } from "../sub-products/button/button.component";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ButtonComponent,RouterModule],
templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  fetchedProducts;
  specialProducts;
  allProducts:any;
  products = true;
  closes = false;
  color= 'customColor';
  product={
    id:'188',
    title:'any title'

  }
  url='https://fakestoreapi.com/products'
  constructor(private data: DBServices, private http:HttpClient ) {
    this.fetchedProducts = data.getProducts()
    this.specialProducts = data.getSpecialProducts()

  }
  ngOnInit() {

   this.http.get(this.url).subscribe((res)=>{
    this.allProducts=res

   })

  }

  addProduct(product: { id: any; }){
    if ( this.allProducts?.find((el: { id: any; })=>el.id ===product.id)) {

    }else{
     this.allProducts?this.allProducts.push(product):''
    }

  }

  deleteProduct(product: { id: any; }){
    if ( this.allProducts?.find((el: { id: any; })=>el.id ===product.id)) {
     this.http.delete(`${this.url}/${product.id}`).subscribe((res)=>{
      console.log('res',product.id);
      this.allProducts=this.allProducts.filter((el: { id: any; })=>el.id !== product.id)
     })

    }else{

    }

  }
  setActive(active: string) {
    if (active === 'products') {
      this.products = true;
      this.closes = false
    } else {
      this.closes = true;
      this.products = false;
    }


  }

}
