import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POSTS } from '../post/post.data';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToPost(title: string) {
    this.router.navigate(['/post', { title: title }]);
  }

  posts: Post[] = POSTS;
}
