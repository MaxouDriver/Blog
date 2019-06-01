import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListItemComponentComponent } from './post-list-component/post-list-item-component/post-list-item-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './services/post-service';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponentComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponentComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    HeaderComponent,
    NavbarComponent,
    NewPostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
