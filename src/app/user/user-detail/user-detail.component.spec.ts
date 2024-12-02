import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from '../../shared/services/firestore.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../../app.config';
import { of } from 'rxjs';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  const firebase = firebaseConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDetailComponent
      ],
      providers: [
        FirestoreService,
        provideFirebaseApp(() => initializeApp(firebase)), // Firebase aus app.config.ts initialisieren
        provideFirestore(() => getFirestore()), // Firestore bereitstellen // Den echten FirestoreService bereitstellen
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') }, // MatDialogRef mocken
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => 'mockedParamValue' }), // ActivatedRoute mocken
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/* 
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from '../../shared/services/firestore.service';
import { of } from 'rxjs'; // Für Mocking von ActivatedRoute

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailComponent], // Die Komponente deklarieren
      providers: [
        FirestoreService, // Den echten FirestoreService bereitstellen
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') }, // MatDialogRef mocken
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => 'mockedParamValue' }), // ActivatedRoute mocken
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */

