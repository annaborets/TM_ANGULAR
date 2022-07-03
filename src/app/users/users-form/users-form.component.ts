import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { User } from '../users';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
  });

  @Output() newUserAddedEvent = new EventEmitter<User>();
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.reactiveForm.invalid) {
      return;
    }
    this.usersService.postUser(this.reactiveForm.value as User).subscribe(
      resultUser => {
        this.newUserAddedEvent.emit(resultUser);
        this.reactiveForm.reset();
        formDirective.resetForm();
      }
    );
  }
}
