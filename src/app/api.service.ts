import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const typeHomeUrl = 'http://aic-pif.in/Eprestige/api/all_list_by_type';
const direUrl = 'http://aic-pif.in/Eprestige/api/directory_list';
const todoList = 'http://aic-pif.in/Eprestige/api/user_todo_list';
const attendanceList = 'http://aic-pif.in/Eprestige/api/user_attendance_list';
const inboxList = 'http://aic-pif.in/Eprestige/api/user_inbox_list';
const addToDo = 'http://aic-pif.in/Eprestige/api/add_todo';
const userGallery = 'http://aic-pif.in/Eprestige/api/user_gallery';
const sendBUrls = 'http://aic-pif.com/Eprestige/api/add_user_product';
const buyList = 'http://aic-pif.in/Eprestige/api/get_user_product';
const buyCate = 'http://aic-pif.in/Eprestige/api/get_product_category';
const gList = 'http://aic-pif.in/Eprestige/api/institute_gallery_list';
const recentList = 'http://aic-pif.in/Eprestige/api/get_recent_activity';
const insList = 'http://aic-pif.in/Eprestige/api/institute';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred' + error.error.message);
    } else {
      console.log('Backend Error' + error.status);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  putTypeDataApi(types: string): Observable<any> {
    const params = new FormData();
    params.append('list_type', types);
    return this.http
      .post(typeHomeUrl, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getAttendanceApi(types: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', types);
    return this.http
      .post(attendanceList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getRecentList(types: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', types);
    return this.http
      .post(recentList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getinboxApi(types: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', types);
    return this.http
      .post(inboxList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getToDoApi(ids: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', ids);
    return this.http
      .post(todoList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getGalleryUser(ids: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', ids);
    return this.http
      .post(userGallery, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getGalleryAll(ids: string): Observable<any> {
    const params = new FormData();
    params.append('institute_id', ids);
    return this.http
      .post(gList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getSellList(ids: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', ids);
    return this.http
      .post(buyList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  productCate(ids: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', ids);
    return this.http
      .post(buyCate, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  inslist(ids: string): Observable<any> {
    const params = new FormData();
    params.append('user_id', ids);
    return this.http
      .post(insList, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  sendTodo(
    id: string,
    matter: string,
    one: string,
    priority: string,
    datetime: string
  ): Observable<any> {
    const params = new FormData();
    params.append('user_id', id);
    params.append('todo_category', one);
    params.append('todo_title', matter);
    params.append('todo_priority', priority);
    params.append('todo_time', datetime);
    return this.http
      .post(addToDo, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  sendBooks(
    id: string,
    cate: string,
    name: string,
    desc: string,
    price: string
  ): Observable<any> {
    const params = new FormData();
    params.append('user_id', id);
    params.append('product_category', cate);
    params.append('product_name', name);
    params.append('product_desc', desc);
    params.append('product_price', price);
    params.append('product_image', 'No Image');
    return this.http
      .post(sendBUrls, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  sendNotes(
    id: string,
    cate: string,
    name: string,
    desc: string,
    price: string
  ): Observable<any> {
    const params = new FormData();
    params.append('user_id', id);
    params.append('product_category', cate);
    params.append('product_name', name);
    params.append('product_desc', desc);
    params.append('product_price', price);
    params.append('product_image', 'No Image');
    return this.http
      .post(sendBUrls, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  sendReports(
    id: string,
    cate: string,
    name: string,
    desc: string,
    price: string
  ): Observable<any> {
    const params = new FormData();
    params.append('user_id', id);
    params.append('product_category', cate);
    params.append('product_name', name);
    params.append('product_desc', desc);
    params.append('product_price', price);
    params.append('product_image', 'No Image');
    return this.http
      .post(sendBUrls, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  sendOthes(
    id: string,
    cate: string,
    name: string,
    desc: string,
    price: string
  ): Observable<any> {
    const params = new FormData();
    params.append('user_id', id);
    params.append('product_category', cate);
    params.append('product_name', name);
    params.append('product_desc', desc);
    params.append('product_price', price);
    params.append('product_image', 'No Image');
    return this.http
      .post(sendBUrls, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  putDirectory(types: string): Observable<any> {
    const params = new FormData();
    return this.http
      .post(direUrl, params)
      .pipe(map(this.extractData), catchError(this.handleError));
  }
}
