[![npm version](https://img.shields.io/npm/v/@balticcode/ngx-lightbox.svg)](https://www.npmjs.com/package/@balticcode/ngx-lightbox)
# ngx-lightbox

An Angular module providing a responsive gallery - including separat albums and a lightbox.

Feel free to take a look at the [DEMO](https://balticcode.github.io/ngx-lightbox/).

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)

## Installation

Install via npm:
```
npm install @balticcode/ngx-lightbox --save
```

## Usage

#### Import `NgxLightboxModule`

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLightboxModule} from '@balticcode/ngx-lightbox';

@NgModule({
    imports: [
        BrowserModule,
        NgxLightboxModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Optional configuration

The module ships with its own default configuration (listed below) but you can override it as you wish by passing your own configuration object (each property can be ommitted) to the `forRoot()` method as show below:
```ts
NgxLightboxModule.forRoot(
  {
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
  }
)
```

#### Using the gallery

Just insert the `<ngx-gallery></ngx-gallery>` tag somewhere inside your app's template.

<ngx-gallery></ngx-gallery>

## API

#### NgxLightboxService

#### ModuleOptions

###### Properties

- `galleryOptions` (`IGalleryOptions?`): Object containing gallery configuration.
- `albumOprions` (`IAlbumOptions?`): Object containing album configuration.
- `lightboxOption` (`ILightboxOptions?`): Object containing lightbox configuration.

#### IGalleryOptions

###### Properties

- `width` (`string?`): Setting the width of the gallery relative to its parent (Allowed values are same as CSS `width`).

#### IAlbumOptions

#### Properties

- `backgroundColor` (`string?`): Setting the background color of the album element (Allowed values are same as CSS `background-color`).
- `coverImageWidth` (`string?`): Setting the width of the albums cover image relative to the album element (Allowed values are same as CSS `width`).
- `coverImageMaxHeight` (`string?`): Setting the maximum height of the albums cover image relative to the album element (Allowed values are same as CSS `max-height`).
- `titleColor` (`string?`): Setting the text color of the albums title (Allowed values are same as CSS `color`).

#### ILightboxOptions

###### Properties

- `backdropColor` (`string?`): Setting the lightbox' backdrop color (Allowed values are same as CSS `background-color`).
- `closeIconColor` (`string?`): Setting the lightbox' close icon color (Allowed values are same as CSS `color`).
- `dotColor` (`string?`): Setting the lightbox' image indicator dot color (Allowed values are same as CSS `background-color`).
- `imageMaxWidth` (`string?`): Setting the maximum width of the currently displayed image relative to the lightbox element (Allowed values are same as CSS `max-width`).
- `imageMaxHeight` (`string?`): Setting the maximum height of the currently displayed image relative to the lightbox element (Allowed values are same as CSS `max-height`).
