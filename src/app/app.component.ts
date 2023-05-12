import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dewaalherdev';
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Lakukan tindakan apa pun yang Anda perlukan setelah inisialisasi Firebase
  }
}
