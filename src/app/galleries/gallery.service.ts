import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GetGalleries } from './gallery.types';
import { GetGalleryItems } from './gallery-item.types';
import { BaseService } from '../base.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends BaseService {

  private galleriesListPath: string;
  private galleryByIdPath: string;

  constructor(
    http: HttpClient,
    store: Store<{ notification: Notification }>
  ) {
    super(http, store);
      this.galleriesListPath =  'http://polina.space/data/gallery.php';
      this.galleryByIdPath = 'http://polina.space/data/gallery.php?gallery=';
  }
  getGalleries (): Observable<GetGalleries> {
    this.clearNotification();
    return this.http.get<GetGalleries>(this.galleriesListPath)
      .pipe(
        catchError(this.handleError<GetGalleries>('getGalleries', []))
      );
  }
  getGalleryItems (galleryId: number): Observable<GetGalleryItems> {
    this.clearNotification();
    return this.http.get<GetGalleryItems>(this.galleryByIdPath + galleryId)
      .pipe(
        catchError(this.handleError<GetGalleryItems>('getGalleryItems'))
      );
  }
}
