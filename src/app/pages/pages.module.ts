// pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostComponent } from './post/post.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    PostComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
