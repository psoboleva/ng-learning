import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends BaseService {

  private contentPath: string;

  constructor(
    http: HttpClient,
    store: Store<{ notification: Notification }>
  ) {
    super( http, store);
    this.contentPath =  'http://polina.space/data/info.php';
  }
  public getAboutContent (): Observable<string> {
    this.clearNotification();
    return this.http.get<string>(this.contentPath)
      .pipe(
        catchError(this.handleError<string>('getContent'))
      );
  }
}
