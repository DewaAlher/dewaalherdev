import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Post 1',
      summary: 'Summary of Post 1',
      content: '<p>Content of Post 1</p>',
    },
    {
      id: 2,
      title: 'Post 2',
      summary: 'Summary of Post 2',
      content: '<p>Content of Post 2</p>',
    },
    {
      id: 3,
      title: 'Post 3',
      summary: 'Summary of Post 3',
      content: '<p>Content of Post 3</p>',
    },
  ];

  
}
