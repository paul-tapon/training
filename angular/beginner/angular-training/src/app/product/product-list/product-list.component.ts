import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$!:Observable<Product[]>;
  filterQuery!:string;
  eventData!:string;
  
  constructor(private httpClient:HttpClient) 
  {

  }

  ngOnInit(): void {
    this.products$ = this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
  }

  onFilterCliked() : void{
    console.log(this.filterQuery);

    this.httpClient
    .get<Product[]>("https://fakestoreapi.com/products")
    .subscribe((products:Product[])=>{

      let filteredProducts:Product[] = products
                      .filter
                      (
                        p=>p.title.toLowerCase().includes(this.filterQuery.toLowerCase())
                      );

      this.products$ = of(filteredProducts);
      
    });

  }

  onRatingClicked(eventData:string):void{
    this.eventData = eventData;
  }

}
