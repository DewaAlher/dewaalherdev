import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { POSTS } from '../models/post.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  getPost(id: number): Observable<Post | undefined> {
    return of(POSTS.find((post) => post.id === id));
  }
}
