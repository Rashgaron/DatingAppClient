import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  users: User[]; 

  constructor( private http: HttpClient ){}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.http.get<User[]>("https://localhost:5001/api/users").subscribe(users => {
      this.users = users;
    },
      error => { console.log(error); });
  }
}
