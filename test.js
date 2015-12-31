'use strict';
var test = require('ava');
var pathExists = require('path-exists');
var userHome = require('./');

test(function (t) {
	t.true(userHome.length > 0);
	t.true(pathExists.sync(userHome));
});
