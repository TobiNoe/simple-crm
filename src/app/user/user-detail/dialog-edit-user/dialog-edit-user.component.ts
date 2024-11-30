import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-user',
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
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User;
  loading = false;
  birthDate: Date = new Date;
  
  
  ngOnInit(): void {
    this.birthDate = new Date(this.user.birthDate);
    console.log('birthDate :>> ', this.birthDate);
  }

  saveUser() {

  }

}
