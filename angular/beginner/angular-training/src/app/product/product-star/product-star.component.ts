import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'product-star',
  templateUrl: './product-star.component.html',
  styleUrls: ['./product-star.component.css']
})
export class ProductStarComponent implements OnInit {

  @Input() rating:number=0;
  cropWidth:number=0;

  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.rating);
    this.cropWidth = this.rating*14.86;
  }

  onStarClicked() : void{
    this.ratingClicked.emit(`Star is clicked with rating ${this.rating}`);
  }

}
