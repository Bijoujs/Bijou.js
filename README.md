<h1 align="center"> Tiny.js </h1>
![Tiny.js Logo]
(https://github.com/tw)

[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/explosion-scratch/tiny.js/badge)](https://www.jsdelivr.com/package/gh/explosion-scratch/tiny.js)
[![GitHub issues](https://img.shields.io/github/issues/explosion-scratch/tiny.js)](https://github.com/explosion-scratch/tiny.js/issues)
[![GitHub stars](https://img.shields.io/github/stars/explosion-scratch/tiny.js)](https://github.com/explosion-scratch/tiny.js/stargazers)

# What is Tiny.js?

Tiny.js is a well, tiny, library of super helpful JavaScript snippets! It has a bunch of useful snippets for all your coding needs! If there's something that's not in here currently but you use frequently feel free to submit an issue! I'd be happy to add it! Tiny's goal is to eliminate the need to copy paste the same thing from StackOverflow, another project or anywhere else! So if you ever find yourself typing the same thing over and over again, copy pasting the same snippet as you did a few days ago, use tiny.js! If the snippet you're using isn't in Tiny.js just submit an issue with the code!

# How to use Tiny.js

Thanks for using Tiny.js! It's pretty simple to use, but here's a guide:

## Import it:

```js
<script src="https://cdn.jsdelivr.net/gh/explosion-scratch/tiny.js@latest/tiny.min.js"></script>
```

## Basic usage:

To use tiny.js simply call one of the many functions built into it!

```js
_$.anyFunction();
```
Such as this one!
```js
_$.uuid()//
```

Below you can see all of the functions along with what they do!

## Functions:

<details><summary>addStyles</summary>

---

Add the styles in an object to a specified element:

```js
_$.addStyles(element, { background: "red" }); // (Changes the background color of the element to red!)
```

Also note that this only works when the property is camelCased, as in JavScript. For example doing this: `{"background-color": "red"}` would not work, but `{backgroundColor: "red"}` will work fine. Feel free to use

```js
_$.unCamelCase("CSS property name here").toLowerCase().replace(/ /g, "-");
```

to use css properties normally.

</details>
<details><summary>arrayToCSV</summary>

---

Returns a comma separated list from the specified array.

```js
_$.arrayToCSV([
	["a", "b"],
	["c", "d"],
]); //'"a","b" "c","d"' Note that this also escapes characters such as quotes.
```

</details>
<details><summary>async</summary>

---

Runs the given function in a web worker, returning a promise with the return value. This is useful to prevent the main thread from becoming clogged while trying to compute something.</details>

<details><summary>averageBy</summary>

---

This returns the average of an array based on the given function, for example:

```js
_$.averageBy([1, 2, 3, 4], (val) => val / 2); //Returns the average of each element after each element has been divided by 2.
```

</details>
<details><summary>browser</summary>

---

Returns the current browser without sniffing the user-agent string. e.g. 'Chrome'</details>

<details><summary>compStyle</summary>

---

Returns an element of the computed style, e.g.

```js
_$.compStyle(document.querySelector("h1"), "background-color"); //Returns the background-color of the first &lt;h1&gt;
```

</details>
<details><summary>copy</summary>

---

Copies the text specified to the clipboard, e.g.

```js
_$.copy("Hello world");
```

</details>
<details><summary>createElement</summary>

---

Returns a DOM element who's outerHTML is the string provided:

```js
_$.createElement('<div id=`fun`>Hello</div>);//Returns a DOM element whose id is 'fun' and whose innerText is 'Hello'
```

</details>
<details><summary>dayName</summary>

---

Returns the day of the week from a Date object.</details>

<details><summary>each</summary>

---

Runs a function with each element of an array:

```js
_$.each([1, 2, 3], (num) => alert(num * 3)); //Alerts each number in the array times 3
```

</details>
<details><summary>escapeHTML</summary>

---

Returns an escaped version of the HTML string provided:

```js
_$.escapeHTML("&lt;script&gt;"); //'&amp;lt;script&amp;gt;'
```

</details>
<details><summary>flatten</summary>

---

This takes a 2d array (an array of arrays) and flattens in into a 1d array (a list of items).</details>

<details><summary>formToObject</summary>

---

Converts a form to a javascript object using each element's 'name' attribute as the key and the 'value' attribute as the value.</details>

<details><summary>formatMilliseconds</summary>

---

Formats a number of milliseconds into a human-readable duration of time, e.g.

```js
_$.formatMilliseconds(600000); //Returns '10 minutes'
```

</details>
<details><summary>formatNumber</summary>

---

Adds commas to large numbers in the right place.</details>

<details><summary>hexToRGB</summary>

---

Converts a hex value into an RGB color.</details>

<details><summary>inPartialView</summary>

---

Returns whether the specified element is visible at all in the viewport. This is useful for lazy loading images!</details>

<details><summary>inView</summary>

---

Returns whether the specified element is completely visible in the viewport.</details>

<details><summary>jsonToCsv</summary>

---

Converts a JSON object to CSV.</details>

<details><summary>lightOrDark</summary>

---

Returns an object, the key "lightordark" returns either 'light' or 'dark' and the key 'hsp' returns the value of the color from 0 (completely dark) to 255 (completely bright).</details>

<details><summary>lightenColor</summary>

---

Lightens or darkens a hex color by a certain amount, on a scale rom 0 (completely dark) to 255 (completely bright):

```js
_$.lightenColor("#ffffff", -20); //Returns '#ebebeb'.
```

</details>
<details><summary>mapObjectKeys</summary>

---

Maps an object's keys recursively:

```js
_$.mapObjectKeys(
	{ key: "value", another: { deep: "thing", map: "another" } },
	(key) => key.toUpperCase(),
); // Transforms every key of the object to uppercase.
```

</details>
<details><summary>notify</summary>

---

Notifies the user through a desktop notification. Takes 3 arguments: text, body, icon. Text is the title of the notification, body is the message of it, and icon is the icon displayed next to the notification.</details>

<details><summary>onOutsideClick</summary>

---

Returns the callback when a click is called outside the specified element:

```js
_$.onOutsideClick(document.querySelector("h1"), () => {
	alert("You clicked outside the header");
}); // Alerts when the user clicks anywhere that is NOT the h1 in question.
```

</details>
<details><summary>onScrollStop</summary>

---

Returns the callback when a user stops scrolling the window.</details>

<details><summary>previousPage</summary>

---

Returns the url of the previous page that the user visited.</details>

<details><summary>primesTo</summary>

---

Returns an array of all the prime numbers up to the number given.</details>

<details><summary>querySelector</summary>

---

Generates a unique querySelector for the given element.</details>

<details><summary>random</summary>

---

Returns a random number between two numbers:

```js
_$.random(-10, 10, false); //Return a random number between -10 and 10 and DO NOT round it. (True as the last value would round it.)
```

</details>
<details><summary>randomColor</summary>

---

Returns a random hex color.</details>

<details><summary>removeComments</summary>

---

Removes comments from the HTML element specified.</details>

<details><summary>replaceText</summary>

---

Replaces the text of the specified element by passing the old value through a function:

```js
_$.replaceText(document, (oldText) => oldText.replace(" ", "-")); //Replace all spaces in the document with a hyphen.
```

</details>
<details><summary>rgbToHex</summary>

---

Returns the hex code of a given RGB string.</details>

<details><summary>seedRandom</summary>

---

Gives a random number based on a whole number seed.</details>

<details><summary>serializeForm</summary>

---

Convert a form to url queries</details>

<details><summary>spliceArrayBuffer</summary>

---

Splices a number as if it's 8 bits long and converts it to a single number:

```js
_$.spliceArrayBuffer([5, 8, 255], 0, 2, true); //16713733
```

</details>
<details><summary>sortObj</summary>

---

Returns an alphabetized copy of the object by keys.</details>

<details><summary>throttle</summary>

---

Runs the function specified, the second input controls at MAX how much wait there is between the next time it runs:

```js
_$.throttle(() => alert("hello"), 10000);
```

Running this like any other function will simply just run the function, however if you try to run the throttled function in a setInterval loop or before its timeout ends it will not run.</details>

<details><summary>timeFunction</summary>

---

Use console.time to how long the function inputted takes to execute.</details>

<details><summary>unescapeHTML</summary>

---

Un-escapes the string of HTML specified.</details>

<details><summary>unionArrays</summary>

---

Merges two arrays using union, meaning that any duplicates between the two arrays will be removed.</details>

<details><summary>uniqueArray</summary>

---

Removes duplicates from an array</details>

<details>
  <summary>
  unCamelCase
  </summary>

---

Un-camelCases a string. Camel case is when a string's case looks like this: camelCase, where the normal version would be Camel Case:

```js
_$.unCamelCase("someCrazyName"); //Returns "Some Crazy Name"
```

</details>
<details><summary>uuid</summary>

---

Generates a unique id, like the uuid npm package. For example: 8dfe52e3-7beb-48eb-8282-209ff1c5250f</details>

<details><summary>widows</summary>

---

Replaces the last space character between words with '&amp;nbsp;', preventing a single word on a newline.</details>
