import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './features/admin/pages/product/product.component';
import { NaviComponent } from './features/admin/pages/navi/navi.component';
import { CategoryComponent } from './features/admin/pages/category/category.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

import { ProductDetailComponent } from './features/admin/pages/product-detail/product-detail.component';
import { ProductAddComponent } from './features/admin/pages/product-add/product-add.component';
import { LoginComponent } from './features/admin/pages/login/login.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './core/store/cart-reducer';
import { CartSummaryComponent } from './features/admin/pages/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    ProductDetailComponent,
    ProductAddComponent,
    LoginComponent,
    CartSummaryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ListboxModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ToastModule,
    StoreModule.forRoot({cartReducer:cartReducer})
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
