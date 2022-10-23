import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class UserLimiterService {

  serviceUrl: string = 'http://localhost:8080/internal/api-user-limiter';
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    threshold: new FormControl(10, Validators.required),
    ttl: new FormControl(500, Validators.required),
    active: new FormControl(1),
    route_id: new FormControl(null),
    path: new FormControl('', Validators.required),
    method: new FormControl('', Validators.required),
    user_id: new FormControl(null),
    user_name: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      threshold: 10,
      ttl: 500,
      active: 1,
      route_id: null,
      path: '',
      method: 'GET',
      user_id: null,
      user_name: ''
    });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  getAll() {
    return this.http.get<any>(`${this.serviceUrl}`).pipe(catchError(this.errorHandler));
  }


  getAllByDate(startDate: any, endDate: any) {
    return this.http.post<any>(`${this.serviceUrl}/byDate`, { startDate: startDate, endDate: endDate }).pipe(catchError(this.errorHandler));

  }

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.serviceUrl}/${id}`).pipe(catchError(this.errorHandler));
  }

  insert() {
    return this.http.post<any>(`${this.serviceUrl}`, this.form.value).pipe(catchError(this.errorHandler));
  }

  update() {
    return this.http.put<any>(`${this.serviceUrl}/${this.form.controls['id'].value}`, this.form.value).pipe(catchError(this.errorHandler));
  }

  populateForm(row: any) {
    debugger
    this.form.setValue({
      id: row.id,
      threshold: row.threshold,
      ttl: row.ttl,
      active: row.active,
      route_id: row.route_id,
      path: row.path,
      method: row.method,
      user_id: row.user_id,
      user_name: row.user_name
    })

  }
}
