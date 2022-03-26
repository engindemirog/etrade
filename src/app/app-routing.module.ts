import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/admin/pages/login/login.component';
import { ProductAddComponent } from './features/admin/pages/product-add/product-add.component';
import { ProductDetailComponent } from './features/admin/pages/product-detail/product-detail.component';
import { ProductComponent } from './features/admin/pages/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryid", component:ProductComponent},
  {path:"productdetail/:id", component:ProductDetailComponent},
  {path:"productadd", component:ProductAddComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
