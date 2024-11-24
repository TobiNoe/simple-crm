import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { FirestoreService } from '../shared/services/firestore.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    MatCardModule,
    NgFor
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  readonly dialog = inject(MatDialog);
  firestoreService = inject(FirestoreService);

  /* constructor() {
    
  } */

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
