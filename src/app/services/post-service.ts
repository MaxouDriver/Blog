import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Post} from '../modele/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsSubject = new Subject<Array<Post>>();
  private posts : Array<Post>= [
    new Post("Mon premier post", "Test content"),
    new Post("Mon deuxieme post", "Test content"),
    new Post("Encore un post", "Test content")
  ];
  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  createPost(title: string, content: string){
    this.posts.push(new Post(title, content));
    this.emitPostSubject()
  }

  removePost(i: number){
    this.posts.splice(i, 1);
    this.emitPostSubject()
  }

  likePost(i: number){
    this.posts[i].like();
    this.emitPostSubject()
  }

  dislikePost(i: number){
    this.posts[i].dislike();
    this.emitPostSubject()
  }
}
