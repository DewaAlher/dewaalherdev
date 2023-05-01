import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from './post.data';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId!: number;
  post: Post | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.postId = +params.get('id')!;
      this.post = POSTS.find((post) => post.id === this.postId);
    });
  }
}
