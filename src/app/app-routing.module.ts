import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PostComponent } from './pages/post/post.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, PagesModule],
})
export class AppRoutingModule {}
