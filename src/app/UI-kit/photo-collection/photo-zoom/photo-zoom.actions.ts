import { Action } from '@ngrx/store';
import { Photo } from '../photo-collection.types';

export enum PhotoZoomActionTypes {
  selectPhoto = '[Notification Component] selectPhoto',
}

export class payloadAction implements Action {
  readonly type;
  payload: Photo;
}

export class SelectPhoto implements payloadAction {
  readonly type = PhotoZoomActionTypes.selectPhoto;
  constructor(public payload: Photo) {}
}