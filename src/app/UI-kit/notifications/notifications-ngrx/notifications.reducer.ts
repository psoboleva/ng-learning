import { payloadAction, NotificationActionTypes} from './notifications.actions';
import { errorNotification, successNotification } from '../notification.types';

export const initialState = null;

export function NotificationsReducer(state = initialState, action: payloadAction) {
  switch (action.type) {
    case NotificationActionTypes.setNotification:
      return action.payload;
    case NotificationActionTypes.genericError:
      return errorNotification;
    case NotificationActionTypes.genericSuccess:
      return successNotification;
    case NotificationActionTypes.clearNotification:
      return initialState;
    default:
      return state;
  }
}