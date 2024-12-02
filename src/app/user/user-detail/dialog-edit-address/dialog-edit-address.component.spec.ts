import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../../../app.config';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;
  const firebase = firebaseConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditAddressComponent,
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

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
