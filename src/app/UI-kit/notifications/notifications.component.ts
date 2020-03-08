import { Component, OnInit, Input } from '@angular/core';
import { Notification } from './notification.types';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() notification: Notification;

  ngOnInit() {
  }

}
