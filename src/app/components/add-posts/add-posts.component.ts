import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  title: string;

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
  }

  async savePost() {
    if (this.title.length <2 )
      return;
    await this.postService.addPost(this.title);
    this.title = '';
  }
}
