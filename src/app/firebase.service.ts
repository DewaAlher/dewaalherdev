import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { FirebaseOptions } from '@firebase/app-types';
import { getAnalytics } from 'firebase/analytics';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {
    const firebaseConfig: FirebaseOptions = {
      // Konfigurasi Firebase Anda
    };

    initializeApp(firebaseConfig);
    getAnalytics();
  }
}
