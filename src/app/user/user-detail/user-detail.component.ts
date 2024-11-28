import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

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
  user: any;
  
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id'); // ID aus der Route
    console.log('UserID :>> ', userId);
  }

}
