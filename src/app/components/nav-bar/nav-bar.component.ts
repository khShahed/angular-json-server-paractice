import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(
    public postService: PostsService
  ) { }
}
