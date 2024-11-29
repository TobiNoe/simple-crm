import { Component, inject, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.user = new User(await this.firestoreService.getUser(userId));
  }

  editUser() {
    this.dialog.open(DialogEditUserComponent);
  }

  editAddress() {
    this.dialog.open(DialogEditAddressComponent);
  }
}
