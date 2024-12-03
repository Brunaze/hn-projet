import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Usertype } from '../usertype';
import { UserTypeServiceService } from '../user-type-service.service';

@Component({
  selector: 'app-user-type-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './user-type-form.component.html',
  styleUrl: './user-type-form.component.css'
})
export class UserTypeFormComponent implements OnInit {

  usertype: Usertype;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private userTypeService: UserTypeServiceService) {
    this.usertype = new Usertype();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id');
    })
    if (!!this.id) {
      this.usertype.id = this.id;
      this.userTypeService.findUserTypeById(this.id).subscribe( usertype => {
        this.usertype = usertype;

      })
    }
  }

  onSubmit() {
    if (this.id == null) {
      this.userTypeService.save(this.usertype).subscribe( () => this.gotoUserTypeList());
    } else {
      this.userTypeService.update(this.usertype).subscribe( () => this.gotoUserTypeList());
    }
  }

  gotoUserTypeList() {
    this.router.navigate(['/usertypes']);
  }

}
