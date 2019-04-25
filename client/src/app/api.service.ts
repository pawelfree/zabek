import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Examination } from './examination';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/v1/examinations";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getExaminations (): Observable<Examination[]> {
    return this.http.get<Examination[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched examinations')),
        catchError(this.handleError('getExaminations', []))
      );
  }

  getExamination(id: number): Observable<Examination> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Examination>(url).pipe(
      tap(_ => console.log(`fetched examination id=${id}`)),
      catchError(this.handleError<Examination>(`getExamination id=${id}`))
    );
  }

  addExamination (examination): Observable<Examination> {
    return this.http.post<Examination>(apiUrl, examination, httpOptions).pipe(
      tap((product: Examination) => console.log(`added examination w/ id=${examination.id}`)),
      catchError(this.handleError<Examination>('addExamination'))
    );
  }

  updateExamination (id, examination): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, examination, httpOptions).pipe(
      tap(_ => console.log(`updated examination id=${id}`)),
      catchError(this.handleError<any>('updateExamination'))
    );
  }

  deleteExamination (id): Observable<Examination> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Examination>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted examination id=${id}`)),
      catchError(this.handleError<Examination>('deleteExamination'))
    );
  }
}
