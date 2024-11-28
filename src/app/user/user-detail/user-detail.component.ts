import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../shared/services/firestore.service';
import { User } from '../../shared/models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  firestoreService = inject(FirestoreService);
  user: User = new User();
  
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.user = new User(await this.firestoreService.getUser(userId));
  }

}
