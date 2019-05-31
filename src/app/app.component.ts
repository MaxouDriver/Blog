import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "MyBlog";
  posts:Array<Post> = [];

  constructor(){
    this.posts.push(new Post("Mon premier post", "Test content"));
    this.posts.push(new Post("Mon deuxieme post", "Test content"));
    this.posts.push(new Post("Encore un post", "Test content"));
  }
}
