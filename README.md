# Javascript Easing Functions

A collection of configurable easing functions for Javascript.

## Usage

## Vanilla Javascript

Download the [built file](http://andrewray.me/easing.js) and include it in your project. Do not hotlink to this file!

```html
<script src="easing.js"></script>
```

Then reference the global "easing" variable:

```js
// Pass in a value from 0 - 1 and get the eased value back
easing.easeInCube( 0.5 );
```

## ES6

```js
// Curly braces needed for import
import { easeInCubic, easeInOutBounce } from 'easing-functions';

// Pass in a value from 0 - 1 and get the eased value back
const eased = easeInCubic( 0.5 );
```

## CommonJS

```js
var easing = require('easing-functions');

// Pass in a value from 0 - 1 and get the eased value back
var eased = easing.easeInCubic( 0.5 );
```

## API

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

### `easeInBack( value )`

### `easeOutBack( value )`

### `easeInOutBack( value )`

### `easeInElastic( value )`

### `easeOutElastic( value )`

### `easeInOutElastic( value )`

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
