import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiRouteComponent } from './pages/api-route/api-route.component';
import { ApiUserComponent } from './pages/api-user/api-user.component';
import { ApiUserLimiterComponent } from './pages/api-user-limiter/api-user-limiter.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ExcelServiceService } from './helper/excel.service.service';
import { DatePipe } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AppMatConfirmDialogComponent } from './helper/app-mat-confirm-dialog/app-mat-confirm-dialog.component';
import { ApiUserCreateComponent } from './pages/api-user/api-user-create/api-user-create.component';
import { ApiUserEditComponent } from './pages/api-user/api-user-edit/api-user-edit.component';
import { ApiUserMainViewComponent } from './pages/api-user/api-user-main-view/api-user-main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiRouteCreateComponent } from './pages/api-route/api-route-create/api-route-create.component';
import { ApiRouteMainViewComponent } from './pages/api-route/api-route-main-view/api-route-main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiRouteComponent,
    ApiUserComponent,
    ApiUserLimiterComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainPageComponent,
    AppMatConfirmDialogComponent,
    ApiUserCreateComponent,
    ApiUserEditComponent,
    ApiUserMainViewComponent,
    ApiRouteCreateComponent,
    ApiRouteMainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule

  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,

  ],
  providers: [MatDatepickerModule,  ExcelServiceService , DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[ApiUserCreateComponent,ApiRouteCreateComponent,AppMatConfirmDialogComponent]
})
export class AppModule { }
