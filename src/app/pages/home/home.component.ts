import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CosmicService } from '../../services/cosmic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public greeting: string;
  public posts: any[] = [];

  constructor(private router: Router, private cosmicService: CosmicService) {
    this.greeting = '';
  }

  ngOnInit() {
    const hour = new Date().getHours();

    if (hour < 12) {
      this.greeting = 'Morning';
    } else if (hour < 18) {
      this.greeting = 'Evening';
    } else {
      this.greeting = 'Afternoon';
    }

    // Ambil data post dari Cosmic JS
    this.cosmicService.getPosts().then((response: any) => {
      this.posts = response.objects;
    });
  }

  navigateToPost(slug: string) {
    this.router.navigate(['/post', { slug: slug }]);
  }
}
