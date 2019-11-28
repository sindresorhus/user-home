# user-home [![Build Status](https://travis-ci.org/sindresorhus/user-home.svg?branch=master)](https://travis-ci.org/sindresorhus/user-home)

> Get the path to the user home directory


## Install

```
$ npm install user-home
```


## Usage

```js
const userHome = require('user-home');

console.log(userHome);
//=> '/Users/sindresorhus'
```

Returns `null` in the unlikely scenario that the home directory can't be found.


## FAQ

### Why not just use the `os-home` module?

This module was made long before [`os-homedir`](https://github.com/sindresorhus/os-homedir). When Node.js decided to add a native method for getting the user's home directory, I made a polyfill matching its API and decided to depend on it here, so not to have duplicate code. The main reason this one is still around is that lots of modules depend on it and I see no reason to inconvenience dependents by deprecating this. This one also gets the home directory on startup and returns a string rather than exposing a method, so it's faster, and I prefer this API. [Modules are cheap in Node.js](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328), so doesn't matter. Use whichever you prefer. I'm going to continue using this one.


## Related

- [user-home-cli](https://github.com/sindresorhus/user-home-cli) - CLI for this module
- [home-or-tmp](https://github.com/sindresorhus/home-or-tmp) - Get the user home directory with fallback to the system temp directory


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-user-home?utm_source=npm-user-home&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
