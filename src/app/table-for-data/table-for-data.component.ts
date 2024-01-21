import { Component, OnInit } from '@angular/core';
import { User, HARDCODED_USERS } from './models/mock-json-data';

@Component({
  selector: 'app-table-for-data',
  templateUrl: './table-for-data.component.html',
  styleUrls: ['./table-for-data.component.css']
})
export class TableForDataComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void { 
    this.users = HARDCODED_USERS; 
  }

}
