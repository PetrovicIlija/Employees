import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogTemplateComponent } from './confirm-dialog-template/confirm-dialog-template.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  open(text: string | string[], confirmButtonText: string = '', cancelButtonText: string = '', options?: { width: string, disableClose?: boolean }): Observable<boolean> {
    return this.dialog.open(ConfirmDialogTemplateComponent, {
      width: options?.width ? options.width : '400px',
      disableClose: options?.disableClose ? options.disableClose : false,
      data: {
        text: text,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
      },
    }).afterClosed();
  }
}
