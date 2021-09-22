import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit 
{
  post:any;

  constructor(private route:ActivatedRoute,private httpClient:HttpClient) 
  {

  }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');

    this.httpClient.get<any>("https://jsonplaceholder.typicode.com/posts/"+postId).subscribe(res=>this.post=res);

  }

}
