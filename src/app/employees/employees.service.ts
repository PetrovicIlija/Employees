import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { map } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeFilter } from './employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpWrapperService,
  ) { }

  getEmployees() {
    return this.http.get('employees').pipe(map((result: { data: any[] }) => { 
      let employees = result.data.map(employee => new Employee(employee));
      return employees;
    }));
  }
}
