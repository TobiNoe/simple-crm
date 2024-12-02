import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { FirestoreService } from '../shared/services/firestore.service';
import { MatDialogRef } from '@angular/material/dialog';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../app.config';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  const firebase = firebaseConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        UserComponent,
        NoopAnimationsModule
      ],
      providers: [
        FirestoreService,
        provideFirebaseApp(() => initializeApp(firebase)), // Firebase aus app.config.ts initialisieren
        provideFirestore(() => getFirestore()), // Firestore bereitstellen // Den echten FirestoreService bereitstellen
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') }, // MatDialogRef mocken
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
