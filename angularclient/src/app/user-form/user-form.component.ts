import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';
import { Usertype } from '../usertype';
import { UserTypeServiceService } from '../user-type-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

  user: User;
  userTypes: Usertype[] = [];
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService, private userTypeService: UserTypeServiceService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id');
      if (!!this.id) {
        this.user.id = this.id;
      }
    })
    this.userTypeService.findAllUserType().subscribe( (data: Usertype[]) => {
      this.userTypes = data;

      if (!!this.id) {
        this.userService.findUserById(this.id).subscribe( user => {
          this.user = user;
          
          this.user.userType = this.userTypes.find(
            (type) => type.id === this.user.userType?.id
          ) || null;
        })
      }
      
    })

    
  }

  onSubmit() {
    if (this.id ==  null) {
      this.userService.save(this.user).subscribe( () => this.gotoUserList());
    } else {
      this.userService.update(this.user).subscribe( () => this.gotoUserList());
    }
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
