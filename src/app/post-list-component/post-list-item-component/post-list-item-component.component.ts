import { Input, Component, OnInit } from '@angular/core';
import {Post} from '../../modele/post';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})

export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit(){
  }

  onLike(){
    this.postService.likePost(this.index);
  }

  onDislike(){
    this.postService.dislikePost(this.index);
  }

  remove(){
    this.postService.removePost(this.index);
  }
}