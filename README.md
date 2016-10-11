# vuejs-localization

## Installation

```
$ npm install vuejs-localization --save
```

## Setup
```js
var Vue = require('vue');
var Lang = require('vuejs-localization');

//Notice that you need to specify the lang folder, in this case './lang'
Lang.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(Lang);
```

## Lang Folder
```js
└── lang
    ├── en
    |  └──messages.js
    └── pt
       └──messages.js

```
## Lang file
```js
module.exports = {
  hello_world : 'Hellow World!'
}
```

## Usage
```html
<h1>{{$lang.hello_world}}</h1>
```
Results in:
```html
<h1>Hello World</h1>
```

## Change localization (reactive)
```js
//inside veu instance
this.$lang.setLang('pt')
```
