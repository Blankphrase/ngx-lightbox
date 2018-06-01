export interface ModuleOptions {
  galleryOptions?: IGalleryOptions;
  albumOptions?: IAlbumOptions;
  lightboxOptions?: ILightboxOptions;
}

interface IGalleryOptions {
  width?: string;
}

interface IAlbumOptions {
  backgroundColor?: string;
  coverImageWidth?: string;
  coverImageMaxHeight?: string;
  titleColor?: string;
}

interface ILightboxOptions {
  backdropColor?: string;
  closeIconColor?: string;
  dotColor?: string;
  imageMaxWidth?: string;
  imageMaxHeight?: string;
}

export interface GalleryAlbum {
  folderPath?: string;
  title: string;
  files?: GalleryFile[];
}

export interface GalleryFile {
  fileName: string;
  title: string;
}
