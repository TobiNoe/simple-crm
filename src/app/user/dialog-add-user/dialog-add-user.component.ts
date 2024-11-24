import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../shared/models/user.class';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { FirestoreService } from '../../shared/services/firestore.service';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  firestoreService = inject(FirestoreService);
  user = new User();
  birthDate: any;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {

  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    this.firestoreService.saveUserInDB(this.user.toJSON());
    // Add a new document with a generated id.
    /* const docRef = await addDoc(collection(this.firestore, "users"), this.user.toJSON())
      .catch(
        (err) => console.error(err)
      ).then(
        (docRef) => console.log("Document written with ID: ", docRef?.id)); */
    this.loading = false;
    this.dialogRef.close();
  }

}
