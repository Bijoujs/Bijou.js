/**
 * @file bijou.js
 * @author Explosion-Scratch, Bijou.js contributors
 * @since v0.0.0
 * @copyright © Explosion-Scratch, All rights reserved.
 */

/* --------------------------------------------------------------------------|
  ____ ___    _  ___  _   _   _     
 | __ )_ _|  | |/ _ \| | | | (_)___ 
 |  _ \| |_  | | | | | | | | | / __|
 | |_) | | |_| | |_| | |_| | | \__ \
 |____/___\___/ \___/ \___(_)/ |___/
                           |__/     
------------------------------------------------------------------------------|
Bijou.js is copyrighted by Explosion-Scratch of GitHub and released under the GPL-3.0 License.
This software comes with ABSOLUTELY NO WARRANTY and is provided "As is" (with the best intentions of Explosion-Scratch and contributors! =D )

-----------------------------------------------------------------------------|
   ____ ___  _   _ _____ ____  ___ ____  _   _ _____ ___  ____  ____
  / ___/ _ \| \ | |_   _|  _ \|_ _| __ )| | | |_   _/ _ \|  _ \/ ___|
 | |  | | | |  \| | | | | |_) || ||  _ \| | | | | || | | | |_) \___ \
 | |__| |_| | |\  | | | |  _ < | || |_) | |_| | | || |_| |  _ < ___) |
  \____\___/|_| \_| |_| |_| \_\___|____/ \___/  |_| \___/|_| \_\____/
-----------------------------------------------------------------------------|
NOTE: Please see https://github.com/bijou-js/bijou.js#contributors- for up to date contributors with what they did.

Contributors to Bijou.js:
╔═══════════════════╦════════════════════════════╗
║ GITHUB USERNAME   ║ CONTRIBUTIONS              ║
╠═══════════════════╬════════════════════════════╣
║ Explosion-Scratch ║ Founder and creator of     ║
║                   ║ Bijou.js, over 1500        ║
║                   ║ commits to the source      ║
║                   ║ repository.                ║
╠═══════════════════╬════════════════════════════╣
║ GrahamSH-LLK      ║ Great guy, contributed     ║
║                   ║ a ton towards the          ║
║                   ║ development of this        ║
║                   ║ project. He fixed glitches ║
║                   ║ suggested new features,    ║
║                   ║ and helped publish this    ║
║                   ║ to NPM and fix the GitHub  ║
║                   ║ actions on the project.    ║
╠═══════════════════╬════════════════════════════╣
║ Touchcreator      ║ Pointed out several bugs   ║
║                   ║ in Bijou.js and suggested  ║
║                   ║ several new features.      ║
╠═══════════════════╬════════════════════════════╣
║ TheColaber        ║ Collaborated?? (lol)       ║
║                   ║ Fixed tons of bugs         ║
╠═══════════════════╬════════════════════════════╣
║ Hans5958          ║ Helped fix glitches in the ║
║                   ║ website and suggested      ║
║                   ║ fixes for GitHub actions   ║
║                   ║ glitches.                  ║
╠═══════════════════╬════════════════════════════╣
║ retronbv          ║ Suggested a lot of         ║
║                   ║ features and bug fixes.    ║
║═══════════════════║════════════════════════════║
║ thecoder876       ║ Made some improvements.    ║
╚═══════════════════╩════════════════════════════╝


(c) 2021 Explosion-Scratch, all rights reserved.

 */

let isNode = false;
if (
	typeof window === "undefined" ||
	typeof document === "undefined"
) {
	isNode = true;
} else {
	isNode = false;
}

if (isNode) {
	console.warn();
}
/**
 * @description Tests if the user is using Node.js or not and throws an error in specific functions (that require the DOM) if they are.
 */
let node = () => {
	if (isNode) {
		throw new Error(
			"You are using Node.js, this function does not work in Node.js! Sorry!",
		);
	}
};
/*
  ____   ___  _   _ ____   ____ _____
 / ___| / _ \| | | |  _ \ / ___| ____|
 \___ \| | | | | | | |_) | |   |  _|
  ___) | |_| | |_| |  _ <| |___| |___
 |____/ \___/ \___/|_| \_\\____|_____|
*/
/**
 * The array namespace of Bijou.js
 * @namespace array
 */
let array_namespace = {};
/**
 * The color namespace of Bijou.js
 * @namespace color
 */
let color_namespace = {};
/**
 * The date namespace of Bijou.js, containing functions to format dates, do math with them and more!
 * @namespace date
 */
let date_namespace = {};
/**
 * The element namespace of Bijou.js, containing functions to create elements from query selectors, enable custom right click options, test if an element is on screen, replace the text of an element without altering it's styling, and much more!
 * @namespace element
 */
let element_namespace = {};
/**
 * The event namespace of Bijou.js, containing functions to listen and dispatch events, such as scroll stop, outside click, and multiple event listeners.
 * @namespace event
 */
let event_namespace = {};
/**
 * The function namespace of Bijou.js, containing functions to work with functions themselves, such as debouncing, throttling, memoizing, currying, timing and much more!
 * @namespace function
 */
let function_namespace = {};
/**
 * The math namespace of Bijou.js, containing functions to validate credit card numbers, animate with JavaScript, generate unique id's and much more!
 * @namespace math
 */
let math_namespace = {};
/**
 * The object namespace of Bijou.js, for stuff like flattening nested objects, cloning, merging, and even listening to changes to objects!
 * @namespace object
 */
let object_namespace = {};
/**
 * The string namespace of Bijou.js, containing functions to map strings, remove accents from strings, speak text, syntax highlight JS, HTML and CSS and much more!
 * @namespace string
 */
let string_namespace = {};
/**
 * The utility namespace of Bijou.js, containing utilities to do many things, such as playing audio, fetching JSON, preloading images and much more.
 * @namespace utility
 */
let utility_namespace = {};

const req = (type, desc, condition = true) => {
	if (!condition) return;
	let err = "Missing parameter";
	if (type) {
		err += " of type " + type;
	}
	if (desc) {
		err = `Parameter ${desc} ${type ? `(${type})` : ""} required.`;
	}
	throw new Error(err);
};
//#region bijou
