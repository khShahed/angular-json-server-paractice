import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.scss']
})
export class ShowPostsComponent implements OnInit {

  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
  }

  delete(id){
    this.postsService.deletePost(id);
  }
}
