# vuejs-localization

## Installation

```
$ npm install vuejs-localization --save
```

## Setup
```js
var Vue = require('vue');
var Lang = require('vuejs-localization');

Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);
```