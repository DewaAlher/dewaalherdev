import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { POSTS } from '../../models/post.data';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public greeting: string;
  public posts: Post[] = POSTS;

  constructor(private router: Router) {this.greeting = '';}

  ngOnInit() {
    const hour = new Date().getHours();

    if (hour < 12) {
      this.greeting = 'Morning';
    } else if (hour < 18) {
      this.greeting = 'Evening';
    } else {
      this.greeting = 'Afternoon';
    }
  }

  navigateToPost(title: string) {
    this.router.navigate(['/post', { title: title }]);
  }
}
