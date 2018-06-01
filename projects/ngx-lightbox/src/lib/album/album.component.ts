import {Component, Inject, Input} from '@angular/core';
import {GalleryAlbum, ModuleOptions} from '../interfaces';
import {ModuleOptionsToken} from '../token';

@Component({
  selector: 'ngx-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  @Input()
  album: GalleryAlbum;

  constructor(@Inject(ModuleOptionsToken) public moduleOptions: ModuleOptions) {
  }
}
