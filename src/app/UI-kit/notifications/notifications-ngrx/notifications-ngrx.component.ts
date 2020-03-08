import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Notification } from '../notification.types';

@Component({
  selector: 'app-notifications-ngrx',
  templateUrl: './notifications-ngrx.component.html'
})
export class NotificationsNgrxComponent implements OnInit {

  notification: Observable<Notification>;
  
  constructor(private store: Store<{ notification: Notification }>) { 
    this.notification = store.pipe(select('notification')); 
  }

  ngOnInit() {
  }

}

