import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  serviceUrl: string = 'http://localhost:8080/internal/api-routes';
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    path: new FormControl('', Validators.required),
    method: new FormControl('GET', Validators.required),
    uri: new FormControl('', Validators.required),
    retry_count: new FormControl(0, Validators.required),
    retry_first_backoff_in_milli_seconds: new FormControl(50, Validators.required),
    retry_max_backoff_in_milli_seconds: new FormControl(500, Validators.required),
    response_timeout_in_milli_seconds: new FormControl(200, Validators.required),
    connect_timeout_in_milli_seconds: new FormControl(200, Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      path: '',
      method: 'GET',
      uri: '',
      retry_count: 0,
      retry_first_backoff_in_milli_seconds: 50,
      retry_max_backoff_in_milli_seconds: 500,
      response_timeout_in_milli_seconds: 200,
      connect_timeout_in_milli_seconds: 200
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
    this.form.setValue({
      id: row.id,
      path: row.path,
      method: row.method,
      uri: row.uri,
      retry_count: row.retry_count,
      retry_first_backoff_in_milli_seconds: row.retry_first_backoff_in_milli_seconds,
      retry_max_backoff_in_milli_seconds: row.retry_max_backoff_in_milli_seconds,
      response_timeout_in_milli_seconds: row.response_timeout_in_milli_seconds,
      connect_timeout_in_milli_seconds: row.response_timeout_in_milli_seconds
    })

  }
}
