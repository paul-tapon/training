import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:any[]=[];

  constructor(private httpClient:HttpClient) 
  {

  }

  ngOnInit(): void {

    this
    .httpClient
    .get<any[]>("https://jsonplaceholder.typicode.com/posts")
    .subscribe(res=>this.posts=res);

  }

}
