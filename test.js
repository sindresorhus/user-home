'use strict';
var test = require('ava');
var userHome = require('./');

test(function (t) {
	t.assert(userHome.length > 0);
});
