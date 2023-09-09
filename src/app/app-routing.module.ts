import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Brand/brand/brand.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { AddBrandComponent } from './Brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './Brand/update-brand/update-brand.component';
import { AddOrderComponent } from './Order/add-order/add-order.component';
import { OrderComponent } from './Order/order/order.component';
import { CategoryComponent } from './Category/category/category.component';

const routes: Routes = [
  {path :"brands" , component: BrandComponent},
  {path :"addbrand" , component: AddBrandComponent},
  {path :"updatebrand" , component: UpdateBrandComponent},
  {path :"categories" , component: CategoryComponent},
  {path :"addcategory" , component: AddCategoryComponent},
  {path :"updatecategory" , component: UpdateBrandComponent},
  {path :"addorder" , component: AddOrderComponent},
  {path :"updateorder" , component: UpdateBrandComponent},
  {path :"orders" , component: OrderComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
