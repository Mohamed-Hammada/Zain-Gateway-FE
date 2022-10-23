import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/route.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/helper/notification.service';

@Component({
  selector: 'app-api-route-create',
  templateUrl: './api-route-create.component.html',
  styleUrls: ['./api-route-create.component.css']
})
export class ApiRouteCreateComponent implements OnInit {

  allowedHttpMethod = ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'TRACE']
  constructor(public dialogRef: MatDialogRef<ApiRouteCreateComponent>
    , private notificationService: NotificationService, public service: RouteService) { }

  ngOnInit(): void {
  }
  onFormSubmit() {

    if (!this.service.form.controls['id'].value) {
      this.insertRoute();
    } else {
      this.updateRoute();
    }

  }

  private updateRoute() {
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

  private insertRoute() {
    this.service.insert().subscribe(
      data => {

        console.log(data);
        this.notificationService.success('Route Have Been Created');
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
