import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/helper/notification.service';
import { UserLimiterService } from 'src/app/shared/user-limiter.service';
import { UserService } from './../../../shared/user.service';
import { RouteService } from './../../../shared/route.service';


@Component({
  selector: 'app-api-user-limiter-create',
  templateUrl: './api-user-limiter-create.component.html',
  styleUrls: ['./api-user-limiter-create.component.css']
})
export class ApiUserLimiterCreateComponent implements OnInit {


  allowedHttpMethod = ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
  usersList = []
  routeList = []
  constructor(public dialogRef: MatDialogRef<ApiUserLimiterCreateComponent>
    , private notificationService: NotificationService, public service: UserLimiterService
    , public userService: UserService, public routeService: RouteService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.usersList = data
        console.table(this.usersList)
      }
    )

    this.routeService.getAll().subscribe(data => {
      this.routeList = data
      console.table(this.routeList)
    })
  }
  onFormSubmit() {

    if (!this.service.form.controls['id'].value) {
      this.insertUserLimiter();
    } else {
      this.updateUserLimiter();
    }

  }

  private updateUserLimiter() {
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

  private insertUserLimiter() {
    this.service.insert().subscribe(
      data => {

        console.log(data);
        this.notificationService.success('UserLimiter Have Been Created');
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
