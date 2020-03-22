import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo-collection.types';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SelectPhoto } from '../photo-zoom/photo-zoom.actions';

@Component({
  selector: 'app-photo-zoom',
  templateUrl: './photo-zoom.component.html',
  styleUrls: ['./photo-zoom.component.scss']
})
export class PhotoZoomComponent implements OnInit {
  
  private selectedPhoto: Observable<Photo>;
  private open: boolean;
  private loading: boolean;
  
  constructor(private store: Store<{ selectedPhoto: Photo }>) { 
    this.selectedPhoto = store.pipe(select('selectedPhoto')); 
    this.open = false;
    this.loading = true;
  }

  ngOnInit() {
  }
  private photoIsLoaded() {
    this.loading = false;
  }

  private zoomOut (): void {
    this.store.dispatch(new SelectPhoto(null));
    this.loading = true;
  }
  private openInfo(): void {
    this.open = true;
  }
  private closeInfo(): void {
    this.open = false;
  }

}
