import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { NotificationGenericError, ClearNotification } from './UI-kit/notifications/notifications-ngrx/notifications.actions';

export class BaseService {

  private notification: Observable<Notification>; 

  constructor(
    public http: HttpClient,
    public store: Store<{ notification: Notification }>
  ) {
    this.notification = store.pipe(select('notification')); 
  }

  public clearNotification() {
    this.store.dispatch(new ClearNotification());
  }
  
  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.store.dispatch(new NotificationGenericError());
      return of(result as T);
    };
  }
}

