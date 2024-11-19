import { Component, inject, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../shared/models/user.class';
import { FormsModule } from '@angular/forms';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';


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
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDate: any;

  constructor() {

  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user :>> ', this.user);
    console.log('birthDate :>> ', this.birthDate);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(this.firestore, "users"), {
      lastName: this.user.lastName,
      firstName: this.user.firstName
    });
    console.log("Document written with ID: ", docRef.id);

    /*  this.firestore
     .collection('users')
     .add(this.user)
     .then((result: any){
       console.log('Adding User finished:>> ', result );
     }); */
  }

}
