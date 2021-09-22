import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {

  posts:any[]= [];

  constructor(private http:HttpClient) 
  {

  }

  loadPosts()
  {
    this
      .http
      .get<any[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(res=>this.posts=res);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

}
