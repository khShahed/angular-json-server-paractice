import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostsService {
  baseUrl = 'http://localhost:3000/';
  posts$: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.loadPosts();
  }

  async addPost(title: string) {
    this.http.post(this.baseUrl + 'posts', {id: this.posts$.length + 1, title: title}).subscribe(res =>{
      console.log('Saved');
      this.loadPosts();
    });
  }

  loadPosts(){
    this.posts$ = this.http.get(this.baseUrl + 'posts');
  }
  deletePost(id) {
    this.http.delete(this.baseUrl + `posts/${id}`)
      .subscribe(res => {
        this.loadPosts();
      });
  }
}
