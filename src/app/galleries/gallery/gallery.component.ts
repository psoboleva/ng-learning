import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryMapper } from '../gallery-mapper';
import { GalleryService } from '../gallery.service';
import { GalleryItem } from '../gallery-item.types';
import { CollectionParent } from '../../UI-kit/photo-collection/photo-collection.types';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {

  @Input() parentId: number;
  private galleryItems: GalleryItem[];
  private parent: CollectionParent;

  constructor(
    private route: ActivatedRoute,
    private data: GalleryService,
    private mapper: GalleryMapper,
  ) {
    this.galleryItems = [];
  }

  ngOnInit() {
    this.getGalleryItems();
  }
  getGalleryItems(): void {
    const id = this.parentId | this.route.snapshot.params.id;
    this.data.getGalleryItems(id).subscribe(
      (response) => {
        this.galleryItems = this.mapper.mapGalleryItems(response);
        this.parent = this.mapper.mapGalleryParent(response);
      });
  }
}
