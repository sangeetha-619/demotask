import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})
export class TransactionlistComponent  {
  [x: string]: any;
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      status: {
        title: 'status',
        filter: false
      }
    }
  };
  data = [
    // ... our data here
  ];
  
  source: LocalDataSource;
  
  constructor() {
    this.source = new LocalDataSource(this.data);

  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      },
      {
        field: 'Status',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  changePage($event: any) {
    this.resetAllSelector();
  }

  sort($event: any) {
    this.resetAllSelector();
  }

  filter($event: any) {
    this.resetAllSelector();
  }
  
  
}