# Javascript Easing Functions

A collection of configurable easing functions for Javascript.

## [Demo](http://andrewraycode.github.io/easing-utils/gh-pages/)

See [the demo](http://andrewraycode.github.io/easing-utils/gh-pages/) that accompanies this repository for examples of each tween function.

## Usage

### Vanilla Javascript

Download the [built file](http://andrewray.me/easing.js) and include it in your project. Do not hotlink to this file!

```html
<script src="easing.js"></script>
```

Then reference the global "easing" variable:

```js
// Pass in a value from 0 - 1 and get the eased value back
easing.easeInCube( 0.5 );
```

### ES6

Install with `npm install --save easing-utils`

```js
// Curly braces needed for import
import { easeInCubic, easeInOutBounce } from 'easing-utils';

// Pass in a value from 0 - 1 and get the eased value back
const eased = easeInCubic( 0.5 );
```

### CommonJS

Install with `npm install --save easing-utils`

```js
var easing = require('easing-utils');

// Pass in a value from 0 - 1 and get the eased value back
var eased = easing.easeInCubic( 0.5 );
```

## API

All values are from 0 to 1.

Some functions take an optional `magnitude` argument. The ranges vary per function, and usually determine how far past zero the tween goes.

#### `number:linear( value:number )`

#### `number:easeInSine( value:number )`

#### `number:easeOutSine( value:number )`

#### `number:easeInOutSine( value:number )`

#### `number:easeInQuad( value:number )`

#### `number:easeOutQuad( value:number )`

#### `number:easeInOutQuad( value:number )`

#### `number:easeInCubic( value:number )`

#### `number:easeOutCubic( value:number )`

#### `number:easeInOutCubic( value:number )`

#### `number:easeInQuart( value:number )`

#### `number:easeOutQuart( value:number )`

#### `number:easeInOutQuart( value:number )`

#### `number:easeInQuint( value:number )`

#### `number:easeOutQuint( value:number )`

#### `number:easeInOutQuint( value:number )`

#### `number:easeInExpo( value:number )`

#### `number:easeOutExpo( value:number )`

#### `number:easeInOutExpo( value:number )`

#### `number:easeInCirc( value:number )`

#### `number:easeOutCirc( value:number )`

#### `number:easeInOutCirc( value:number )`

#### `number:easeInBack( value:number, /*optional */magnitude:number )`

#### `number:easeOutBack( value:number, /*optional */magnitude:number )`

#### `number:easeInOutBack( value:number, /* optional */magnitude:number )`

#### `number:easeInElastic( value:number, /* optional */magnitude:number )`

#### `number:easeOutElastic( value:number, /* optional */magnitude:number )`

#### `number:easeInOutElastic( value:number, /* optional */magnitude )`

#### `number:easeOutBounce( value:number )`

#### `number:easeInBounce( value:number )`

#### `easeInOutBounce( value:number )`

## Development

First install all dependencies:

```js
npm install
```

To build the standalone Javascript file, run:

```js
npm run build-cdn
```

The output is put in the `dist/` folder.

The website deployed [here](http://andrewraycode.github.io/easing-utils/gh-pages/) lives in the `gh-pages/` folder. To deploy the website, run `npm run gh-pages`. Then go to `http://[your username].github.io/easing-utils/gh-pages/`. Out of laziness, I have not yet set up a development server to work on the Github pages.

## About

#### What does this library have that others don't?

There's a few other easing libraries out there, but none of them met my needs, which are:

 - Fully documented
 - Configurable easing functions where available
 - Examples presented clearly
 - Available through npm
 - High quality, readable source code
 - Only take a single parameter, which is the initial value from 0 to 1
