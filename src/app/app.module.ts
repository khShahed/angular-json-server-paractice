import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowPostsComponent } from './components/show-posts/show-posts.component';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { PostsService } from './services/posts.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { AnotherComponent } from './components/another/another.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent,
    AddPostsComponent,
    HomeComponent,
    AnotherComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
