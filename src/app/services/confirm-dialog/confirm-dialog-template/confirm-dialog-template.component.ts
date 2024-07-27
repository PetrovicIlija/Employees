import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-template',
  templateUrl: './confirm-dialog-template.component.html',
  styleUrls: ['./confirm-dialog-template.component.scss']
})
export class ConfirmDialogTemplateComponent implements OnInit {
  text: string[] = [];
  defaultConfirmButtonText = 'Confirm';
  defaultCancelButtonText = 'Cancel';

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
    text: string | string[],
    confirmButtonText: string,
    cancelButtonText: string,
  }) { }

  ngOnInit() {
    if(typeof this.data.text == 'string') {
      this.text = [ this.data.text ];
    }
    else {
      this.text = this.data.text;
    }
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
