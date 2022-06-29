import { Component, OnInit } from '@angular/core';
import { Checkable, User, WithImage } from '../users';
import { UsersService } from '../users.service';

const MOCK_IMG_PATH = 'https://i.pinimg.com/originals/7a/9d/0d/7a9d0d3e2678927b6d1994d9b078030b.png';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  searchTerm: string = '';
  users: (User & Checkable & WithImage)[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getFormatedUsers();
  }

  getFormatedUsers() {
    this.usersService.getAll()
      .subscribe(users => {
        this.users = users.map(user => ({ ...user, isSelected: false, imgPath: MOCK_IMG_PATH }))
      })
  }

  selectAll() {
    this.users.forEach((item) => {
      item.isSelected = true;
    })
  }

  getFilteredUsers() {
    return this.users.filter(user => user.lastname.toLowerCase().indexOf(this.searchTerm) !== -1)
  }

  deleteItems() {
    this.users = this.users.filter(item => item.isSelected !== true)
  }

  sortItemsAsc() {
    return this.users.sort((a, b): any => {
      return (a.lastname.toLowerCase() > b.lastname.toLowerCase()) ? 1
        : (b.lastname.toLowerCase() > a.lastname.toLowerCase()) ? -1 : 0;
    })
  }

  sortItemsDesc() {
    return this.users.sort((a, b): any => {
      return (a.lastname.toLowerCase() > b.lastname.toLowerCase()) ? -1
        : (b.lastname.toLowerCase() > a.lastname.toLowerCase()) ? 1 : 0;
    })
  }

  setSearchTerm(term: string) {
    this.searchTerm = term;
  }
}
