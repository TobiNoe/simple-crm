import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-3178d","appId":"1:435137532963:web:6cddd067c1c3e10a7d8d96","storageBucket":"simple-crm-3178d.firebasestorage.app","apiKey":"AIzaSyBmgKKvPj8Dv_MhZOoBS4FpTS7NoO3DF7o","authDomain":"simple-crm-3178d.firebaseapp.com","messagingSenderId":"435137532963"})), provideFirestore(() => getFirestore())]
};
