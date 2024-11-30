import { Component, inject } from '@angular/core';
import { User } from '../../../shared/models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { FirestoreService } from '../../../shared/services/firestore.service';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule,
    NgIf
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  firestoreService = inject(FirestoreService);
  dialogRef = inject(MatDialogRef);
  user: User = new User;
  loading = false;

  saveUser() {
    this.loading = true;
    this.firestoreService.updateUser(this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
  }

}
