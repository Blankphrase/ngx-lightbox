import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {LightboxComponent} from './lightbox/lightbox.component';
import {GalleryComponent} from './gallery/gallery.component';
import {AlbumComponent} from './album/album.component';
import {NgxHotkeysModule} from '@balticcode/ngx-hotkeys';
import {ModuleOptions} from './interfaces';
import {ModuleOptionsToken} from './token';
import {CommonModule} from '@angular/common';

export const defaultOptions: ModuleOptions = {
  galleryOptions: {
    width: '85%'
  },
  albumOptions: {
    backgroundColor: '#0d47a1',
    coverImageWidth: '100%',
    coverImageMaxHeight: '8em',
    titleColor: '#ffffff'
  },
  lightboxOptions: {
    backdropColor: 'rgba(0,0,0,0.9)',
    closeIconColor: '#f1f1f1',
    dotColor: '#ffffff',
    imageMaxWidth: '90%',
    imageMaxHeight: '75%'
  }
};

@NgModule({
  imports: [
    CommonModule,

    NgxHotkeysModule.forRoot({disableCheatSheet: true})
  ],
  declarations: [LightboxComponent, GalleryComponent, AlbumComponent],
  exports: [LightboxComponent, GalleryComponent, AlbumComponent]
})
export class NgxLightboxModule {
  static forRoot(options?: ModuleOptions): ModuleWithProviders {
    return {
      ngModule: NgxLightboxModule,
      providers: [
        {
          provide: ModuleOptionsToken,
          useValue: {
            galleryOptions: Object.assign(defaultOptions.galleryOptions, options.galleryOptions),
            albumOptions: Object.assign(defaultOptions.albumOptions, options.albumOptions),
            lightboxOptions: Object.assign(defaultOptions.lightboxOptions, options.lightboxOptions)
          }
        }
      ]
    };
  }

  public constructor(@Optional() @SkipSelf() parentModule: NgxLightboxModule) {
    if (parentModule) {
      throw new Error('NgxLightboxModule has already been imported.');
    }
  }
}
