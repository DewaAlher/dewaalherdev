import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PagesModule } from './pages/pages.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    FontAwesomeModule,
  ],
  providers: [FaIconLibrary],
  bootstrap: [AppComponent]
})
export class AppModule { }
