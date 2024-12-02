import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../shared/services/firestore.service';
import { User } from '../../shared/models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  firestoreService = inject(FirestoreService);
  user: User = new User();
  userSignal = signal({
    firstName: this.user.firstName,
    lastName: this.user.lastName,
    email: this.user.email,
    street: this.user.street,
    zipCode: this.user.zipCode,
    city: this.user.city
  });

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.user = new User(await this.firestoreService.getUser(userId));
    this.userSignal.set({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city
    });
    console.log('userSignal.Name :>> ', this.userSignal().firstName);
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }
}
