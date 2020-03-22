import { Injectable } from '@angular/core';
import { Gallery, GetGalleries } from './gallery.types';
import { GalleryItem, GetGalleryItems } from './gallery-item.types';
import { CollectionParent } from '../UI-kit/photo-collection/photo-collection.types';

@Injectable({
    providedIn: 'root'
})

export class GalleryMapper {

    mapGalleries(data: GetGalleries): Gallery[] {
        const galleries = [];
        for (let [key, value] of Object.entries(data)) {
            galleries.push({
                id: key,
                title: value.post_title,
                thumbnailUrl: value.thumbnail || '',
                photoUrl: value.thumbnail || '',
            });
        }
        return galleries;
    }

    mapGalleryItems(data: GetGalleryItems): GalleryItem[] {
        const items = [];
        const getItems = data.items;

        for (let [key, value] of Object.entries(getItems)) {
            const fileName = value.data.guid.split('/').reverse()[0];
            const thumbnail = value.data.guid.replace(fileName, value.metadata.sizes.medium.file);
            items.push({
                id: key,
                photoUrl: value.data.guid,
                thumbnailUrl: thumbnail,
                title: value.data.post_title,
                subtitle: value.data.post_excerpt || null,
                description: value.data.post_content || null,
            });
            
        }
        return items;
    }

    mapGalleryParent(data: GetGalleryItems): CollectionParent {
        const id = data.parent_id;
        const title = data.parent_title;
        const description = data.parent_data.Description;
        const thumbnailUrl = '';
        const photoUrl = '';
        return { id, title, description };
    }

}
