import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component'
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = 
[
  {
    path:'post-list',
    component: PostListComponent
  },
  {
    path:'post-detail/:id',
    component: PostDetailComponent
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
export class AppRoutingModule { }
