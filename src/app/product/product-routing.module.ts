import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [{ path: '', component: ViewAllProductComponent },
{ path: 'view-product', component: ViewProductComponent },
{ path: 'update-product', component: UpdateProductComponent },
{ path: 'add-product', component: AddProductComponent },
{ path: 'delete-product', component: DeleteProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
