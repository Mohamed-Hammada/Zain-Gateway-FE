import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl: string = 'http://localhost:8080/internal/api-user';
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      password: ''
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
      name: row.name,
      password: row.password
    })

  }


}
