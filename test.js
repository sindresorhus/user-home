'use strict';
var fs = require('fs');
var test = require('ava');
var userHome = require('./');

test(function (t) {
	t.assert(userHome.length > 0);
	t.assert(fs.existsSync(userHome));
	t.end();
});
