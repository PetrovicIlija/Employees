import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from './employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['first-name', 'last-name', 'date-of-birth', 'job-title' ];
  public displayedSearchColumns: string[] = ['search-by-first-name', 'search-by-last-name', 'search-by-date-of-birth-placeholder', 'search-by-job-title' ];
  public isSearchButtonShown: boolean = false;
  public isLoading: boolean = false;
  public filter: EmployeeFilter = {};
  public jobTitles: string[] = [];

  dataSource!: MatTableDataSource<Employee>;
  pagination = {
    pageSizeOptions: [2, 5, 10, 20],
    totalResults: 0,
  };

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  constructor(
    public employeesService: EmployeesService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  ngAfterViewInit(): void {
    this.sort?.sortChange.subscribe(() => {
      if (this.paginator) {
        this.paginator.pageIndex = 0;
      }
      this.loadEmployees();
    });

    this.paginator?.page.subscribe(() => {
      window.scroll(0, 0);
      this.loadEmployees();
    });
  }

  loadEmployees() {
    this.isLoading = true;
    this.employeesService.getEmployees().subscribe({
      next: (employees) => {
        this.dataSource = new MatTableDataSource<Employee>(employees);
        this.dataSource.sort = this.sort!;
        this.dataSource.paginator = this.paginator!;
        this.pagination.totalResults = employees.length;
        employees.forEach(employee => {
          if (employee.jobTitle && !this.jobTitles.includes(employee.jobTitle)) {
            this.jobTitles.push(employee.jobTitle);
          }
        });
        this.isSearchButtonShown = false;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  createEmployee() {
    this.router.navigate(['/create-employee']);
  }

  searchSettingsChanged() {
    this.isSearchButtonShown = true;
  }

  searchEmployees() {
    this.isLoading = true;
    this.dataSource.data = this.dataSource.data.filter(employee => {
      if (this.filter.firstName && !employee.firstName?.includes(this.filter.firstName)) {
        return false;
      }
      if (this.filter.lastName && !employee.lastName?.includes(this.filter.lastName)) {
        return false;
      }
      if (this.filter.jobTitle && !employee.jobTitle?.includes(this.filter.jobTitle)) {
        return false;
      }
      return true;
    });
  }
}

export interface EmployeeFilter {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
}
