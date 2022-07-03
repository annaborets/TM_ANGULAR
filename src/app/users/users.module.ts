import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersActionsToolbarComponent } from './users-actions-toolbar/users-actions-toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersActionsToolbarComponent,
    UsersFormComponent
  ],
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    UsersListComponent,
    UsersFormComponent,
  ]
})
export class UsersModule { }
