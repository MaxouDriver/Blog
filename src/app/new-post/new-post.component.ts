import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../services/post-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {

    this.initForm();

  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    console.log(formValue);
    this.postService.createPost(formValue['title'], formValue['content']);
    this.router.navigate(['/']);
  }
}
