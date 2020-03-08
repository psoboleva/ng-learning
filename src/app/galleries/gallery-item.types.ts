import { Photo } from '../UI-kit/photo-collection/photo-collection.types';

export interface GalleryItem extends Photo {
}
export interface GetGalleryItems {
    parent_id: number,
    parent_title: string,
    parent_data: {
        [x: string]: any,
        Description?: string,
    },
    items: {
        [x: number]: {
            data: any,
            metadata: any,
        }
    }
}
