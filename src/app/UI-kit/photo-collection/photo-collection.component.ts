import { Component, OnInit, Input } from '@angular/core';
import { Photo, CollectionParent, PhotoClickFunc } from './photo-collection.types';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss']
})
export class PhotoCollectionComponent implements OnInit {

  @Input() photos: Photo[];
  @Input() handlePhotoClick?: PhotoClickFunc;
  @Input() parent?: CollectionParent;

  constructor() {}

  ngOnInit() {
  }

}
