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
  currentSort: { field: string, direction: string } = { field: '', direction: 'asc' };

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

  sort(field: string) {
    const direction = this.currentSort.field === field && this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    this.currentSort = { field, direction };

    this.usertypes.sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];
  
      if (field === 'id') {
        valueA = Number(valueA);
        valueB = Number(valueB);
      } else if (field === 'label') {
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
