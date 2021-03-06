import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  products$:Observable<Product[]> = new Observable<Product[]>();
  filterText:string="";




  constructor(private httpClient:HttpClient) 
  {
    //this.products$ = this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
    
  }

  ngOnInit(): void {
    this.products$ = this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
  }

  onFilterBtnClicked():void
  {
    console.log(this.filterText);

    this.httpClient
    .get<Product[]>("https://fakestoreapi.com/products")
    .subscribe(res=>{
      let filteredProducts = res.filter(p=>p.title.toLowerCase().includes(this.filterText.toLowerCase()));
      console.log(filteredProducts);
      this.products$ = of(filteredProducts);
    });

  }

}
