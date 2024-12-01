/* import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule,
        AngularFirestoreModule, // Firestore-Modul importieren
      ],
      providers: [
        FirestoreService
      ],
    });
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); */

import { TestBed } from '@angular/core/testing';
import { FirestoreService } from './firestore.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../../app.config';

describe('FirestoreService', () => {
  const firebase = firebaseConfig;
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        FirestoreService,
        provideFirebaseApp(() => initializeApp(firebase)), // Firebase aus app.config.ts initialisieren
        provideFirestore(() => getFirestore()) // Firestore bereitstellen
      ],
    });
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

