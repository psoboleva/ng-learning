import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { GalleryMapper } from '../gallery-mapper';
import { Gallery } from '../gallery.types';

@Component({
  selector: 'app-galleries-list',
  templateUrl: './galleries-list.component.html',
})
export class GalleriesListComponent implements OnInit {

  private selectedGallery: Gallery;
  private galleries: Gallery[];

  constructor (
    private data: GalleryService,
    private mapper: GalleryMapper,
  ) {
    this.galleries = [];
  }

  ngOnInit() {
    this.getGalleries();
  }
  handlePhotoClick(id: number): void {
    window.location.href = '/gallery/'+id;
  }

  getGalleries(): void {
    this.data.getGalleries().subscribe(
      response => this.galleries = this.mapper.mapGalleries(response)
    );
  }

}
