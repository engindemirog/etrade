import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { ProductDetailComponent } from './features/admin/pages/product-detail/product-detail.component';
import { ProductAddComponent } from './features/admin/pages/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    ProductDetailComponent,
    ProductAddComponent

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
