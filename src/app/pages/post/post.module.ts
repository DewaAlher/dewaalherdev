import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: ':id', component: PostComponent },
];

@NgModule({
  declarations: [PostComponent],
  imports: [RouterModule.forChild(routes)],
})
export class PostModule {}
