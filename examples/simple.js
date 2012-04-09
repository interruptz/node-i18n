
var assert = require('assert');
var i = require('..')(__dirname + '/');
i.setLocale('ko');

console.log(i.string('Hello, $name.', {
    'name': 'Smith'
}));
