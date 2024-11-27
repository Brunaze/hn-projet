import { Component, OnInit } from '@angular/core';
import { Usertype } from '../usertype';
import { UserTypeServiceService } from '../user-type-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-type-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-type-list.component.html',
  styleUrl: './user-type-list.component.css'
})
export class UserTypeListComponent implements OnInit{

  usertypes: Usertype[] = [];

  constructor(private userTypeService: UserTypeServiceService) {}

  ngOnInit(): void {
    this.userTypeService.findAllUserType().subscribe(data => {
      this.usertypes = data;
    })
  }

  deleteUsertype(id: string): void {
    this.userTypeService.delete(id).subscribe({
      next: () => {
        this.usertypes = this.usertypes.filter(usertype => usertype.id !== id);
      }
    })
  }

}
