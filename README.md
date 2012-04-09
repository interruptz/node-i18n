i18n module for node.JS
=======================


i18n is a simple international support library written in Node.js.


Let me give you an example for fast deployment.
Assume that the hierarchy of directories is following below.

    node_modules/
        node-i18n/
    locales/
        en/
            index.js
        ko/
            index.js
        ja/
            index.js
    app.js



and the source code of each file is as follows:

locales/ko/index.js:
```javascript
module.exports = {
    'Hello, $name.': '$name님, 안녕하세요!'
}
```

locales/ja/index.js:

```javascript
module.exports = {
    'Hello, $name.': 'こんにちは！$nameさん！'
}
```


app.js:

```javascript
var i = require('node-i18n');
var obj = {
    name: 'Smith'
};

i.setLocale('en');
console.log( i.string('Hello, $name.', obj) );

i.setLocale('ko');
console.log( i.string('Hello, $name.', obj) );

i.setLocale('ja');
console.log( i.string('Hello, $name.', obj) );
```

And go to your terminal.

    $ node app.js
    Hello, Smith.
    Smith님, 안녕하세요!
    こんにちは！Smithさん！

