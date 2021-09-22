import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = 
[
  {
     path:'post-list',
     component : PostListComponent
  },
  {
    path:'post-detail/:id',
    component:PostDetailsComponent
  },
  {
    path:'product/list',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

}
