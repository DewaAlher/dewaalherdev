import { Injectable } from '@angular/core';
import { Cosmic } from 'cosmicjs';

@Injectable({
  providedIn: 'root',
})
export class CosmicService {
  private cosmic;

  constructor() {
    this.cosmic = new Cosmic(); // Initialize the Cosmic JS instance
  }

  // Implement your methods to interact with the Cosmic JS API

  // For example, a method to fetch posts from the Cosmic JS bucket
  getPosts() {
    return this.cosmic.bucket('dewaalherdev').getObjects({
      type: 'posts',
      limit: 10, // Adjust the limit as per your requirements
    });
  }

  // Add more methods as needed for other Cosmic JS operations
}
