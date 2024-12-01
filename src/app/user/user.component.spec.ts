import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { FirestoreService } from '../shared/services/firestore.service';
import { MatDialogRef } from '@angular/material/dialog';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        UserComponent
      ],
      providers: [
        FirestoreService, // Den echten FirestoreService bereitstellen
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') }, // MatDialogRef mocken
        }]
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
