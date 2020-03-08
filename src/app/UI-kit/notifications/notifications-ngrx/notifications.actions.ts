import { Action } from '@ngrx/store';
import { Notification } from '../notification.types';

export enum NotificationActionTypes {
  setNotification = '[Notification Component] setNotification',
  genericError = '[Notification Component] genericError',
  genericSuccess = '[Notification Component] genericSuccess',
  clearNotification = '[Notification Component] clearNotification',
}
export class payloadAction implements Action {
  readonly type;
  payload: Notification;
}
export class CustomNotification implements payloadAction {
  readonly type = NotificationActionTypes.setNotification;
  constructor(public payload: Notification) {}
}
export class NotificationGenericError {
  readonly type = NotificationActionTypes.genericError;
}
export class NotificationGenericSuccess {
  readonly type = NotificationActionTypes.genericSuccess;
}
export class ClearNotification {
  readonly type = NotificationActionTypes.clearNotification;
}