
var assert = require('assert');
var i18n = require('..')(__dirname + '/');
i18n.setLocale('ko');

assert.equal(i18n.string('Hello'), '안녕하세요');
