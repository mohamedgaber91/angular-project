import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { Home } from './home/Home.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TestingComponent } from './testing/testing.component';
import { HomePage } from './homePage/HomePage.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { ShopComponent } from './shop/shop.component';
// import { productsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'home', component: HomePage, pathMatch: 'full' },
  { path: 'cart',      component: CartComponent},
  { path: 'login',      component: LoginComponent},
  { path: 'register',      component: RegisterComponent},
  { path: 'checkout',      component: CheckoutComponent},
  { path: 'details',      component: DetailsComponent},
  { path: 'shop',      component: ShopComponent},
  { path: 'testing',      component: TestingComponent},
  { path: 'products',     component: ProductsComponent },
  { path: 'slider',       component: SliderComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'services',     component: ServicesComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'products/:id', component: ProductDetailsComponent },

];
