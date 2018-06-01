import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {GalleryAlbum, ModuleOptions} from '../interfaces';
import {ModuleOptionsToken} from '../token';
import {_albums} from '../data/mock';
import {LightboxComponent} from '../lightbox/lightbox.component';

@Component({
  selector: 'ngx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @ViewChild(LightboxComponent)
  private lightBox: LightboxComponent;

  albums: GalleryAlbum[] = _albums;

  constructor(@Inject(ModuleOptionsToken) public moduleOptions: ModuleOptions) {
    console.log('moduleOptions: ', moduleOptions);
  }

  ngOnInit(): void {
    // this.lightBox.show(this.albums[0]);
  }

  showLightBox(album: GalleryAlbum): void {
    this.lightBox.show(album);
  }
}
