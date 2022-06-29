import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-actions-toolbar',
  templateUrl: './users-actions-toolbar.component.html',
  styleUrls: ['./users-actions-toolbar.component.css']
})
export class UsersActionsToolbarComponent implements OnInit {
  @Output() selectAllEventNotify = new EventEmitter();
  @Output() deleteItemsEventNotify = new EventEmitter();
  @Output() sortItemsAscEventNotify = new EventEmitter();
  @Output() sortItemsDscEventNotify = new EventEmitter();
  @Output() searchEventNotify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectAll() {
    this.selectAllEventNotify.emit();
  }

  deleteItems() {
    this.deleteItemsEventNotify.emit();
  }

  sortItemsAsc() {
    this.sortItemsAscEventNotify.emit();
  }

  sortItemsDesc() {
    this.sortItemsDscEventNotify.emit();
  }

  search(term: string) {
    this.searchEventNotify.emit(term);
  }
}
