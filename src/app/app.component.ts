import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'employees';
  navLinks = [
    { path: '/employees', label: 'Employees' },
    { path: '/create-employee', label: 'Create Employee' }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
