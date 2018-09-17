import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpParams, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  private handleError(error: HttpErrorResponse) {
    // console.log('handleError', error);
    let msg = 'Something bad happened; please try again later.';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      msg = 'An error occurred: ' + error.error.message;

    } else if (error.error.ResponseStatus) {
      // Check for friendly error message
      const res = error.error.ResponseStatus;
      msg = res.Message ? res.Message : res.ErrorCode;

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      msg =
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
    }

    // throw error with a user-facing error message
    return throwError(new Error(msg));
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.handleError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
    ).pipe(catchError(this.handleError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
    ).pipe(catchError(this.handleError));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`,
    ).pipe(catchError(this.handleError));
  }
}
