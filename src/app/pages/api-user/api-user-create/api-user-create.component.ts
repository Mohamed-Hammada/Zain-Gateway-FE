import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../shared/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationService } from './../../../helper/notification.service'

@Component({
  selector: 'app-api-user-create',
  templateUrl: './api-user-create.component.html',
  styleUrls: ['./api-user-create.component.css']
})
export class ApiUserCreateComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ApiUserCreateComponent>
    , private notificationService: NotificationService, public service: UserService) { }

  ngOnInit(): void {
  }
  onFormSubmit() {

    if (!this.service.form.controls['id'].value) {
      this.insertUser();
    } else {
      this.updateUser();
    }

  }

  private updateUser() {
    this.service.update().subscribe(
      data => {

        console.log(data);
        this.notificationService.success('Successfully Completed');
        this.onClose();
      },
      error => {
        console.log(error);
        this.notificationService.warn(error.message);
      }

    );
  }

  private insertUser() {
    this.service.insert().subscribe(
      data => {

        console.log(data);
        this.notificationService.success('User Have Been Created');
        this.onClose();
      },
      error => {
        console.log(error);
        this.notificationService.warn(error.message);
      }

    );
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
