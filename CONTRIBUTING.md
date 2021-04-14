# Contributing to Bijou.js

Contributing to Bijou.js is simple! Follow the steps below:

## I want to add a new function to Bijou

Follow this template:
**IMPORTANT**: Do NOT put your function in the main `bijou.js` file, it will get removed as soon as someone compiles and your work will be lost. MAKE SURE it is in the `/js` folder in the file that matches it's category.

```js
//In the right /js/file.js file for your function (e.g. /js/utility.js)

/**
 * Description
 * @function
 * @param String str A string parameter
 * @returns {String} What it returns
 * @example
 * //A full, working example
 * @example
 * //Multiple examples are also great!
 * @memberOf utility (This should be whatever category your new function is in, without the ".js" at the end, e.g. "utility", "function", "string", "array" etc)
 * @author (whomever you are)
 */

// req throws an error if a parameter is missing, the first param for it is the type that should be given, and the second is a ~one word description of what it is.
export let functionName = (str = req("string", "input")) => {
	//  Use an arrow function, then place any code here.
};

//  For recursive functions:
export let functionName = function _recurse(str = req("string", "input")) {
	//Do whatever
	return _recurse(str);
};
```

Now you need to compile the code so the function actually gets added, so run `./git.bat` in terminal. If you don't want to do this just wait until someone else does once your PR is merged.

## I found a bug, I want to fix it

Find the function that the bug is in _in the /js folder_ then fix it in that function. Don't alter any other functions. Then commit and make a PR and an issue for it.

## I want to help with the website

Simple! Just edit in the /docs folder (which is the website because GitHub can only publish from a folder with that name -\_\_-)

## I have a suggestion but I don't know how to code it

Great! [Make an issue!](https://github.com/Bijou-js/Bijou.js/issues/new/choose)
