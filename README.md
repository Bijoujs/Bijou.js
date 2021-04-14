<div align="center"><a href="https://bijou.js.org"><img width="700" src="https://bijou.js.org/bijou.png"></a></div>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![NPM Downloads](https://img.shields.io/npm/dm/bijou.js.svg?style=for-the-badge&color=lightseagreen)](https://npmjs.com/bijou.js)
[![GitHub stars](https://img.shields.io/github/stars/bijou-js/bijou.js?color=lightseagreen&style=for-the-badge)](https://github.com/bijou-js/bijou.js/stargazers)
[![Website](https://img.shields.io/website?down_color=lightseagreen&down_message=Down%20%3A%27%28&label=Website%20status&style=for-the-badge&up_color=lightseagreen&up_message=Online%21&url=https%3A%2F%2Fbijou.js.org)](https://bijou.js.org)
[![Discord](https://img.shields.io/discord/789662824678686720?style=for-the-badge&color=lightseagreen)](https://discord.gg/tApDpbyK2F)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=for-the-badge&color=lightseagreen)](https://gitpod.io/#https://github.com/bijou-js/bijou.js)
[![Rate on Openbase](https://badges.openbase.com/js/rating/bijou.js.svg)](https://openbase.com/js/bijou.js?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

<h1 align=center>Bijou.js</h1>

Bijou.js is a library of super helpful JavaScript snippets! It has a bunch of
useful snippets for all your coding needs! If there's something that's not in
here currently but you use frequently, feel free to submit an issue! I'd be happy
to add it! Bijou's goal is to eliminate the need to copy paste the same thing
from StackOverflow, another project or anywhere else! So if you ever find
yourself typing the same thing over and over again, copy pasting the same
snippet as you did a few days ago, use Bijou.js! If the snippet you're using
isn't in Bijou.js, just submit an issue with the code!

# How to use Bijou.js

Thanks for using Bijou.js! It's pretty simple to use, but here's a guide:

## CDN

CDNJS

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Bijou.js/7.6.6/bijou.js" type="module"></script>
```

jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/bijou.js@latest/bijou.js" type="module"></script>
```

UNPKG

```html
<script src="https://unpkg.com/bijou.js@latest/bijou.js" type="module"></script>
```

## Imports

You can also import parts of bijou, for example only the uuid() function:

```html
<script type="module">
	import { uuid } from "https://cdnjs.cloudflare.com/ajax/libs/Bijou.js/7.6.6/bijou.js";
	console.log(uuid()); //Same as _$.uuid() when importing the whole library.
</script>
```

or you can import the whole thing:

```html
<script type="module">
	import * as _$ from "https://cdnjs.cloudflare.com/ajax/libs/Bijou.js/7.6.6/bijou.js";
	console.log(_$.uuid());
</script>
```

## NodeJS

Bijou.js is included in NodeJS through NPM and yarn! Depending on the platform you're using you may have to install it through npm or yarn:

```bash
npm install bijou.js
```

or

```
yarn add bijou.js
```

Then just require it in your code:

```js
const _$ = require("bijou.js");
console.log(_$.uuid());
```

# Usage

To use Bijou.js simply call one of the many functions built into it!

```js
_$.anyFunction(); //You can name bijou anything when using imports, or when using node you can name it using require();
```

Such as this one!

```js
_$.uuid(); //Results in something like this: c3435c88-0a20-491f-9391-3afde9c4a2d1
```

If you need to use a custom prefix than you can set a variable that you want to use as Bijou.js to `_$`

# Who made Bijou.js?

Me (@Explosion-Scratch) and my good friend @GrahamSH-LLK with a lot of help from other people such as retronbv and TheColaber!

# Why use Bijou?

Well, a few reasons:

1. <s>I made it. 😛</s>
2. It's useful! (If it's not useful just tell me what you want added in the
   issues tab! I'd be happy to add it!)
3. It's jam packed full of functions that are super useful but hard to think of!
4. It's very easy to use, and I'm happy to add anything you think of!

<small>(You can probably see I'm pretty desperate for people to use
this.)</small>

# Installation

Bijou.js is available in NodeJS through yarn and NPM

`npm i bijou.js`
or
`yarn add bijou.js`

[Or through a CDN](#cdn-urls)

# CDN Url's

```
https://cdnjs.cloudflare.com/ajax/libs/Bijou.js/7.6.6/bijou.js
https://esm.run/bijou.js
https://cdn.jsdelivr.net/npm/bijou.js
https://unpkg.com/bijou.js
https://cdn.jsdelivr.net/gh/Bijou-js/bijou.js@latest/bijou.js
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AwayFromKeyword"><img src="https://avatars.githubusercontent.com/u/64666021?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AFK</b></sub></a><br /><a href="https://github.com/Bijou-js/Bijou.js/issues?q=author%3AAwayFromKeyword" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/CubeyTheCube"><img src="https://avatars.githubusercontent.com/u/72284516?v=4?s=100" width="100px;" alt=""/><br /><sub><b>CubeyTheCube</b></sub></a><br /><a href="https://github.com/Bijou-js/Bijou.js/commits?author=CubeyTheCube" title="Code">💻</a></td>
    <td align="center"><a href="http://chrome://crash"><img src="https://avatars.githubusercontent.com/u/61319150?v=4?s=100" width="100px;" alt=""/><br /><sub><b>--Explosion--</b></sub></a><br /><a href="https://github.com/Bijou-js/Bijou.js/commits?author=Explosion-Scratch" title="Code">💻</a> <a href="#design-Explosion-Scratch" title="Design">🎨</a> <a href="https://github.com/Bijou-js/Bijou.js/issues?q=author%3AExplosion-Scratch" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/apple502j"><img src="https://avatars.githubusercontent.com/u/33279053?v=4?s=100" width="100px;" alt=""/><br /><sub><b>apple502j</b></sub></a><br /><a href="#security-apple502j" title="Security">🛡️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!