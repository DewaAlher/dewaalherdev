import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POSTS } from '../../models/post.data';
import { Post } from '../../models/post.model';

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
