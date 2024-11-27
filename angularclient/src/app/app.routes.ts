import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';

export const routes: Routes = [
    { path: 'users', component: UserListComponent},
    { path: 'adduser', component: UserFormComponent},
    { path: 'edituser/:id', component: UserFormComponent},
    { path: 'usertypes', component: UserTypeListComponent},
    { path: 'addusertype', component: UserTypeFormComponent},
    { path: 'editusertype/:id', component: UserTypeFormComponent}
  ];
