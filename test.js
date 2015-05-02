'use strict';
var test = require('ava');
var pathExists = require('path-exists');
var userHome = require('./');

test(function (t) {
	t.assert(userHome.length > 0);
	t.assert(pathExists.sync(userHome));
	t.end();
});
