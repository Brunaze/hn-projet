import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  currentSort: { field: string, direction: string } = { field: '', direction: 'asc' };

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.findAll().subscribe((data: User[]) => {
      this.users = data;
    })
  }

  deleteUser(id: string): void {
    this.userService.delete(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
      }
    });
  }

  sort(field: string) {
    const direction = this.currentSort.field === field && this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    this.currentSort = { field, direction };

    this.users.sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];

      if (valueA === null && valueB === null) {
        return 0;
      }
      if (valueA === null) {
        return this.currentSort.direction === 'asc' ? -1 : 1;
      }
      if (valueB === null) {
        return this.currentSort.direction === 'asc' ? 1 : -1; //
      }
  
      if (field === 'userType') {
        valueA = a[field]?.label.toLowerCase();
        valueB = b[field]?.label.toLowerCase();
      } else {
        valueA = valueA.toLowerCase ? valueA.toLowerCase() : valueA;
        valueB = valueB.toLowerCase ? valueB.toLowerCase() : valueB;
      }
  
      if (valueA < valueB) {
        return this.currentSort.direction === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.currentSort.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
