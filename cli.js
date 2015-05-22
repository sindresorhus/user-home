#!/usr/bin/env node
'use strict';
var meow = require('meow');
var userHome = require('./');

meow({
	help: [
		'Example',
		'  $ user-home',
		'  /Users/sindresorhus'
	].join('\n')
});

process.stdout.write(userHome);
