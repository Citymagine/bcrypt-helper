# is-bcrypt

## Run

### Installation

```
npm install --save is-bcrypt
```

### Usage

```js
let isBcrypt = require('is-bcrypt');

if(isBcrypt('$2y$10$kL4x.7CioCcynLpKRwgFFe9jq2eib9bk1AeZNCpaKfNVmshRadusq')) {
  // String is a bcrypt hash
} else {
  // Not a bcrypt hash
}
```

## Build

### Test

```
npm test
```
