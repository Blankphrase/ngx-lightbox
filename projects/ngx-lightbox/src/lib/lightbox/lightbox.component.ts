import {Component, Inject, OnInit} from '@angular/core';
import {GalleryAlbum, GalleryFile, ModuleOptions} from '../interfaces';
import {NgxHotkeysService} from '@balticcode/ngx-hotkeys';
import {ModuleOptionsToken} from '../token';

@Component({
  selector: 'ngx-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  isVisible = false;
  files: GalleryFile[] = [];

  private currentIndex = 0;

  private readonly _hotKeys: Array<{ key: string, binding: () => void }> = [
    {
      key: 'left',
      binding: () => this.prevFile()
    },
    {
      key: 'right',
      binding: () => this.nextFile()
    },
    {
      key: 'esc',
      binding: () => this.hide()
    }
  ];

  constructor(@Inject(ModuleOptionsToken) public moduleOptions: ModuleOptions,
              private hotKeyService: NgxHotkeysService) {
  }

  ngOnInit(): void {
    this.setupHotKeys();
  }

  show(album: GalleryAlbum): void {
    this.files = album.files;
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }

  setCurrentFileIndex(index: number): void {
    this.currentIndex = index;
  }

  isCurrentFileIndex(index: number): boolean {
    return this.currentIndex === index;
  }

  private setupHotKeys() {
    this._hotKeys.forEach((hotKey: { key: string, binding: () => void }) => {
      this.hotKeyService.register({
        combo: hotKey.key,
        handler: event => {
          hotKey.binding();
          return false;
        }
      });
    });
    console.log('registered hotkeys: ', this.hotKeyService.hotkeys);
  }

  prevFile(): void {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.files.length - 1;
  }

  nextFile(): void {
    this.currentIndex = (this.currentIndex < this.files.length - 1) ? ++this.currentIndex : 0;
  }
}
