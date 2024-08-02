import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  public isLoading: boolean = false;
  public employee: Employee = new Employee();

  @ViewChild('employeeForm') form!: NgForm;

  constructor(
    public confirmDialog: ConfirmDialogService,
  ) { }

  saveEmployee() {
    this.isLoading = true;
    console.log(this.employee);
    this.isLoading = false;
  }

  reset(){
    if (!this.form.dirty) {
      return;
    }
    this.confirmDialog.open('Are you sure you want to reset the form?').subscribe({
      next: (confirmed) => {
        if (confirmed) {
          this.employee = new Employee();
          this.form.resetForm();
        }
      }
    });
  }

}
