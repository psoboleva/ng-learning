
import { Photo, CollectionParent } from '../UI-kit/photo-collection/photo-collection.types';

export interface Gallery extends Photo {}

export interface GalleryParent extends CollectionParent {}

export interface GetGalleries {
    [x: number]: {
        ID: number,
        post_title: string,
        thumbnail: boolean | string,
        [x: string]: any,
    }
}
