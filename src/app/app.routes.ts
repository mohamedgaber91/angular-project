
import { Routes } from "@angular/router";
import { homeRoutes } from "./views/homePage/routes";
import { aboutRoutes } from "./views/about/routes";
import { loginRoutes } from "./views/auth/login/routs";
import { registerRoutes } from "./views/auth/register/routes";
import { cartRoutes } from "./views/cart/routes";
import { checkoutRoutes } from "./views/checkout/routes";
import { contactRoutes } from "./views/contact/routes";
import { shopsRoutes } from "./views/shop/routes";
import { detailsRoutes } from "./views/shop/details/routes";
import { productDetailsRoutes } from "./views/shop/product-details/routes";
import { productsRoutes } from "./views/shop/products/routes";

export const routes:Routes=[
 ...homeRoutes,
 ...aboutRoutes,
 ...loginRoutes,
 ...registerRoutes,
 ...cartRoutes,
 ...checkoutRoutes,
 ...contactRoutes,
 ...shopsRoutes,
 ...detailsRoutes,
 ...productDetailsRoutes,
 ...productsRoutes
]
