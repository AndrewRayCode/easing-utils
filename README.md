# Javascript Easing Functions

A collection of configurable easing functions for Javascript.

## [Demo](http://delvarworld.github.io/easing-functions/gh-pages/)

See [the demo](http://delvarworld.github.io/easing-functions/gh-pages/http://delvarworld.github.io/easing-functions/gh-pages/) that accompanies this repository for examples of each tween function.

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

```js
// Curly braces needed for import
import { easeInCubic, easeInOutBounce } from 'easing-functions';

// Pass in a value from 0 - 1 and get the eased value back
const eased = easeInCubic( 0.5 );
```

### CommonJS

```js
var easing = require('easing-functions');

// Pass in a value from 0 - 1 and get the eased value back
var eased = easing.easeInCubic( 0.5 );
```

## API

All values are from 0 to 1.

Some functions take an optional `magnitude` argument. The ranges vary per function, and usually determine how far past zero the tween goes.

### `linear( value )`

### `easeInSine( value )`

### `easeOutSine( value )`

### `easeInOutSine( value )`

### `easeInQuad( value )`

### `easeOutQuad( value )`

### `easeInOutQuad( value )`

### `easeInCubic( value )`

### `easeOutCubic( value )`

### `easeInOutCubic( value )`

### `easeInQuart( value )`

### `easeOutQuart( value )`

### `easeInOutQuart( value )`

### `easeInQuint( value )`

### `easeOutQuint( value )`

### `easeInOutQuint( value )`

### `easeInExpo( value )`

### `easeOutExpo( value )`

### `easeInOutExpo( value )`

### `easeInCirc( value )`

### `easeOutCirc( value )`

### `easeInOutCirc( value )`

### `easeInBack( value, /*optional */magnitude )`

### `easeOutBack( value, /*optional */magnitude )`

### `easeInOutBack( value, /* optional */magnitude )`

### `easeInElastic( value, /* optional */magnitude )`

### `easeOutElastic( value, /* optional */magnitude  )`

### `easeInOutElastic( value, /* optional */magnitude  )`

### `easeOutBounce( value )`

### `easeInBounce( value )`

### `easeInOutBounce( value )`

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
