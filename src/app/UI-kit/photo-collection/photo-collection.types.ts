export interface Photo {
    id: number,
    thumbnailUrl: string,
    photoUrl: string,
    date?: Date,
    title?: string,
    subtitle?: string,
    description?: string,
    loading?: boolean,
  }
  export interface CollectionParent {
    id: number,
    title: string,
    date?: Date,
    description?: string,
    numberPhotos?: number,
  }
  export interface PhotoClickFunc {
    (id: number): void;
  }