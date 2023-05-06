import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostModule } from './post/post.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, PostModule],
})
export class PagesModule {}
