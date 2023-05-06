import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, PagesModule, AppRoutingModule, FontAwesomeModule],
  providers: [FaIconLibrary],
  bootstrap: [AppComponent],
})
export class AppModule {}
