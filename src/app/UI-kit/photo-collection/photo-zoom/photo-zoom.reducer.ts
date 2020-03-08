import { payloadAction, PhotoZoomActionTypes} from './photo-zoom.actions';

export const initialState = null;

export function PhotoZoomReducer(state = initialState, action: payloadAction) {
  switch (action.type) {
    case PhotoZoomActionTypes.selectPhoto:
      return action.payload;
    default:
      return state;
  }
}