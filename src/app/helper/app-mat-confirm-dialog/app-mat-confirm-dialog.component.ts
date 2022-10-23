import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-app-mat-confirm-dialog',
  templateUrl: './app-mat-confirm-dialog.component.html',
  styleUrls: ['./app-mat-confirm-dialog.component.css']
})
export class AppMatConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data :any,
  public dialogRef: MatDialogRef<AppMatConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
