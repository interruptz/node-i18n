
var assert = require('assert');
var i18n = require('..')(__dirname + '/');
i18n.setLocale('ko');

console.log(i18n.string('Hello'));
