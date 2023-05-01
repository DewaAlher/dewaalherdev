import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch);
  }

  isActive: boolean = false;
  toggleActive(event: any) {
    this.isActive = !this.isActive;
    event.target.classList.toggle('active');
  }
}
