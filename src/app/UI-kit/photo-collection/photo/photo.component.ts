import { Component, OnInit, Input } from '@angular/core';
import { Photo, PhotoClickFunc } from '../photo-collection.types';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectPhoto } from '../photo-zoom/photo-zoom.actions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo: Photo;
  @Input() slideshow: boolean;
  @Input() handlePhotoClick: PhotoClickFunc;
  private selectedPhoto: Observable<Photo>; 

  private loading: boolean;

  constructor(private store: Store<{ selectedPhoto: Photo }>) {
    this.selectedPhoto = store.pipe(select('selectedPhoto')); 
  }

  ngOnInit() {
    this.loading = true;
  }
  
  private photoIsLoaded(photo: Photo) {
    this.loading = false;
  }
  private handleClick(photoId: number):void {
    if (this.handlePhotoClick) {
      this.handlePhotoClick(photoId);
      return;
    }
    this.store.dispatch(new SelectPhoto(this.photo));
  }

}
