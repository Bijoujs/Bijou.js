## Members

<dl>
<dt><a href="#prototype">prototype</a></dt>
<dd><p>Converts most of the functions of Bijou.js to prototype functions.
Note that you have to call this function to add the prototypes.</p>
</dd>
<dt><a href="#_temp">_temp</a> : <code>Object</code></dt>
<dd><p>Bijou.js source documentation. In the <code>Bijou</code> namespace you will find the documentation for all of the functions in Bijou.js, if you have any questions, suggestions or bug reports pleast make an issue (here)[<a href="https://github.com/bijou-js/bijou.js/issues/new/choose%5D">https://github.com/bijou-js/bijou.js/issues/new/choose]</a>. Best of luck! Thanks for using Bijou.js! --Explosion--</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#array">array</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The array namespace of Bijou.js</p>
</dd>
<dt><a href="#color">color</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The color namespace of Bijou.js</p>
</dd>
<dt><a href="#date">date</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The date namespace of Bijou.js, containing functions to format dates, do math with them and more!</p>
</dd>
<dt><a href="#element">element</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The element namespace of Bijou.js, containing functions to create elements from query selectors, enable custom right click options, test if an element is on screen, replace the text of an element without altering it&#39;s styling, and much more!</p>
</dd>
<dt><a href="#event">event</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The event namespace of Bijou.js, containing functions to listen and dispatch events, such as scroll stop, outside click, and multiple event listeners.</p>
</dd>
<dt><a href="#function">function</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The function namespace of Bijou.js, containing functions to work with functions themselves, such as debouncing, throttling, memoizing, currying, timing and much more!</p>
</dd>
<dt><a href="#math">math</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The math namespace of Bijou.js, containing functions to validate credit card numbers, animate with JavaScript, generate unique id&#39;s and much more!</p>
</dd>
<dt><a href="#object">object</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The object namespace of Bijou.js, for stuff like flattening nested objects, cloning, merging, and even listening to changes to objects!</p>
</dd>
<dt><a href="#string">string</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The string namespace of Bijou.js, containing functions to map strings, remove accents from strings, speak text, syntax highlight JS, HTML and CSS and much more!</p>
</dd>
<dt><a href="#utility">utility</a> : <code><a href="#object">object</a></code></dt>
<dd><p>The utility namespace of Bijou.js, containing utilities to do many things, such as playing audio, fetching JSON, preloading images and much more.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#node">node()</a></dt>
<dd><p>Tests if the user is using Node.js or not and throws an error in specific functions (that require the DOM) if they are.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#averageByFn">averageByFn</a> ⇒ <code>Number</code></dt>
<dd></dd>
<dt><a href="#eachCallback">eachCallback</a> : <code><a href="#function">function</a></code></dt>
<dd></dd>
<dt><a href="#replaceTextCallback">replaceTextCallback</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#eventListenersCallback">eventListenersCallback</a> ⇒ <code>undefined</code></dt>
<dd></dd>
<dt><a href="#sortTableCallback">sortTableCallback</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#scrollStopCallback">scrollStopCallback</a> ⇒ <code>undefined</code></dt>
<dd></dd>
<dt><a href="#juxtCallback">juxtCallback</a> ⇒ <code><a href="#array">Array.&lt;array&gt;</a></code></dt>
<dd></dd>
<dt><a href="#spreadCallback">spreadCallback</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#listenCallback">listenCallback</a> ⇒ <code>undefined</code></dt>
<dd></dd>
<dt><a href="#mapObjKeysCallback">mapObjKeysCallback</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#mapObjValuesCallback">mapObjValuesCallback</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#animateNumCallback">animateNumCallback</a> ⇒ <code>Number</code></dt>
<dd></dd>
<dt><a href="#animateCallback">animateCallback</a> ⇒ <code>undefined</code></dt>
<dd></dd>
<dt><a href="#mapCallback">mapCallback</a> : <code><a href="#function">function</a></code></dt>
<dd></dd>
<dt><a href="#manipulateVideoStreamFunction">manipulateVideoStreamFunction</a> ⇒ <code>Object</code></dt>
<dd></dd>
</dl>

<a name="prototype"></a>

## prototype
Converts most of the functions of Bijou.js to prototype functions.
Note that you have to call this function to add the prototypes.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options to use, supports overwrite (boolean of whether to overwrite existing prototypes), and try, (boolean for whether to wrap in a try..catch) |

<a name="_temp"></a>

## \_temp : <code>Object</code>
Bijou.js source documentation. In the `Bijou` namespace you will find the documentation for all of the functions in Bijou.js, if you have any questions, suggestions or bug reports pleast make an issue (here)[https://github.com/bijou-js/bijou.js/issues/new/choose]. Best of luck! Thanks for using Bijou.js! --Explosion--

**Kind**: global variable  
**Author**: Explosion-Scratch, GrahamSH-LLK, Bijou.js contributors  
<a name="array"></a>

## array : [<code>object</code>](#object)
The array namespace of Bijou.js

**Kind**: global namespace  

* [array](#array) : [<code>object</code>](#object)
    * [.exports.count(arr)](#array.exports.count) ⇒ <code>Object</code>
    * [.exports.arrayDiff(a1, a2)](#array.exports.arrayDiff) ⇒ <code>Array</code> \| <code>String</code>
    * [.exports.diff(text1, text2)](#array.exports.diff) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
    * [.exports.remove(array, item)](#array.exports.remove)
    * [.exports.spliceArrayBuffer(arr, start, end, [endian])](#array.exports.spliceArrayBuffer) ⇒ <code>Number</code>
    * [.exports.flatten(array, [level])](#array.exports.flatten) ⇒ <code>Array</code>
    * [.exports.nFlatten(arr)](#array.exports.nFlatten) ⇒ <code>Array</code>
    * [.exports.contains(array, item)](#array.exports.contains) ⇒ <code>Boolean</code>
    * [.exports.shuffleArray(array)](#array.exports.shuffleArray) ⇒ <code>Array</code>
    * [.exports.splice(array, index, item, [remove])](#array.exports.splice) ⇒ <code>String</code> \| <code>Array</code>
    * [.exports.unionArrays(x, y)](#array.exports.unionArrays) ⇒ <code>Array</code>
    * [.exports.averageBy(arr, fn)](#array.exports.averageBy) ⇒ <code>Number</code>
    * [.exports.uniqueArray(array)](#array.exports.uniqueArray) ⇒ <code>Array</code>
    * [.exports.each(array, callback)](#array.exports.each) ⇒ <code>Array.&lt;any&gt;</code>

<a name="array.exports.count"></a>

### array.exports.count(arr) ⇒ <code>Object</code>
Counts the items in an array, returning a separate count for each object.

**Kind**: static method of [<code>array</code>](#array)  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | The array to count items in. |

**Example**  
```js
_$.count(['a', 'b', 'c', 'd', 'e', 'f'])//{'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1}

//But if you have multiple items:
_$.count(['a', 'a', b', 'b', 'c', 'd', 'e']);//{'a': 2, 'b': 2, 'c': 1, 'd': 1, 'e': 1}
```
<a name="array.exports.arrayDiff"></a>

### array.exports.arrayDiff(a1, a2) ⇒ <code>Array</code> \| <code>String</code>
Returns the difference between two arrays or strings.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array</code> \| <code>String</code> - The difference between two arrays or strings.  

| Param | Type | Description |
| --- | --- | --- |
| a1 | <code>Array</code> \| <code>String</code> | The first array or string |
| a2 | <code>Array</code> \| <code>String</code> | The 2nd array or string. |

**Example**  
```js
console.log(_$.arrayDiff(['a', 'b'], ['a', 'b', 'c', 'd'])); // ["c", "d"]
```
<a name="array.exports.diff"></a>

### array.exports.diff(text1, text2) ⇒ <code>Array.&lt;Array.&lt;number&gt;&gt;</code>
Gets the difference between two strings.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array.&lt;Array.&lt;number&gt;&gt;</code> - An array of arrays, each array in the main array contains 2 numbers, the start and then end of the difference.  

| Param | Type | Description |
| --- | --- | --- |
| text1 | <code>String</code> | The 1st text to compare |
| text2 | <code>String</code> | The 2nd text to compare with the 1st one. |

**Example**  
```js
console.log(_$.diff("hello earthlings", "hello world"); // [[6,8],[9,16]]
```
<a name="array.exports.remove"></a>

### array.exports.remove(array, item)
Removes an item from the array specified.

**Kind**: static method of [<code>array</code>](#array)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to remove the item from. |
| item | <code>\*</code> | The item to remove. |

**Example**  
```js
console.log(_$.remove([5, 4, 3, 2, 1], 4)); // [5, 3, 2, 1]
```
<a name="array.exports.spliceArrayBuffer"></a>

### array.exports.spliceArrayBuffer(arr, start, end, [endian]) ⇒ <code>Number</code>
Splices an ArrayBuffer.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Number</code> - The hex representation of part of the ArrayBuffer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>ArrayBuffer</code> \| <code>Buffer</code> |  | The ArrayBuffer to splice. |
| start | <code>Number</code> |  | The start index. |
| end | <code>Number</code> |  | The end index. |
| [endian] | <code>Boolean</code> | <code>false</code> | Whether to use big endian or not. |

<a name="array.exports.flatten"></a>

### array.exports.flatten(array, [level]) ⇒ <code>Array</code>
Flattens an array `level` times.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array</code> - The flattened array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to flatten. |
| [level] | <code>Number</code> | <code>1</code> | The number of iterations to flatten it. |

**Example**  
```js
console.log(_$.flatten(['a', 'b', ['c', 'd']])); // ['a', 'b', 'c', 'd'];
```
<a name="array.exports.nFlatten"></a>

### array.exports.nFlatten(arr) ⇒ <code>Array</code>
Flattens an array recursively.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array</code> - The flattened array.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | The array to flatten. |

**Example**  
```js
console.log(_$.nFlatten([5,[[9,4],0],[7,6]])); // [5,9,4,0,6,7]
```
<a name="array.exports.contains"></a>

### array.exports.contains(array, item) ⇒ <code>Boolean</code>
Returns whether the specified array or string contains the item given.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Boolean</code> - True or false depending on if the array contains that item.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to test with. |
| item | <code>String</code> | The item to see if the array contains. |

**Example**  
```js
console.log(_$.contains([1,2,3,4,5], 3)); // true
```
<a name="array.exports.shuffleArray"></a>

### array.exports.shuffleArray(array) ⇒ <code>Array</code>
Shuffles an array

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array</code> - The shuffled array.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to shuffle. |

**Example**  
```js
let array = [1,2,3,4,5];
console.log(_$.shuffleArray(array)); // e.g. [2,4,1,5,3]
```
<a name="array.exports.splice"></a>

### array.exports.splice(array, index, item, [remove]) ⇒ <code>String</code> \| <code>Array</code>
Splice but also for strings

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>String</code> \| <code>Array</code> - the spliced array or string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>String</code> \| <code>Array</code> |  | The array or string to operate on |
| index | <code>Number</code> |  | The index to splice |
| item | <code>\*</code> |  | The item |
| [remove] | <code>Number</code> | <code>0</code> | How many to remove. |

**Example**  
```js
console.log(_$.splice("hello earthlings", 5, " puny")); // "hello puny earthlings"
```
<a name="array.exports.unionArrays"></a>

### array.exports.unionArrays(x, y) ⇒ <code>Array</code>
Joins two arrays together and removes duplicate items.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array</code> - The joined array from the two other arrays.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Array</code> | The first array to join. |
| y | <code>Array</code> | The second array to join. |

**Example**  
```js
console.log(_$.unionArrays([1,2,3,4], [4,5,6])); // [1,2,3,4,5,6]
```
<a name="array.exports.averageBy"></a>

### array.exports.averageBy(arr, fn) ⇒ <code>Number</code>
averageBy

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Number</code> - The average of the array.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;number&gt;</code> | The array to average |
| fn | [<code>averageByFn</code>](#averageByFn) | The function to apply to each item of the array. |

**Example**  
```js
Logs the average of the first 4 square numbers:
console.log(_$.averageBy([1,2,3,4], (v) => v ** 2)); // 7.5
```
<a name="array.exports.uniqueArray"></a>

### array.exports.uniqueArray(array) ⇒ <code>Array</code>
Removes duplicates from an array

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array</code> - The array with no duplicates.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to remove duplicates from. |

**Example**  
```js
console.log(_$.uniqueArray([1,1,2,3,4,4,4,5,6)); // [1,2,3,4,5,6]
```
<a name="array.exports.each"></a>

### array.exports.each(array, callback) ⇒ <code>Array.&lt;any&gt;</code>
For each item in an array, run a callback with it.

**Kind**: static method of [<code>array</code>](#array)  
**Returns**: <code>Array.&lt;any&gt;</code> - The array passed at the beginning.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> \| <code>String</code> \| <code>Number</code> | The array, string or number to run the callback with. |
| callback | [<code>eachCallback</code>](#eachCallback) | The callback function to run on the array items. |

**Example**  
```js
_$.each(new Array(6), (array_item, i) => console.log(i));
// 0
// 1
// 2
// 3
// 4
// 5
```
<a name="color"></a>

## color : [<code>object</code>](#object)
The color namespace of Bijou.js

**Kind**: global namespace  

* [color](#color) : [<code>object</code>](#object)
    * [.exports.rgbToHex(rgb)](#color.exports.rgbToHex) ⇒ <code>String</code>
    * [.exports.hexToRGB(hex)](#color.exports.hexToRGB) ⇒ <code>String</code>
    * [.exports.blendColors(color1, color2, [percent])](#color.exports.blendColors) ⇒ <code>String</code>
    * [.exports.randomColor()](#color.exports.randomColor) ⇒ <code>String</code>
    * [.exports.lightenColor(col, amt)](#color.exports.lightenColor) ⇒ <code>String</code>
    * [.exports.lightOrDark(color)](#color.exports.lightOrDark) ⇒ <code>Object</code>

<a name="color.exports.rgbToHex"></a>

### color.exports.rgbToHex(rgb) ⇒ <code>String</code>
Converts a rgb(a) color to hex.

**Kind**: static method of [<code>color</code>](#color)  
**Returns**: <code>String</code> - The hex color.  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>String</code> | The string of RGB colors. |

**Example**  
```js
console.log(_$.rgbToHex("rgb(255,255,255)")); // "#ffffff"
```
<a name="color.exports.hexToRGB"></a>

### color.exports.hexToRGB(hex) ⇒ <code>String</code>
Converts a hex code to a RGB color.

**Kind**: static method of [<code>color</code>](#color)  
**Returns**: <code>String</code> - The RGB color converted from the hex code.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | The hex code to convert. |

**Example**  
```js
console.log(_$.rgbToHex("#ffffff")); // "rgb(255,255,255)"
```
<a name="color.exports.blendColors"></a>

### color.exports.blendColors(color1, color2, [percent]) ⇒ <code>String</code>
Blends two colors through additive blending by a percentage.

**Kind**: static method of [<code>color</code>](#color)  
**Returns**: <code>String</code> - The blended color (A hex code).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color1 | <code>String</code> |  | The hex code of the first color to be blended |
| color2 | <code>String</code> |  | The hex code of the second color to be blended. |
| [percent] | <code>Number</code> | <code>50</code> | A number between 0 and 100 of the percentage to blend the two colors, 0 being completely the first color and 100 being completely the second color. |

**Example**  
```js
console.log(_$.blendColors("#ffffff", "#000000", 80)); // #333333
```
<a name="color.exports.randomColor"></a>

### color.exports.randomColor() ⇒ <code>String</code>
Generates a random hex color.

**Kind**: static method of [<code>color</code>](#color)  
**Returns**: <code>String</code> - A random Hex color  
**Example**  
```js
console.log(_$.randomColor()); // e.g. #5bf462
```
<a name="color.exports.lightenColor"></a>

### color.exports.lightenColor(col, amt) ⇒ <code>String</code>
Lighten or darken a color by a certain amount

**Kind**: static method of [<code>color</code>](#color)  
**Returns**: <code>String</code> - The color lightened.  

| Param | Type | Description |
| --- | --- | --- |
| col | <code>String</code> | The color to lighten/darken |
| amt | <code>Number</code> | The amount to lighten the color (out of 255). |

**Example**  
```js
_$.lightenColor("#000000", 50); // #323232
```
<a name="color.exports.lightOrDark"></a>

### color.exports.lightOrDark(color) ⇒ <code>Object</code>
Tests if a color is light or dark and returns an object representation.

**Kind**: static method of [<code>color</code>](#color)  
**Returns**: <code>Object</code> - An object that represents if the color is light or dark and how much. The object key "hsp" represents a value out of 255 of how light the color is and the object's key "lightOrDark" is a string (Either "light" or "dark") of whether the color is light or dark.  

| Param | Type | Description |
| --- | --- | --- |
| color | [<code>string</code>](#string) | The hex color to test. |

**Example**  
```js
if (_$.lightOrDark("#333333").lightOrDark === 'dark'){
    document.querySelector("DIV").style.color = "white";
  } else {
      document.querySelector("DIV").style.color = "black";
  }
```
<a name="date"></a>

## date : [<code>object</code>](#object)
The date namespace of Bijou.js, containing functions to format dates, do math with them and more!

**Kind**: global namespace  

* [date](#date) : [<code>object</code>](#object)
    * [.exports.dayName([date], [locale])](#date.exports.dayName) ⇒ <code>String</code>
    * [.exports.formatMilliseconds(ms)](#date.exports.formatMilliseconds) ⇒ <code>String</code>
    * [.exports.addMinutesToDate(date, n)](#date.exports.addMinutesToDate) ⇒ <code>Date</code>
    * [.exports.isDateValid(...val)](#date.exports.isDateValid) ⇒ <code>Boolean</code>
    * [.exports.addDaysToDate(date, n)](#date.exports.addDaysToDate) ⇒ <code>Date</code>

<a name="date.exports.dayName"></a>

### date.exports.dayName([date], [locale]) ⇒ <code>String</code>
Returns the name of the weekday from the Date object specified.

**Kind**: static method of [<code>date</code>](#date)  
**Returns**: <code>String</code> - The day name from the date.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>Date</code> | <code>new Date()</code> | The date object to use. |
| [locale] | <code>String</code> | <code>en-US</code> | The locale to use. |

**Example**  
```js
console.log(_$.dayName)); // e.g. "Friday"
```
<a name="date.exports.formatMilliseconds"></a>

### date.exports.formatMilliseconds(ms) ⇒ <code>String</code>
Formats a number of milliseconds

**Kind**: static method of [<code>date</code>](#date)  
**Returns**: <code>String</code> - The string of formatted milliseconds.  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>Number</code> \| <code>String</code> | The number of milliseconds to format to a string. |

**Example**  
```js
console.log(_$.formatMilliseconds(1324765128475)); // "1 century, 7 years, 2 days, 22 hours, 18 minutes, 48 seconds, 475 milliseconds"
```
<a name="date.exports.addMinutesToDate"></a>

### date.exports.addMinutesToDate(date, n) ⇒ <code>Date</code>
Adds a certain number of minutes to a date object.

**Kind**: static method of [<code>date</code>](#date)  
**Returns**: <code>Date</code> - The date with minutes added.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| [<code>string</code>](#string) | The date to add minutes to. |
| n | <code>Number</code> | How many minutes to add to the date. |

**Example**  
```js
_$.addMinutesToDate(new Date(), 4);//Create a date 4 minutes from now.
```
<a name="date.exports.isDateValid"></a>

### date.exports.isDateValid(...val) ⇒ <code>Boolean</code>
Validates a date from a string.

**Kind**: static method of [<code>date</code>](#date)  
**Returns**: <code>Boolean</code> - Returns if the date is valid or not.  

| Param | Type | Description |
| --- | --- | --- |
| ...val | <code>any</code> | The arguments of the date to validate. |

**Example**  
```js
_$.isDateValid('December 17, 1995 03:24:00'); // true
    _$.isDateValid('1995-12-17T03:24:00'); // true
    _$.isDateValid('1995-12-17 T03:24:00'); // false
    _$.isDateValid('Duck'); // false
    _$.isDateValid(1995, 11, 17); // true
    _$.isDateValid(1995, 11, 17, 'Duck'); // false
    _$.isDateValid({}); // false
```
<a name="date.exports.addDaysToDate"></a>

### date.exports.addDaysToDate(date, n) ⇒ <code>Date</code>
Adds a specified number of days to a date.

**Kind**: static method of [<code>date</code>](#date)  
**Returns**: <code>Date</code> - The date with the specified number of days added.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | The date to add days to |
| n | <code>Number</code> | How many days to add to the date. |

<a name="element"></a>

## element : [<code>object</code>](#object)
The element namespace of Bijou.js, containing functions to create elements from query selectors, enable custom right click options, test if an element is on screen, replace the text of an element without altering it's styling, and much more!

**Kind**: global namespace  

* [element](#element) : [<code>object</code>](#object)
    * [.exports.ripple(el, obj)](#element.exports.ripple) ⇒ <code>HTMLElement</code>
    * [.exports.elementReady([parent], selector)](#element.exports.elementReady) ⇒ <code>Promise</code>
    * [.exports.elementContains(parent, child)](#element.exports.elementContains) ⇒ <code>Boolean</code>
    * [.exports.parents(el)](#element.exports.parents) ⇒ <code>Array.&lt;HTMLElement&gt;</code>
    * [.exports.getImages([el], [includeDuplicates])](#element.exports.getImages) ⇒ <code>Array</code>
    * [.exports.renderElement(param, container)](#element.exports.renderElement) ⇒ <code>HTMLElement</code>
    * [.exports.create(querySelector, [content])](#element.exports.create) ⇒
    * [.exports.context()](#element.exports.context) ⇒ <code>Array.&lt;HTMLElement&gt;</code>
    * [.exports.inView(el)](#element.exports.inView) ⇒ <code>Boolean</code>
    * [.exports.inPartialView(el)](#element.exports.inPartialView) ⇒ <code>Boolean</code>
    * [.exports.replaceText(el, callback)](#element.exports.replaceText) ⇒ <code>HTMLElement</code>
    * [.exports.textNodes(el)](#element.exports.textNodes) ⇒ <code>Array</code>
    * [.exports.querySelector(elem)](#element.exports.querySelector) ⇒ <code>String</code>
    * [.exports.removeComments(el)](#element.exports.removeComments) ⇒ <code>HTMLElement</code>
    * [.exports.parseHTML(string, [mimeType])](#element.exports.parseHTML) ⇒ <code>HTMLDocument</code>
    * [.exports.drag(dragHandle, dragTarget)](#element.exports.drag) ⇒ <code>Element</code>
    * [.exports.addEventListeners(element, events, handler, [useCapture], [args])](#element.exports.addEventListeners) ⇒ <code>Element</code>
    * [.exports.sortTable(element, [cellVal])](#element.exports.sortTable) ⇒ <code>HTMLTableElement</code>
    * [.exports.sortTableBy(th, ascending)](#element.exports.sortTableBy) ⇒ <code>HTMLTableElement</code>
    * [.exports.addStyles(el, styles)](#element.exports.addStyles) ⇒ <code>Object</code>
    * [.exports.createElement(str)](#element.exports.createElement) ⇒ <code>Element</code>
    * [.exports.compStyle(el, prop)](#element.exports.compStyle) ⇒ <code>String</code>
    * [.exports.elementSiblings(n)](#element.exports.elementSiblings) ⇒ <code>Array.&lt;Element&gt;</code>
    * [.exports.disableRightClick(el)](#element.exports.disableRightClick) ⇒ <code>HTMLElement</code>
    * [.exports.inlineCSS(el)](#element.exports.inlineCSS) ⇒ <code>Object</code>
    * [.exports.attributes(el)](#element.exports.attributes) ⇒ [<code>Array.&lt;object&gt;</code>](#object)
    * [.exports.observeMutations(element, callback, options)](#element.exports.observeMutations) ⇒ <code>MutationObserver</code>
    * [.exports.tilt(el, x, y, [perspective], [amount])](#element.exports.tilt) ⇒ <code>String</code>
    * [.exports.fullScreen(element)](#element.exports.fullScreen) ⇒ <code>Promise</code>
    * [.exports.replaceSelection(replacementText)](#element.exports.replaceSelection) ⇒ <code>Range</code>

<a name="element.exports.ripple"></a>

### element.exports.ripple(el, obj) ⇒ <code>HTMLElement</code>
Applies a material design ripple effect to the element specified. Works best with buttons and similar elements.
This comes from my GitHub repo here: https://github.com/explosion-scratch/ripple

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLElement</code> - The HTML element that the ripple effect was applied to. (The same one passed in the first param).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>HTMLElement</code> |  | The element to apply the ripple effect to. |
| obj | <code>Object</code> |  | The object with (optional) time, color, opacity and event parameters for controlling the ripple effect. If these are not present the effect relies on data-* attributes, and then defaults and look good in general. |
| [obj.time] | <code>Number</code> | <code>1000</code> | The time in milliseconds the ripple should take. |
| [obj.color] | <code>String</code> | <code>&quot;currentColor&quot;</code> | The color of the ripple effect. |
| [obj.opacity] | <code>Number</code> | <code>.3</code> | The opacity of the ripple effect. |
| [obj.event] | <code>String</code> | <code>&quot;mousedown&quot;</code> | The event to listen for to trigger the ripple effect. |

**Example**  
```js
_$.each(document.querySelectorAll("button"), _$.ripple)
//Accepts attributes too!
// data-time: The time in milliseconds that it takes the ripple to fade away
// data-color: A CSS color that the ripple should have as it's color
// data-opacity: The starting opacity of the ripple effect.
// data-event: The event to listen for to apply the ripple.
```
<a name="element.exports.elementReady"></a>

### element.exports.elementReady([parent], selector) ⇒ <code>Promise</code>
Waits for an element satisfying selector to exist, then resolves promise with the element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Promise</code> - A promise resolved when the element exists.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parent] | <code>HTMLElement</code> | <code>document.documentElement</code> | The parent element to watch. |
| selector | <code>String</code> |  | The querySelector to watch for. |

**Example**  
```js
_$.elementReady("#text").then((e) => e.remove());//Wait for an element with an ID of "text" then removes it.
```
<a name="element.exports.elementContains"></a>

### element.exports.elementContains(parent, child) ⇒ <code>Boolean</code>
Tests if an element is a child element of another element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Boolean</code> - If the element is a child or not  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>HTMLElement</code> | The parent element to test. |
| child | <code>HTMLElement</code> | The child element to test. |

**Example**  
```js
_$.elementContains(document.querySelector("#container"), document.querySelector("#img"));//If the element with an id of "img" is inside the #container element this will return true, otherwise it will return false
```
**Example**  
```js
//Note that the easiest way to do this would be to use _$.onOutsideClick(), but this is another way that demonstrates the use of this function.
//Listen for a click outside of an element (in this case the div#popup element) then remove the popup element.
document.querySelector("div#popup").addEventListener("click", (e) => {
 let contains = _$.elementContains(document.querySelector("div#popup"), e.target);
 if (!contains){
   document.querySelector("div#popup".remove()
 }
})
```
<a name="element.exports.parents"></a>

### element.exports.parents(el) ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Gets the parent elements of the element given.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - An array of the parent elements from deepest to outermost.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The element |

**Example**  
//Where the html is like so:
```
<html>
 <head>
 </head>
 <body>
   <div id="img">
    <img src="https://example.com/example.png">
   </div>
 </body>
</html>
```
_$.parents(document.querySelector("img"));//[div#img, body, html]
<a name="element.exports.getImages"></a>

### element.exports.getImages([el], [includeDuplicates]) ⇒ <code>Array</code>
Gets all the images that are children of the specified element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Array</code> - The array of image urls.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [el] | <code>HTMLElement</code> | <code>document.documentElement</code> | The element to get images from (e.g. document.body) |
| [includeDuplicates] | <code>Boolean</code> | <code>false</code> | Whether to include duplicate images, defaults to false. |

**Example**  
```js
//Get all the images on the page and convert their url's to data urls then log that list to console.
_$.getImages().forEach(image_url => {
 image_data_list.push(_$.imageToData(image_url))
})
console.log(image_data_list);
```
<a name="element.exports.renderElement"></a>

### element.exports.renderElement(param, container) ⇒ <code>HTMLElement</code>
Renders an HTML element from an object in the container specified.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLElement</code> - The HTML element rendered.  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>Object</code> | The type of object (the HTML tagName) |
| container | <code>HTMLElement</code> | The html element to render it in. |

**Example**  
```js
//Renders a button in the document body.
_$.renderElement({
  type: 'button',
  props: {
    type: 'button',
    className: 'btn',
    onClick: () => alert('Clicked'),
    children: [{ props: { nodeValue: 'Click me' } }]
  }
}, document.body)
```
<a name="element.exports.create"></a>

### element.exports.create(querySelector, [content]) ⇒
Create a DOM element from a querySelector with option to include content

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: DOMElement  

| Param | Type | Description |
| --- | --- | --- |
| querySelector | <code>String</code> | (optional) default to div |
| [content] | <code>String</code> \| <code>Number</code> \| <code>DOMElement</code> | (optional) |

**Example**  
```js
- _$.create(); // <div>
- _$.create('span#my-id.my-class.second-class'); // <span id="my-id" class="my-class second-class">
- _$.create('#my-id.my-class.second-class', 'text to insert', 12345); // <div id="my-id" class="my-class second-class">
```
<a name="element.exports.context"></a>

### element.exports.context() ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Re-enables the use of &lt;menu&gt; and &lt;menuitem&gt; tags for corner clicking.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - An array of all the HTML elements passed.  
**Example**  
//HTML:
```
<h1 contextmenu="menu">Corner click me</h1>
<menu>
 <menuitem label="An item!">
 <menuitem label="Another item!">
</menu>
```
//JS
_$.context();
// Now the user can corner click the items that have parents with a "contextmenu" attribute! Try it out here: https://bcs88.csb.app/
<a name="element.exports.inView"></a>

### element.exports.inView(el) ⇒ <code>Boolean</code>
Tests whether the specified element is fully in view.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Boolean</code> - Whether the element is completely in view.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The DOM element to test. |

**Example**  
```js
// Alerts "In view!" if the first <div> in the document is in view.
if (_$.inView(document.querySelector("div"))) alert("In view!");
```
<a name="element.exports.inPartialView"></a>

### element.exports.inPartialView(el) ⇒ <code>Boolean</code>
Tests if the given DOM element is partially (or fully) in view.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Boolean</code> - Whether the DOM element is partially in view.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element to test. |

**Example**  
```js
// Alerts "In view!" if the first <div> in the document is partially or fully view.
if (_$.inPartialView(document.querySelector("div"))) alert("In view!");
```
<a name="element.exports.replaceText"></a>

### element.exports.replaceText(el, callback) ⇒ <code>HTMLElement</code>
Replaces the text in an element by running it through a callback.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLElement</code> - The HTML element passed.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element to replace the text of. |
| callback | [<code>replaceTextCallback</code>](#replaceTextCallback) | The callback to run (Gets passed the element's text). |

**Example**  
```js
_$.replaceText(document.querySelector("div"), (text) => text.toUpperCase());
// Converts the text of the first <div> element to upperCase.
```
<a name="element.exports.textNodes"></a>

### element.exports.textNodes(el) ⇒ <code>Array</code>
Gets a list of all the text nodes in an element

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Array</code> - The text nodes.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element to get the text nodes of. |

**Example**  
```js
_$.textNodes(document.querySelector("h1"))[0].textContent = "hello world"; // replaces the text with "hello world" without deleting other elements
```
<a name="element.exports.querySelector"></a>

### element.exports.querySelector(elem) ⇒ <code>String</code>
Generates a querySelector for an element passed in.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>String</code> - The generated querySelector.  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> | The element to generate the querySelector for. |

**Example**  
```js
const textarea = document.getElementById('textarea');
console.log(_$.querySelector(textarea)); //Logs "#textarea" to the console.
```
<a name="element.exports.removeComments"></a>

### element.exports.removeComments(el) ⇒ <code>HTMLElement</code>
Removes comments from the element specified.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLElement</code> - The HTML element with the comments removed.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element to remove comments from. |

**Example**  
```js
_$.removeComments(document.documentElement);//Removes the comments from the document element.
```
<a name="element.exports.parseHTML"></a>

### element.exports.parseHTML(string, [mimeType]) ⇒ <code>HTMLDocument</code>
Parses the string of HTML specified and returns an HTML element of it.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLDocument</code> - The HTML document element of the HTML string specified.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>String</code> |  | The HTML string to parse. |
| [mimeType] | <code>String</code> | <code>&quot;text/html&quot;</code> | The mimeType of the string. |

**Example**  
```js
let html = _$.parseHTML("<div id='hello'><textarea></textarea></div>");
html.querySelector("textarea");//Returns the textarea!
```
<a name="element.exports.drag"></a>

### element.exports.drag(dragHandle, dragTarget) ⇒ <code>Element</code>
Allows an element to be dragged and dropped.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Element</code> - The element.  

| Param | Type | Description |
| --- | --- | --- |
| dragHandle | <code>Element</code> | The element that when dragged should move the dragTarget. |
| dragTarget | <code>Element</code> | The element that should be moved when the dragHandle is dragged. |

**Example**  
```js
_$.drag('div span', 'div'); // Allows the first <div> on the page to be dragged by the <span> element inside it.
```
<a name="element.exports.addEventListeners"></a>

### element.exports.addEventListeners(element, events, handler, [useCapture], [args]) ⇒ <code>Element</code>
Adds multiple event listeners with one callback to the element specified.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Element</code> - The HTML element passed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>Element</code> |  | The element to add the event listeners to. |
| events | <code>Array.&lt;String&gt;</code> |  | The array of events to listen for. |
| handler | [<code>eventListenersCallback</code>](#eventListenersCallback) |  | The function to run when the events happen. |
| [useCapture] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Whether to use capture, or an options object. |
| [args] | <code>Array</code> | <code>false</code> | The arguments to use in the handler function. |

**Example**  
```js
// Reset a timer every user interaction.
let timer = 0;
setInterval(() => timer++, 1);
_$.addEventListeners(
 document,
 ["mousemove", "click", "scroll", "keypress"],
 () => timer = 0,
);
```
<a name="element.exports.sortTable"></a>

### element.exports.sortTable(element, [cellVal]) ⇒ <code>HTMLTableElement</code>
**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLTableElement</code> - The table element.
Sorts a table using JavaScript. This appends click listeners to every TH in the table.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLTableElement</code> | The table to sort |
| [cellVal] | [<code>sortTableCallback</code>](#sortTableCallback) | The callback function to run with the element to get the value of the cell. This is passed the cell (<td>) element, and the row (<tr>) element, and the index of the cell. |

**Example**  
```js
_$.sortTable(document.querySelector("table"));//Done.
```
**Example**  
```js
_$.sortTable(document.querySelector("table"), (i) => i.getAttribute("data-sort"));//Sorts the table by each cell's 'data-sort' attribute.
```
<a name="element.exports.sortTableBy"></a>

### element.exports.sortTableBy(th, ascending) ⇒ <code>HTMLTableElement</code>
Sorts a table by a <th> element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLTableElement</code> - The table element.  

| Param | Type | Description |
| --- | --- | --- |
| th | <code>HTMLTableElement</code> | The table header (<th> element) to sort with. |
| ascending | <code>Boolean</code> | Whether to sort the table ascending or descending. |

**Example**  
```js
//Note that this example pretty much recreates the _$ sortTable function, which is much more cross browser and good than this recreation. If sorting a whole table please use that.
_$.each(document.querySelectorAll("#table th"), (th) => {
 th.addEventListener("click", () => {
   //Add event listeners to each of them.
   _$.sortTableBy(th, th.asc = !th.asc);//Toggle the "asc" attribute on the th.
 });
})
```
<a name="element.exports.addStyles"></a>

### element.exports.addStyles(el, styles) ⇒ <code>Object</code>
Adds the specified styles to the element specified.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Object</code> - the style object of the element.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element to add the styles to. |
| styles | <code>Object</code> | An object that represents the styles to be added. (camelCased) |

**Example**  
```js
_$.addStyles(document.documentElement, {backgroundColor: "#101010", color: "white"})
```
<a name="element.exports.createElement"></a>

### element.exports.createElement(str) ⇒ <code>Element</code>
Creates an HTML element from the specified string.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Element</code> - The created element.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string of the HTML element to create. |

**Example**  
```js
//Returns a div with an id of "id_here" and innerText of "Testing!"
_$.createElement("<div id='id_here'>Testing!</div>");
```
<a name="element.exports.compStyle"></a>

### element.exports.compStyle(el, prop) ⇒ <code>String</code>
Gets a property from the computed style of an element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>String</code> - The computed style property for the element specified.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element whose styles to get. |
| prop | <code>String</code> | The css-property value to get of the styles. |

**Example**  
```js
console.log(_$.compStyle(document.documentElement, "background-color")); // logs the background colour of the document
```
<a name="element.exports.elementSiblings"></a>

### element.exports.elementSiblings(n) ⇒ <code>Array.&lt;Element&gt;</code>
Get the siblings of a DOM element

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Array.&lt;Element&gt;</code> - The array of sibling elements.  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Element</code> | The element to get siblings of |

**Example**  
```js
_$.each(_$.elementSiblings(document.querySelectorAll("li")), (el) => el.style.backgroundColor = 'white');
// Make every sibling of the first list item's background color white.
```
<a name="element.exports.disableRightClick"></a>

### element.exports.disableRightClick(el) ⇒ <code>HTMLElement</code>
Disables right click on the element specified.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>HTMLElement</code> - The HTML element that now has right click disabled.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The element to disable right click on. |

**Example**  
```js
_$.disableRightClick(document.documentElement)
```
<a name="element.exports.inlineCSS"></a>

### element.exports.inlineCSS(el) ⇒ <code>Object</code>
Converts all of the styles for an element to inline CSS. This is nice for production sites because it means that they will look the same on all browsers. (Because it uses computed style.)

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Object</code> - The computed styles of the element.  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The element to convert. |

**Example**  
```js
_$.inlineCSS(document.querySelector("h1")); // Converts the styles for the <h1> element to inline using the style="___" attribute
```
<a name="element.exports.attributes"></a>

### element.exports.attributes(el) ⇒ [<code>Array.&lt;object&gt;</code>](#object)
Returns an array of objects representing the attributes of a passed element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: [<code>Array.&lt;object&gt;</code>](#object) - The array of objects representing the attributes  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | The HMTL element to get attributes from. |

**Example**  
```js
// Say the <html> tag of the document was "<html style='background-color: #101010;'>", then the function below would log "style," to the console.
console.log(Object.keys(_$.attributes(document.documentElement).join(", "));
```
<a name="element.exports.observeMutations"></a>

### element.exports.observeMutations(element, callback, options) ⇒ <code>MutationObserver</code>
Observes the mutations of the html element specified.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>MutationObserver</code> - The mutation observer.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to observe |
| callback | [<code>function</code>](#function) | The callback function to run when a mutation happens. |
| options | <code>Object</code> | The options to use. |

**Example**  
```js
_$.observeMutations(document, console.log); // Logs all the mutations that happen to the console.
```
<a name="element.exports.tilt"></a>

### element.exports.tilt(el, x, y, [perspective], [amount]) ⇒ <code>String</code>
Tilts a specified element to point towards the specified position. Note that 0,0 is the center of the screen in coordinates.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>String</code> - The css transform string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> |  | The element to tilt. |
| x | <code>Number</code> |  | The x value of the mouse |
| y | <code>Number</code> |  | The y value of the mouse |
| [perspective] | <code>Number</code> | <code>500</code> | The perspective |
| [amount] | <code>Number</code> | <code>30</code> | The amount to tilt. |

**Example**  
```js
// Tilt the first image in the document whenever the mouse moves.
let el = document.querySelector("img");
el.onmousemove = (e) => {
 let x = e.layerX;
 let y = e.layerY
 _$.tilt(el, x, y);
}
```
<a name="element.exports.fullScreen"></a>

### element.exports.fullScreen(element) ⇒ <code>Promise</code>
Enters fullscreen on an element.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Promise</code> - A promise resolved when fullscreen is entered.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to enter full screen with. |

**Example**  
```js
_$.fullScreen(document.documentElement); // Make the window fullscreen
```
<a name="element.exports.replaceSelection"></a>

### element.exports.replaceSelection(replacementText) ⇒ <code>Range</code>
Replaces the selected text in a contentEditable div with the HTML given.

**Kind**: static method of [<code>element</code>](#element)  
**Returns**: <code>Range</code> - A range representing the users selection.  

| Param | Type | Description |
| --- | --- | --- |
| replacementText | <code>String</code> | The replacement HTML to replace with. |

**Example**  
```js
// Add a simple contenteditable div to the page.
document.appendChild(_$.createElement("<div contenteditable id='text'></div>"));
_$.replaceSelection("<b>BOLD TEXT</b> <small>Bijou is awesome</small><h1>You need to use it</h1>");
//Replaces the selection! =)
```
<a name="event"></a>

## event : [<code>object</code>](#object)
The event namespace of Bijou.js, containing functions to listen and dispatch events, such as scroll stop, outside click, and multiple event listeners.

**Kind**: global namespace  

* [event](#event) : [<code>object</code>](#object)
    * [.exports.waitUntil](#event.exports.waitUntil) ⇒ <code>Promise</code>
    * [.exports.onOutsideClick(element, callback)](#event.exports.onOutsideClick) ⇒ <code>Promise</code>
    * [.exports.onScrollStop([element], callback, [time])](#event.exports.onScrollStop) ⇒ <code>Promise</code>
    * [.exports.hub()](#event.exports.hub) ⇒ <code>Object</code>
    * [.exports.dispatch(type, args, [target])](#event.exports.dispatch) ⇒ <code>Event</code>

<a name="event.exports.waitUntil"></a>

### event.exports.waitUntil ⇒ <code>Promise</code>
Waits until a condition is met then resolves a promise.

**Kind**: static property of [<code>event</code>](#event)  
**Returns**: <code>Promise</code> - A promise resolved when the condition returned by the function is true.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| condition | [<code>function</code>](#function) |  | The function which returns true when the condition is met |
| [wait] | <code>Number</code> | <code>Infinity</code> | The wait time in milliseconds to cancel the function and reject the promise. |

**Example**  
```js
//Waits until the current second of the current minute is 10.
_$.waitUntil(() => new Date().getSeconds === 10).then(() => console.log("Done"))
```
**Example**  
```js
//This DOES NOT work
_$.waitUntil(() => Date.now() === Date.now() + 100);
//Because it is evaluated many times, and the current date, is never ahead of itself. Therefore in this case the function will run infinitely.
//To fix this problem and cancel the function after a certain amount of time,
//you can pass another argument to the function
_$.waitUntil(() => false, 10000);//Waits 10 seconds, because the function always returns false.
```
<a name="event.exports.onOutsideClick"></a>

### event.exports.onOutsideClick(element, callback) ⇒ <code>Promise</code>
Returns the callback when a a click is registered outside the selected element

**Kind**: static method of [<code>event</code>](#event)  
**Returns**: <code>Promise</code> - A promise that is resolved when the user clicks outside the specified element.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to use as the outsideclick element. |
| callback | [<code>function</code>](#function) | The function to run when a click is registered outside the specified element. |

**Example**  
```js
_$.onOutsideClick(document.querySelector("div"), () => {alert("You clicked outside the DIV!")});
```
<a name="event.exports.onScrollStop"></a>

### event.exports.onScrollStop([element], callback, [time]) ⇒ <code>Promise</code>
Returns the callback when the user stops scrolling.

**Kind**: static method of [<code>event</code>](#event)  
**Returns**: <code>Promise</code> - Returns a promise that is resolved when the user stops scrolling.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [element] | <code>HTMLElement</code> | <code>window</code> | The HTML element to listen on for scroll stop. |
| callback | [<code>function</code>](#function) |  | The callback to call when the user stops scrolling. |
| [time] | <code>Number</code> | <code>150</code> |  |

**Example**  
```js
_$.onScrollStop(() => {alert("You stopped scrolling!")})
```
<a name="event.exports.hub"></a>

### event.exports.hub() ⇒ <code>Object</code>
A lot like socket.io, this allows emit, on and off handlers. (Note that this is local, only your computer sends and recieves your data. Still useful though)

**Kind**: static method of [<code>event</code>](#event)  
**Returns**: <code>Object</code> - The object with the emit, on and off functions in it.  
**Example**  
```js
let thing = _$.hub();
// Log any new data to the console
thing.on("data", (data) => console.log(data));
setTimeout(() => {
  thing.emit("data", "Yay! Some data!!"); // Logs "Yay! Some data!!" to the console after 2 seconds.
}, 2000)
```
<a name="event.exports.dispatch"></a>

### event.exports.dispatch(type, args, [target]) ⇒ <code>Event</code>
Dispatches an event of the type specified with custom arguments.

**Kind**: static method of [<code>event</code>](#event)  
**Returns**: <code>Event</code> - The event object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>String</code> |  | The type of event to dispatch (E.g. "mousemove") |
| args | <code>Object</code> |  | The argument representing the event, e.g. {clientX: 100, clientY: 150} |
| [target] | <code>EventTarget</code> | <code>window</code> | What to dispatch the event to. |

**Example**  
```js
//Dispatch a custom mouse move event to the window.
_$.dispatch("mousemove", {clientX: 100, clientY: 150, target: document.documentElement}, window);
```
<a name="function"></a>

## function : [<code>object</code>](#object)
The function namespace of Bijou.js, containing functions to work with functions themselves, such as debouncing, throttling, memoizing, currying, timing and much more!

**Kind**: global namespace  

* [function](#function) : [<code>object</code>](#object)
    * [.exports.juxt](#function.exports.juxt) ⇒ [<code>juxtCallback</code>](#juxtCallback)
    * [.exports.sleep](#function.exports.sleep) ⇒ <code>Promise</code>
    * [.exports.limitArgs](#function.exports.limitArgs) ⇒ [<code>function</code>](#function)
    * [.exports.fastestFunction](#function.exports.fastestFunction) ⇒ <code>Number</code>
    * [.exports.spread(fn)](#function.exports.spread) ⇒ [<code>spreadCallback</code>](#spreadCallback)
    * [.exports.memoize(fn)](#function.exports.memoize) ⇒ [<code>function</code>](#function)
    * [.exports.composeFunction(...functions)](#function.exports.composeFunction) ⇒ [<code>function</code>](#function)
    * [.exports.curryFunction(fn, [arity])](#function.exports.curryFunction) ⇒ [<code>function</code>](#function)
    * [.exports.isAsync(val)](#function.exports.isAsync) ⇒ <code>Boolean</code>
    * [.exports.timeFunction(fn, [name])](#function.exports.timeFunction) ⇒ <code>Object</code>
    * [.exports.throttle(func, options, wait)](#function.exports.throttle) ⇒ [<code>function</code>](#function)
    * [.exports.debounce(func, wait, [immediate])](#function.exports.debounce) ⇒ [<code>function</code>](#function)
    * [.exports.runAsync(fn)](#function.exports.runAsync) ⇒ <code>Promise</code>

<a name="function.exports.juxt"></a>

### function.exports.juxt ⇒ [<code>juxtCallback</code>](#juxtCallback)
Runs a list of functions with a list of arguments.

**Kind**: static property of [<code>function</code>](#function)  
**Returns**: [<code>juxtCallback</code>](#juxtCallback) - The function to run with the args.  

| Param | Type | Description |
| --- | --- | --- |
| ...fns | [<code>function</code>](#function) | The functions to call. |

**Example**  
```js
//It returns an array of outputs, each item in the base array is the output of one function, and each item in that array is the output for each argument.
_$.juxt(
    x => x + 1,
    x => x - 1,
    x => x * 10
  )(1, 2, 3); // [[2, 3, 4], [0, 1, 2], [10, 20, 30]]
```
<a name="function.exports.sleep"></a>

### function.exports.sleep ⇒ <code>Promise</code>
Returns a promise after a specified number of milliseconds.

**Kind**: static property of [<code>function</code>](#function)  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>Number</code> | The milliseconds to sleep. |

**Example**  
```js
(async () => {
   while (true){
    document.body.innerHTML = (await _$.getJSON("https://time.jsontest.com")).time
    await _$.sleep(60000);//Wait one minute then loop.
   }
})
```
<a name="function.exports.limitArgs"></a>

### function.exports.limitArgs ⇒ [<code>function</code>](#function)
Limits the arguments that a given function takes to only the 1st n arguments.

**Kind**: static property of [<code>function</code>](#function)  
**Returns**: [<code>function</code>](#function) - The new function that only takes the 1st n arguments.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to call. |
| n | <code>Number</code> | The number of arguments to accept. |

**Example**  
```js
//Now console can only log one item. How utterly useless but explanatory at the same time!
console.log = _$.limitArgs(console.log, 1);
```
<a name="function.exports.fastestFunction"></a>

### function.exports.fastestFunction ⇒ <code>Number</code>
Returns the index of the fastest function in an array of functions.

**Kind**: static property of [<code>function</code>](#function)  
**Returns**: <code>Number</code> - The index of the fastest function in the array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fns | <code>Array.&lt;function()&gt;</code> |  | The array of functions to execute. |
| [iterations] | <code>Number</code> | <code>1000</code> | How many times to execute the functions. (More is more reliable but takes longer.) |

**Example**  
```js
_$.fastestFunction([_$.uuid, () => _$.syntaxHighlight("<h1>Hello world</h1>", "html")]);//0, the first function.
```
<a name="function.exports.spread"></a>

### function.exports.spread(fn) ⇒ [<code>spreadCallback</code>](#spreadCallback)
Uses an array of arguments to make a function based on the one inputted.

**Kind**: static method of [<code>function</code>](#function)  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to use |

**Example**  
```js
var say = _$.spread(function(who, what) {
    return who + ' says ' + what;
  });
  say(["Fred", "hi"]);//"Fred says hi"
```
<a name="function.exports.memoize"></a>

### function.exports.memoize(fn) ⇒ [<code>function</code>](#function)
Memoizes a function, basically caching the result of past operations so that if the exact same thing is called again it will return the same value instantly.

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: [<code>function</code>](#function) - The memoized function.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to memoize. |

**Example**  
```js
let uuid = _$.memoize(() => _$.uuid()); // uuid will always return the same uuid. (Note that _$.uuid is already very fast - it can generate up to 10 million values in 20 seconds.)
```
<a name="function.exports.composeFunction"></a>

### function.exports.composeFunction(...functions) ⇒ [<code>function</code>](#function)
Composes two functions together. Read more here: https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: [<code>function</code>](#function) - The composed function.  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | [<code>function</code>](#function) | The functions to be composed. |

**Example**  
```js
const add2 = (x) => x + 2;
const multiply2 = (x) => x * 2;
console.log(_$.composeFunction(add2, multiply2)(3)) // 8 - i.e  3 * 2 + 2
```
<a name="function.exports.curryFunction"></a>

### function.exports.curryFunction(fn, [arity]) ⇒ [<code>function</code>](#function)
Returns the curried version of a function. Read more here: https://medium.com/@abitoprakash/implementing-a-curry-function-in-javascript-6a249dbcb1bb

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: [<code>function</code>](#function) - The curried version of the function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | [<code>function</code>](#function) |  | The function to curry. |
| [arity] | <code>Number</code> | <code>fn.length</code> | The arity (number of params) of the function to curry. {...*} [args] Optional arguments to pass to the function being curried. |

**Example**  
```js
let fn = (x, y, z, w) => x * y * z * w;
console.log(_$.curryFunction(fn, 4, 5)(4)(3)(2)); // 120 i.e. 5 * 4 * 3 * 2
```
<a name="function.exports.isAsync"></a>

### function.exports.isAsync(val) ⇒ <code>Boolean</code>
Returns if the given function is async or not.

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: <code>Boolean</code> - True if the function is async and false if not.  

| Param | Type | Description |
| --- | --- | --- |
| val | [<code>function</code>](#function) | The function to test. |

**Example**  
```js
const asyncFn = async (x) => x ** 3; // It's a silly function, but a good example
console.log(_$.isAsync(asyncFn)); // true
```
<a name="function.exports.timeFunction"></a>

### function.exports.timeFunction(fn, [name]) ⇒ <code>Object</code>
Times the function passed.

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: <code>Object</code> - An object with "time" and "function" properties, time being time in milliseconds, and function being the original function passed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | [<code>function</code>](#function) |  | The function to run and time. |
| [name] | <code>String</code> | <code>_$ function timer</code> | The name of the timer |

**Example**  
```js
// Times how long it took the user to enter their name.
_$.timeFunction(() => prompt("What's your name?"));
```
<a name="function.exports.throttle"></a>

### function.exports.throttle(func, options, wait) ⇒ [<code>function</code>](#function)
Only runs the input function at MAX with the delay specified.

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: [<code>function</code>](#function) - The throttled function  

| Param | Type | Description |
| --- | --- | --- |
| func | [<code>function</code>](#function) | The function to run. |
| options | <code>Object.&lt;Boolean&gt;</code> | The options. |
| wait | <code>Number</code> | The number of milliseconds to wait. |

**Example**  
```js
const alert_function = _$.throttle(() => {alert("hello")}, 5000)
setInterval(alert_function, 1)
```
<a name="function.exports.debounce"></a>

### function.exports.debounce(func, wait, [immediate]) ⇒ [<code>function</code>](#function)
Debounces a function so that it only runs after it has not been called for a certain amount of time.

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: [<code>function</code>](#function) - The debounced function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | [<code>function</code>](#function) |  | The function to throttle. |
| wait | <code>Number</code> |  | The milliseconds to wait between executions. |
| [immediate] | <code>Boolean</code> | <code>false</code> | Whether or not to run immediately, or after a group of executions. |

**Example**  
```js
window.addEventListener("keyup", _$.debounce(expensiveFunction, 100));//Run the function expensiveFunction at most every 100ms.
```
<a name="function.exports.runAsync"></a>

### function.exports.runAsync(fn) ⇒ <code>Promise</code>
Runs a function asynchronously in a web worker.

**Kind**: static method of [<code>function</code>](#function)  
**Returns**: <code>Promise</code> - A promise that resolves into the return value of the function.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to run |

**Example**  
```js
_$.runAsync(() =>  "hello world").then(console.log); // "hello world"
```
<a name="math"></a>

## math : [<code>object</code>](#object)
The math namespace of Bijou.js, containing functions to validate credit card numbers, animate with JavaScript, generate unique id's and much more!

**Kind**: global namespace  

* [math](#math) : [<code>object</code>](#object)
    * [.exports.round](#math.exports.round) ⇒ <code>Number</code>
    * [.ease](#math.ease) : [<code>object</code>](#object)
    * [.exports.gcd(...arr)](#math.exports.gcd) ⇒ <code>Number</code>
    * [.exports.equals(a, b)](#math.exports.equals)
    * [.exports.isPrime(num)](#math.exports.isPrime) ⇒ <code>boolean</code>
    * [.exports.factorial(n)](#math.exports.factorial) ⇒ <code>Number</code>
    * [.exports.luhnCheck(num)](#math.exports.luhnCheck)
    * [.exports.animate(start, end, duration, callback, [interval], [num])](#math.exports.animate) ⇒ <code>Number</code>
    * [.exports.range(start, end)](#math.exports.range) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.exports.uuid([seed])](#math.exports.uuid) ⇒ <code>String</code>
    * [.exports.primesTo(num)](#math.exports.primesTo) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.exports.random(min, max, [round], [seed])](#math.exports.random) ⇒ <code>Number</code>
    * [.exports.seedRandom(seed)](#math.exports.seedRandom) ⇒ <code>Number</code>
    * [.exports.formatNumber(n)](#math.exports.formatNumber) ⇒ <code>String</code>

<a name="math.exports.round"></a>

### math.exports.round ⇒ <code>Number</code>
Rounds a number.

**Kind**: static property of [<code>math</code>](#math)  
**Returns**: <code>Number</code> - The rounded number  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to round. |
| amount | <code>Number</code> | An optional multiple to round it to. |

**Example**  
```js
console.log(_$.round(14, 10));//Logs 10 to the console, as 14 rounded to the nearest 10 is 10.
```
**Example**  
```js
console.log(_$.round(Math.PI));//Logs 3 to the console.
```
<a name="math.ease"></a>

### math.ease : [<code>object</code>](#object)
Easing functions

**Kind**: static namespace of [<code>math</code>](#math)  
**Example**  
```js
console.log(_$.ease.easeInOutQuad(.3)); // 0.18 - the eased point of about 1/3 along the animation.
```
<a name="math.exports.gcd"></a>

### math.exports.gcd(...arr) ⇒ <code>Number</code>
Gets the greatest common divisor of a list of numbers.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>Number</code> - The greatest common divisor  

| Param | Type | Description |
| --- | --- | --- |
| ...arr | <code>Number</code> | The numbers to compare |

**Example**  
```js
_$.gcd(12, 4, 8);//Returns 4
```
<a name="math.exports.equals"></a>

### math.exports.equals(a, b)
Tests if two things are equal, like "thing === thing2" but it also works for dates and objects.

**Kind**: static method of [<code>math</code>](#math)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | The first thing to test |
| b | <code>\*</code> | The second thing to test |

**Example**  
```js
console.assert(new Date() === new Date());//Not equal
console.assert(_$.equals(new Date(), new Date()));//Equal!
```
**Example**  
```js
console.assert({thing: "Thing!"} === {thing: "Thing!"});//Not equal;
console.assert(_$.equals({thing: "Thing!"}, {thing: "Thing!"}))
```
<a name="math.exports.isPrime"></a>

### math.exports.isPrime(num) ⇒ <code>boolean</code>
Tests if a given number is prime.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>boolean</code> - Whether the number is prime  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to test. |

**Example**  
```js
_$.isPrime(11);//True
_$.isPrime(10);//False
```
<a name="math.exports.factorial"></a>

### math.exports.factorial(n) ⇒ <code>Number</code>
Gets the factorial of a number given.

**Kind**: static method of [<code>math</code>](#math)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | The number to get the factorial of. |

**Example**  
```js
_$.factorial(3);//6
```
<a name="math.exports.luhnCheck"></a>

### math.exports.luhnCheck(num)
Performs the Luhn Check on a number, which is used to validate credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israeli ID Numbers, South African ID Numbers, Greek Social Security Numbers (ΑΜΚΑ), and survey codes appearing on McDonald's, Taco Bell, and Tractor Supply Co. receipts.

**Kind**: static method of [<code>math</code>](#math)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> \| <code>String</code> | The number or string to check on. |

**Example**  
```js
- _$.luhnCheck('4485275742308327'); // true
    - _$.luhnCheck(6011329933655299); //  false
    - _$.luhnCheck(123456789); // false
```
<a name="math.exports.animate"></a>

### math.exports.animate(start, end, duration, callback, [interval], [num]) ⇒ <code>Number</code>
Animates a number from one value to another.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>Number</code> - A unique number representing the setInterval loop used in the animation.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | <code>Number</code> |  | The initial value of the number in the animation |
| end | <code>Number</code> |  | The final value of the number in the animation |
| duration | <code>Number</code> |  | The duration of the animation in milliseconds |
| callback | [<code>animateCallback</code>](#animateCallback) |  | The callback function to run with the number and the percentage (Between 0 and 1) of the animation. |
| [interval] | <code>Number</code> | <code>20</code> | The amount of time to wait between frames in milliseconds. |
| [num] | [<code>animateNumCallback</code>](#animateNumCallback) | <code>(num)&#x3D;&gt;num</code> | The function to run to manipulate the timing of the animation, for example setting this to (current_number) => current_number **2 would make a simple ease in function. (The value received by this is also between 0 and 1, feel free to use some stuff from _$.ease.FUNCTION_HERE(current_number) to incorporate easy easing!) |

**Example**  
```js
Animates from 50 to 100 over the course of 3 seconds, updating every half second, and writing the current value to the document body.
_$.animate(50,100, 3000, (e) => document.body.innerHTML = (Math.round(e)), 500, (num) => _$.ease.easeInOutQuart(num));
```
<a name="math.exports.range"></a>

### math.exports.range(start, end) ⇒ <code>Array.&lt;Number&gt;</code>
Returns an array of the whole numbers (inclusive) between the numbers specified.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>Array.&lt;Number&gt;</code> - An array of whole numbers (inclusive) between the numbers specified.  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>Number</code> | The start value of the array. |
| end | <code>Number</code> | The end value of the array. |

**Example**  
```js
console.log(_$.range(-2, 1)); // [-2, -1, 0, 1]
```
<a name="math.exports.uuid"></a>

### math.exports.uuid([seed]) ⇒ <code>String</code>
Generates a unique ID from a seed

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>String</code> - The UUID  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [seed] | <code>Number</code> \| <code>String</code> | <code>Math.random()</code> | The seed to use. |

**Example**  
```js
console.log(_$.uuid()); // e.g. "863d0193-863d-0193-863d-0193863d0193"
```
<a name="math.exports.primesTo"></a>

### math.exports.primesTo(num) ⇒ <code>Array.&lt;Number&gt;</code>
Gives an array of prime numbers up to a certain one.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>Array.&lt;Number&gt;</code> - Returns an array of prime numbers up to the given number.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to give primes to. |

**Example**  
```js
console.log(_$.primesTo(10)); // [2, 3, 5, 7]
```
<a name="math.exports.random"></a>

### math.exports.random(min, max, [round], [seed]) ⇒ <code>Number</code>
Generates a random number between a minimum and maximum number

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>Number</code> - The random number generated.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| min | <code>Number</code> |  | The lowest number that the random value generated can be. |
| max | <code>Number</code> |  | The highest number that the random value generated can be. |
| [round] | <code>Boolean</code> | <code>true</code> | Weather to round the generated number |
| [seed] | <code>Number</code> | <code>Math.random()</code> | The seed for the generated number (Between 0 and 1). |

**Example**  
```js
console.log(_$.random(0, 100)); // e.g. 47
```
<a name="math.exports.seedRandom"></a>

### math.exports.seedRandom(seed) ⇒ <code>Number</code>
Get a random number from a seed.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>Number</code> - The random number from the seed.  

| Param | Type | Description |
| --- | --- | --- |
| seed | <code>number</code> | The seed to use to generate random numbers. |

**Example**  
```js
console.log(_$.seedRandom(13)); // 0.5663226493634284
```
<a name="math.exports.formatNumber"></a>

### math.exports.formatNumber(n) ⇒ <code>String</code>
Formats a number by adding commas to it.

**Kind**: static method of [<code>math</code>](#math)  
**Returns**: <code>String</code> - The formatted string representation of the number.  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | The number to format. |

**Example**  
```js
console.log(_$.formatNumber(100000000)); // "100,000,000"
```
<a name="object"></a>

## object : [<code>object</code>](#object)
The object namespace of Bijou.js, for stuff like flattening nested objects, cloning, merging, and even listening to changes to objects!

**Kind**: global namespace  

* [object](#object) : [<code>object</code>](#object)
    * [.exports.flattenObj(o)](#object.exports.flattenObj) ⇒ <code>Object</code>
    * [.exports.clone(src)](#object.exports.clone) ⇒ <code>Object</code>
    * [.exports.listen(obj, [getCallback], [setCallback])](#object.exports.listen) ⇒ <code>Proxy</code>
    * [.exports.merge(obj1, obj2)](#object.exports.merge) ⇒ <code>Object</code>
    * [.exports.mapObjectKeys(obj, fn)](#object.exports.mapObjectKeys) ⇒ <code>Object</code>
    * [.exports.mapObjectValues(obj, fn)](#object.exports.mapObjectValues) ⇒ <code>Object</code>
    * [.exports.formToObject(form)](#object.exports.formToObject) ⇒ <code>Object</code>
    * [.exports.sortObj(obj)](#object.exports.sortObj) ⇒ <code>Object</code>

<a name="object.exports.flattenObj"></a>

### object.exports.flattenObj(o) ⇒ <code>Object</code>
Flattens an object recursively into one.

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The flattened object.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | The object to flatten |

**Example**  
```js
_$.flattenObj({
      hello: "world",
      another: {
          nested: "Value",
          anotherNestedValue: {
              "something": "A value"
          },
          "more Values!!": "lol"
      }
  }); //  { hello: "world", nested: "Value", something: "A value", more Values!!: "lol" }
```
<a name="object.exports.clone"></a>

### object.exports.clone(src) ⇒ <code>Object</code>
Deep clones an object (or anything else, like an array or string)

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The output cloned object.  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>Object</code> \| <code>Array</code> \| <code>String</code> | The object to clone. |

**Example**  
```js
let obj = { hello: { puny: "earthlings" }};
let cloned = _$.clone(obj); // cloned can be operated on without changing obj
```
<a name="object.exports.listen"></a>

### object.exports.listen(obj, [getCallback], [setCallback]) ⇒ <code>Proxy</code>
**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Proxy</code> - A proxy object that behaves like any other object but listens to changes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Object</code> |  | The object to listen to. |
| [getCallback] | [<code>listenCallback</code>](#listenCallback) | <code>()&#x3D;&gt;null</code> | The callback function to run when a value is set, with the arguments, key (the key changed) and value (the new value of the key). |
| [setCallback] | [<code>listenCallback</code>](#listenCallback) | <code>()&#x3D;&gt;null</code> | The callback function to run when a value is gotten, with the arguments, key (the key got) and value (the value of the key). |

**Example**  
```js
let obj = {something: "This is part of the object", anotherThing: "This is another!"};
obj = _$.listen(obj, (k, v) => console.log(`set ${k} to ${v}`), () => console.log("Gotten"));
obj.something; // Logs "Gotten" to the console!
obj.anotherThing = "Hello world!"; // Logs "Set abotherThing to Hello world!" to the console!
```
<a name="object.exports.merge"></a>

### object.exports.merge(obj1, obj2) ⇒ <code>Object</code>
Merges two objects into one. Note that object 2 properties will overwrite those of object 2.

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The merged object.  

| Param | Type | Description |
| --- | --- | --- |
| obj1 | <code>Object</code> | The 1st object to merge |
| obj2 | <code>Object</code> | The 2nd object to merge. |

**Example**  
```js
console.log(_$.merge({hello: "Hello!!"}, {world: " World", world: " Earthlings"})); // {hello: "Hello!!", world: " Earthlings"}
```
<a name="object.exports.mapObjectKeys"></a>

### object.exports.mapObjectKeys(obj, fn) ⇒ <code>Object</code>
Maps the keys of an object.

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The new Object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to map. |
| fn | [<code>mapObjKeysCallback</code>](#mapObjKeysCallback) | The function to run (passed the current key of the object) which returns the new value from that key. |

**Example**  
```js
_$.mapObjectKeys({something: "A value", anotherThing: "Another value!"}, (key) => key.toUpperCase());
//Returns {SOMETHING: "A value", ANOTHERTHING: "Another value!"}
```
<a name="object.exports.mapObjectValues"></a>

### object.exports.mapObjectValues(obj, fn) ⇒ <code>Object</code>
Maps an object's values.

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The mapped object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to map the values of. |
| fn | [<code>mapObjValuesCallback</code>](#mapObjValuesCallback) | The callback function to use. |

**Example**  
```js
console.log(_$.mapObjectValues({ hello: "World", bijou: "is GREAT" }, val => val.toLowerCase())); // { hello: "world", bijou: "is great" }
```
<a name="object.exports.formToObject"></a>

### object.exports.formToObject(form) ⇒ <code>Object</code>
Converts a form to an Object.

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The object of form data (The keys are the "name" attributes of the form inputs and the values are the value attributes of the form data.)  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | The form element. |

**Example**  
html:
```
<form id="form">
  <input name"input" />
  <input name="input2" />
</form>
```
js:
const form = document.getElementById("form");
console.log(_$.formToObject(form)); // e.g. { input: "hello", input2: "world" }
<a name="object.exports.sortObj"></a>

### object.exports.sortObj(obj) ⇒ <code>Object</code>
Sorts an object alphabetically by its keys.

**Kind**: static method of [<code>object</code>](#object)  
**Returns**: <code>Object</code> - The sorted object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The object to sort. |

**Example**  
```js
let object = _$.sortObj({testing: "A value", anotherThing: "Another value!"});
// The object is now {anotherThing: "Another value!", testing: "A value"}
```
<a name="string"></a>

## string : [<code>object</code>](#object)
The string namespace of Bijou.js, containing functions to map strings, remove accents from strings, speak text, syntax highlight JS, HTML and CSS and much more!

**Kind**: global namespace  

* [string](#string) : [<code>object</code>](#object)
    * [.exports.jaroDistance(a, b)](#string.exports.jaroDistance) ⇒ <code>Number</code>
    * [.exports.prefixCSS(prop)](#string.exports.prefixCSS) ⇒ <code>String</code>
    * [.exports.parseCookie(str)](#string.exports.parseCookie)
    * [.exports.hash(val)](#string.exports.hash) ⇒ <code>Promise</code>
    * [.exports.forTemplateLiteral(arr, callback)](#string.exports.forTemplateLiteral) ⇒ <code>String</code>
    * [.exports.mapString(str, fn)](#string.exports.mapString)
    * [.exports.deburr(str)](#string.exports.deburr) ⇒ <code>String</code>
    * [.exports.removeTags(html)](#string.exports.removeTags) ⇒ <code>String</code>
    * [.exports.speak(text, [lang], [volume], [voice], [pitch], [volume], [rate])](#string.exports.speak) ⇒ <code>SpeechSynthesisUtterance</code>
    * [.exports.widows(text)](#string.exports.widows) ⇒ <code>String</code>
    * [.exports.unCamelCase(str)](#string.exports.unCamelCase) ⇒ <code>String</code>
    * [.exports.camelCase(str)](#string.exports.camelCase) ⇒ <code>String</code>
    * [.exports.scrambleString(str)](#string.exports.scrambleString) ⇒ <code>String</code>
    * [.exports.hashString(str, [seed])](#string.exports.hashString) ⇒ <code>Number</code>
    * [.exports.editDistance(a, b)](#string.exports.editDistance) ⇒ <code>Number</code>
    * [.exports.byteSize(str)](#string.exports.byteSize) ⇒ <code>Number</code>
    * [.exports.replaceMultiple(text, replace)](#string.exports.replaceMultiple) ⇒ <code>String</code>
    * [.exports.urlQuery(query, [url])](#string.exports.urlQuery) ⇒ <code>String</code>
    * [.exports.sanitize(html, [tags], [attributes])](#string.exports.sanitize) ⇒ <code>String</code>
    * [.exports.markdownToHTML(src)](#string.exports.markdownToHTML) ⇒ <code>String</code>
    * [.exports.syllables(word)](#string.exports.syllables) ⇒ <code>Number</code>
    * [.exports.titleCase(str)](#string.exports.titleCase) ⇒ <code>String</code>
    * [.exports.capitalize(str)](#string.exports.capitalize) ⇒ <code>String</code>
    * [.exports.replaceBetween(string, start, end, what)](#string.exports.replaceBetween) ⇒ <code>String</code>
    * [.exports.escapeHTML(str)](#string.exports.escapeHTML) ⇒ <code>String</code>
    * [.exports.unescapeHTML(str)](#string.exports.unescapeHTML) ⇒ <code>String</code>
    * [.exports.previousPage()](#string.exports.previousPage) ⇒ <code>String</code>

<a name="string.exports.jaroDistance"></a>

### string.exports.jaroDistance(a, b) ⇒ <code>Number</code>
Compares two strings using the Jaro-Winkler Distance algorithm.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>Number</code> - A number representing how similar the two strings are, where 1 is exactly the same and 0 is totally different  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>String</code> | The first string |
| b | <code>String</code> | The second string |

**Example**  
```js
_$.jaroDistance('test', 'tes');//0.9416666666666667
```
<a name="string.exports.prefixCSS"></a>

### string.exports.prefixCSS(prop) ⇒ <code>String</code>
Prefixes the given CSS property for the current browser.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The prefixed value (camelCased, instead of css-case, so mozAppearance instead of -moz-appearance).  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>String</code> | The property to prefix. |

**Example**  
```js
document.body.style[_$.prefix("appearance")] = "hidden";//Sets the document body's appearance property to "hidden".
```
<a name="string.exports.parseCookie"></a>

### string.exports.parseCookie(str)
Parses a cookie string into object and value pairs.

**Kind**: static method of [<code>string</code>](#string)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to parse. |

**Example**  
```js
_$.parseCookie("foo=bar; something=hello%20world");//Returns {foo: "bar", something: "hello world"};
```
<a name="string.exports.hash"></a>

### string.exports.hash(val) ⇒ <code>Promise</code>
Hashes a string using the crypto api.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>Promise</code> - A promise that resolves into the hashed string.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | The string to hash |

**Example**  
```js
_$.hash(
    JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })
  ).then(console.log);
  // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```
<a name="string.exports.forTemplateLiteral"></a>

### string.exports.forTemplateLiteral(arr, callback) ⇒ <code>String</code>
Lets you use a for loop in template literals.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - String that has been for looped  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | The array to loop. |
| callback | [<code>mapCallback</code>](#mapCallback) | The callback to return strings |

**Example**  
```js
console.log(`Things: ${_$.forTemplateLiteral(["apple", "orange"], (item, i) => {return `an ${item}`})}`)
// "Things: an apple an orange
```
<a name="string.exports.mapString"></a>

### string.exports.mapString(str, fn)
Maps a string like an array.

**Kind**: static method of [<code>string</code>](#string)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to map |
| fn | [<code>mapCallback</code>](#mapCallback) | The callback function to run to map the string. |

**Example**  
```js
_$.mapString("Hello world", (e) => e.toUpperCase());//Returns "HELLO WORLD"
```
<a name="string.exports.deburr"></a>

### string.exports.deburr(str) ⇒ <code>String</code>
Removes the accents from a string.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The string without accents.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to use. |

**Example**  
```js
console.log(_$.decurr("déjà vu")); // "deja vu"
```
<a name="string.exports.removeTags"></a>

### string.exports.removeTags(html) ⇒ <code>String</code>
Removes tags from the HTML string specified.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - THe string of HTML without the tags.  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>String</code> | The string of HTML to remove tags from. |

**Example**  
```js
console.log(_$.removeTags("<div>Hello</div>")); // "Hello"
```
<a name="string.exports.speak"></a>

### string.exports.speak(text, [lang], [volume], [voice], [pitch], [volume], [rate]) ⇒ <code>SpeechSynthesisUtterance</code>
Speaks the text given.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>SpeechSynthesisUtterance</code> - The SpeechSynthesisUtterance  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>String</code> |  | The text to split |
| [lang] | <code>String</code> | <code>en-US</code> | The language to speak with. |
| [volume] | <code>Number</code> | <code>1</code> | The volume |
| [voice] | <code>String</code> \| <code>Number</code> | <code>1</code> | The voice to use. |
| [pitch] | <code>Number</code> | <code>1</code> | The pitch |
| [volume] | <code>Number</code> | <code>1</code> | The volume |
| [rate] | <code>Number</code> | <code>1</code> | The speed. |

**Example**  
```js
_$.speak("Bijou is awesome!"); // speaks "Bijou is awesome!"
```
<a name="string.exports.widows"></a>

### string.exports.widows(text) ⇒ <code>String</code>
Returns the last space in the string given replaced with "&nbsp;"

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The replaced string.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | The string to replace |

**Example**  
```js
document.querySelector("h1").innerHTML = _$.widows(document.querySelector("h1").innerHTML);
//Replaces the last space in the <h1>'s innerText with "&nbsp;"
```
<a name="string.exports.unCamelCase"></a>

### string.exports.unCamelCase(str) ⇒ <code>String</code>
Undoes camelCase.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The string of unCamelCased code.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to unCamelCase. |

**Example**  
```js
console.log(_$.unCamelCase("helloWorld")); // "Hello World"
```
<a name="string.exports.camelCase"></a>

### string.exports.camelCase(str) ⇒ <code>String</code>
camelCases a string.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The camelCased string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string of non-camelCased text. |

**Example**  
```js
console.log(_$.camelCase("Hello world")); // "helloWorld"
```
<a name="string.exports.scrambleString"></a>

### string.exports.scrambleString(str) ⇒ <code>String</code>
Scrambles the order of characters in a string. Thanks to @\Touchcreator for the suggestion for this.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The scrambled text.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to be scrambled |

**Example**  
```js
console.log(_$.scrambleString("Hello world")); // e.g. "owllH rdloe"
```
<a name="string.exports.hashString"></a>

### string.exports.hashString(str, [seed]) ⇒ <code>Number</code>
Hashes a string to a unique integer (This cannot be decrypted easily).

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>Number</code> - The hashed string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| str | <code>String</code> |  | The String to hash. |
| [seed] | <code>Number</code> | <code>0</code> | The seed of the hash. |

**Example**  
```js
console.log(_$.hashString("Hello world")); // 3494146707865688
```
<a name="string.exports.editDistance"></a>

### string.exports.editDistance(a, b) ⇒ <code>Number</code>
Gets the edit distance between two strings.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>Number</code> - The edit distance between two strings  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>String</code> | The first string |
| b | <code>String</code> | The seconds string |

**Example**  
```js
console.log(_$.editDistance("hello", "Hello")); // 1
```
<a name="string.exports.byteSize"></a>

### string.exports.byteSize(str) ⇒ <code>Number</code>
Returns the size of a string in bytes.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>Number</code> - The byte size of the string.  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

**Example**  
```js
console.log(_$.byteSize("Hello world")); 11
```
<a name="string.exports.replaceMultiple"></a>

### string.exports.replaceMultiple(text, replace) ⇒ <code>String</code>
Finds and replace multiple values with multiple other values.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The replaced string  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | The text to operate the replace on. |
| replace | <code>Object</code> | The object with find and replace values. |

**Example**  
```js
_$.replaceMultiple("I have a cat, a dog, and a goat.", {dog: "cat", goat: "dog", cat: "goat"});//Returns "I have a goat, a cat and a dog"
```
<a name="string.exports.urlQuery"></a>

### string.exports.urlQuery(query, [url]) ⇒ <code>String</code>
Returns the queries from a given url (Or just the current url)

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The url query  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>String</code> |  | The url query to get. |
| [url] | <code>String</code> | <code>window.location.href</code> | The url to find the query in. (By default this is the current url) |

**Example**  
```js
// If the website adress of the current page was "https://example.com/?q=hello&hello=world"
console.log(_$.urlQuery("hello")); // "world"
// Or on a custom url:
console.log(_$.urlQuery("q", "https://google.com/search?q=something")); // "something"
```
<a name="string.exports.sanitize"></a>

### string.exports.sanitize(html, [tags], [attributes]) ⇒ <code>String</code>
Sanitizes an HTML string. It is quite possible that this is not production ready so use with caution. (I did my best though >=( )

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The sanitized HTML string.  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>String</code> | The input string to sanitize. |
| [tags] | <code>Array</code> | The array of tags to allow, there is a default list though. |
| [attributes] | <code>Array</code> | The array of attributes to allow. By default only allows "href" and "src" attributes. |

**Example**  
```js
console.log(_$.sanitizeHTML("<script>alert('hello')></script><b>A normal tag</b>")); // "<b>A normal tag</b>"
```
<a name="string.exports.markdownToHTML"></a>

### string.exports.markdownToHTML(src) ⇒ <code>String</code>
Converts markdown to HTML.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The string of HTML converted from the markdown input.  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>String</code> | The markdown to convert to HTML. |

**Example**  
```js
console.log(_$.markdownToHTML("_Italic text_, **bold text**")); // "<em>Italic text</em>, <b>bold text</b>"
```
<a name="string.exports.syllables"></a>

### string.exports.syllables(word) ⇒ <code>Number</code>
Counts the syllables in the word given.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>Number</code> - The number of syllables in the specified word.  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>String</code> | The word to count syllables of |

**Example**  
```js
console.log(_$.syllables("Hello")); // 2
```
<a name="string.exports.titleCase"></a>

### string.exports.titleCase(str) ⇒ <code>String</code>
Converts a string to title case

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The string in title case.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to convert to title case. |

**Example**  
```js
_$.titleCase("hello world");//Returns "Hello World"
```
<a name="string.exports.capitalize"></a>

### string.exports.capitalize(str) ⇒ <code>String</code>
Capitalizes the first letter of the string

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The capitalized string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to capitalize. |

**Example**  
```js
console.log(_$.capitalize("hello world")); // "Hello world"
```
<a name="string.exports.replaceBetween"></a>

### string.exports.replaceBetween(string, start, end, what) ⇒ <code>String</code>
Replaces between two indexes of a string.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The replaced string  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | The string to operate on. |
| start | <code>Number</code> | The start index |
| end | <code>Number</code> | The end index |
| what | <code>String</code> | What to replace with. |

**Example**  
```js
console.log(_$.replaceBetween("Hello world", 6, 11, "earthlings")); // "Hello earthlings"
```
<a name="string.exports.escapeHTML"></a>

### string.exports.escapeHTML(str) ⇒ <code>String</code>
Escapes a string of HTML

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The escaped HTML.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string of HTML to escape. |

**Example**  
```js
console.log(_$.escapeHTML("<div>")); // "&lt;div&gt;"
```
<a name="string.exports.unescapeHTML"></a>

### string.exports.unescapeHTML(str) ⇒ <code>String</code>
Unescapes a string of HTML

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The unescaped HTML.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string of HTML to unescape. |

**Example**  
```js
console.log(_$.unescapeHTML("&lt;div&gt;")); // "<div>"
```
<a name="string.exports.previousPage"></a>

### string.exports.previousPage() ⇒ <code>String</code>
Returns the previous page that the user visited.

**Kind**: static method of [<code>string</code>](#string)  
**Returns**: <code>String</code> - The url of the previous page the user visited.  
**Example**  
```js
console.log(_$.previousPage()); // e.g. "https://bijou.js.org"
```
<a name="utility"></a>

## utility : [<code>object</code>](#object)
The utility namespace of Bijou.js, containing utilities to do many things, such as playing audio, fetching JSON, preloading images and much more.

**Kind**: global namespace  

* [utility](#utility) : [<code>object</code>](#object)
    * [.exports.createStream](#utility.exports.createStream) ⇒ <code>MediaStream</code>
    * [.exports.manipulate](#utility.exports.manipulate) ⇒ <code>Promise.&lt;MediaStreamTrack&gt;</code>
    * [.exports.tag](#utility.exports.tag) ⇒ [<code>function</code>](#function)
    * [.exports.request](#utility.exports.request) ⇒ <code>Object</code> \| <code>Response</code> \| <code>String</code> \| <code>Image</code>
    * [.preload](#utility.preload) : [<code>object</code>](#object)
    * [.cookies](#utility.cookies) ⇒ [<code>function</code>](#function)
    * [.regex](#utility.regex) ⇒ <code>Regexp</code>
    * [.exports.resize(url, [width], [height])](#utility.exports.resize) ⇒ [<code>Promise.&lt;string&gt;</code>](#string)
    * [.exports.htmlToImage(html, [opts])](#utility.exports.htmlToImage) ⇒ [<code>Promise.&lt;string&gt;</code>](#string)
    * [.callbackify(fn)](#utility.callbackify) ⇒ [<code>function</code>](#function)
    * [.promisify(fn, [argIndex])](#utility.promisify) ⇒ [<code>function</code>](#function)
    * [.exports.race(fn, timeout, calcelCb)](#utility.exports.race) ⇒ <code>Promise</code>
    * [.exports.typeOf(e, lowerCase)](#utility.exports.typeOf)
    * [.exports.injectCSS(css)](#utility.exports.injectCSS) ⇒ <code>HTMLElement</code>
    * [.exports.mobileOrDesktop()](#utility.exports.mobileOrDesktop) ⇒ <code>String</code>
    * [.exports.playSection(audioObj, start, stop)](#utility.exports.playSection) ⇒ <code>Audio</code>
    * [.exports.formatHTML(html)](#utility.exports.formatHTML) ⇒ <code>String</code>
    * [.exports.getJSON(url, callback)](#utility.exports.getJSON) ⇒ <code>Promise</code>
    * [.exports.getHTML(url, callback)](#utility.exports.getHTML) ⇒ <code>Promise</code>
    * [.exports.preloadImage(...urls)](#utility.exports.preloadImage) ⇒ <code>Array.&lt;Image&gt;</code>
    * [.exports.saveBlob(blob, [fileName])](#utility.exports.saveBlob) ⇒ <code>Blob</code>
    * [.exports.requestInterval(fn, delay)](#utility.exports.requestInterval) ⇒ <code>Object</code>
    * [.exports.loadScript(url, callback)](#utility.exports.loadScript) ⇒ <code>Promise</code>
    * [.exports.imageToData(url, callback)](#utility.exports.imageToData) ⇒ <code>Promise</code>
    * [.exports.jsonToCsv(arr, columns, [delimiter])](#utility.exports.jsonToCsv) ⇒ <code>String</code>
    * [.exports.arrayToCSV(arr, [delimiter])](#utility.exports.arrayToCSV) ⇒ <code>String</code>
    * [.exports.notify(title, body, icon)](#utility.exports.notify) ⇒ <code>Promise</code>
    * [.exports.copy(str)](#utility.exports.copy) ⇒ <code>String</code>
    * [.exports.browser()](#utility.exports.browser) ⇒ <code>String</code>
    * [.exports.serializeForm(form)](#utility.exports.serializeForm) ⇒ <code>String</code>
    * [.exports.soundex(s)](#utility.exports.soundex) ⇒ <code>String</code>

<a name="utility.exports.createStream"></a>

### utility.exports.createStream ⇒ <code>MediaStream</code>
Creates a MediaStream with all of the tracks passed.

**Kind**: static property of [<code>utility</code>](#utility)  
**Returns**: <code>MediaStream</code> - A MediaStream object which has all of the tracks passed.  

| Param | Type | Description |
| --- | --- | --- |
| ...tracks | <code>MediaStreamTrack</code> | A list of the tracks to add to the new media stream. |

**Example**  
```js
//Combine video from screen share with audio from microphone
const audioStream = await navigator.mediaDevices.getUserMedia({audio: true});
//Get the audio track, streams can have more than one track.
const audioTrack = audioStream.getAudioTracks()[0];

//Do the same for video (get from screen share)
const videoStream = await navigator.mediaDevices.getDisplayMedia({video: true});
const videoTrack = videoStream.getVideoTracks()[0];

//   Now use the _$.createStream function to create a new stream with the
// audio from the microphone and the video from the screen share.
const combinedStream = createStream(audioStream, videoStream);//Order doesn't matter, _$.createStream also accepts an array of streams.
```
<a name="utility.exports.manipulate"></a>

### utility.exports.manipulate ⇒ <code>Promise.&lt;MediaStreamTrack&gt;</code>
**Kind**: static property of [<code>utility</code>](#utility)  
**Returns**: <code>Promise.&lt;MediaStreamTrack&gt;</code> - Returns a promise that resolves into a mediaStream with the original videoStream but manipulated by whatever the fn function returns (see example).  

| Param | Type | Description |
| --- | --- | --- |
| videoTrack | <code>MediaStreamTrack</code> | A video track to manipulate |
| fn | [<code>manipulateVideoStreamFunction</code>](#manipulateVideoStreamFunction) | The function given to manipulate the video stream. |

**Example**  
```js
//Greenscreen effect
let video = document.createElement("video");
video.setAttribute("autoplay", true);
document.body.appendChild(video);

//Now the cool part
let videotrack = await navigator.mediaDevices.getUserMedia({video: true})
		.then(stream => stream.getVideoTracks()[0]);

//    Basically manipulate the video track using canvas, and for every color,
// if its green value is above 200 then make that pixel transparent.
// Creating a simple greenscreen effect.
video.srcObject = _$.createStream(
_$.manipulate(videotrack, (color) => {
		if (color.green > 200){
			//Simple greenscreen effect
			color.alpha = 0;
		}
		return color;
	})
)
```
<a name="utility.exports.tag"></a>

### utility.exports.tag ⇒ [<code>function</code>](#function)
Creates a template literal tag. Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

**Kind**: static property of [<code>utility</code>](#utility)  
**Returns**: [<code>function</code>](#function) - A template literal tagging function, which returns a string.  

| Param | Type | Description |
| --- | --- | --- |
| k | [<code>function</code>](#function) | The function to run on new (interpolated) text in the template literal. |
| o | [<code>function</code>](#function) | The function to run on the normal text in the template literal. |

**Example**  
```js
let t = tag(_$.escapeHTML);
//Notice the "t" at the beginning of the template literal. (t`Some text`).
console.log(t`This will not be escaped <i>Italics!</i> ${"But this will, <i>Not italic</i>"}`)
```
<a name="utility.exports.request"></a>

### utility.exports.request ⇒ <code>Object</code> \| <code>Response</code> \| <code>String</code> \| <code>Image</code>
Request a URL and get the data back in a specific format.

**Kind**: static property of [<code>utility</code>](#utility)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The options object |
| options.url | <code>String</code> |  | The URL to fetch |
| options.body | <code>Object</code> \| <code>String</code> \| <code>FormData</code> |  | The body of the request |
| [options.as] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <code>&quot;response&quot;</code> | What to fetch the data as. A string that is one of ["response", "blob", "json", "dataurl", "text", "image", "html", "bloburl", "headers"], or an Array of multiple. If an array (e.g. ["text", "json"]) an object with {text: "{'some': 'json'}", json: {some: "json"}} will be returned |
| [options.method] | <code>String</code> | <code>&quot;GET&quot;</code> | One of ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"] |
| [options.options] | <code>Object</code> | <code>{}</code> | An options object that is passed to fetch(url, options). |
| [options.headers] | <code>Object</code> | <code>{}</code> | Headers object to add to the request before sent |
| [options.type] | <code>Object</code> \| <code>String</code> | <code>&quot;json&quot;</code> | The type of the request payload. One of ["JSON", "urlencoded", "text", "formdata"] (not case sensitive). For urlencoded or JSON, pass an object as options.body, for text, pass a string, for formdata pass a FormData object, and for raw, pass anything. This is then added into fetch(url, {body: body}) |
| [options.corsFallback] | <code>Boolean</code> | <code>true</code> | Whether to retry the request via a cors proxy if it fails |
| [options.corsDomain] | <code>String</code> | <code>&#x27;https://cors.explosionscratc.repl.co/&#x27;</code> | The cors domain to use as a proxy |
| [options.detectCors] | [<code>function</code>](#function) | <code>({response, error}) &#x3D;&gt; error || !response.ok</code> | Passed a response or an error. If this function returns true the request will be retried with the CORS domain proxy (up to once) |
| [options.makeCorsUrl] | [<code>function</code>](#function) | <code>(url, domain) &#x3D;&gt; &#x60;${domain}${url.split(&quot;//&quot;)[1]}&#x60;</code> | The function which takes a URL and domain as an input and returns the altered URL to be retried with CORS. For example makeCors("https://google.com", "https://cors.explosionscratc.repl.co/") would return "https://cors.explosionscratc.repl.co/google.com" |
| [options.timeout] | <code>Number</code> | <code></code> | The timeout (in ms) before cancelling the request. If null than there will be no timeout handling. |

**Example**  
```js
let response = await _$.request({
	url: "https://google.com",
	as: ["html", "bloburl"],
	timeout: 1000
})
// → {html: #document, bloburl: "blob:https://github.com/abc-def-ghi"}
```
<a name="utility.preload"></a>

### utility.preload : [<code>object</code>](#object)
preload links when hovering over them, to have no-refresh page navigation

**Kind**: static namespace of [<code>utility</code>](#utility)  
<a name="utility.cookies"></a>

### utility.cookies ⇒ [<code>function</code>](#function)
A set of functions to set and modify cookies.

**Kind**: static namespace of [<code>utility</code>](#utility)  
**Returns**: [<code>function</code>](#function) - The function that the user wanted  
**Example**  
```js
_$.cookies.setItem("a_cookie", "Hello world!", 1); // Set a_cookie to "Hello world" and have it expire in a day.
```
<a name="utility.regex"></a>

### utility.regex ⇒ <code>Regexp</code>
A collection of regular expressions to validate and get common things from a page

**Kind**: static namespace of [<code>utility</code>](#utility)  
**Returns**: <code>Regexp</code> - A regex  
**Example**  
```js
if (_$.regex.email.test("email@gmail.com") alert("That is a valid email!")
```
<a name="utility.exports.resize"></a>

### utility.exports.resize(url, [width], [height]) ⇒ [<code>Promise.&lt;string&gt;</code>](#string)
Resizes an image from a URL and returns a promise with it's data URL.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: [<code>Promise.&lt;string&gt;</code>](#string) - A data URL of the resized image.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | The URL of the image to resize. |
| [width] | <code>Number</code> | <code>Natural width of the image</code> | The target width of the new image |
| [height] | <code>Number</code> | <code>Natural width of the image</code> | The target height of the new image |

<a name="utility.exports.htmlToImage"></a>

### utility.exports.htmlToImage(html, [opts]) ⇒ [<code>Promise.&lt;string&gt;</code>](#string)
Converts a string of HTML to an image (!!)

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: [<code>Promise.&lt;string&gt;</code>](#string) - A promise that resolves into the data URL string of the image.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| html | <code>String</code> |  | The HTML string to transform into an image |
| [opts] | [<code>Object.&lt;string&gt;</code>](#string) | <code>{x: 0, y: 0, width: 300, height: 400}</code> | The object with options. |
| [opts.x] | <code>Number</code> | <code>0</code> | The x position of the text |
| [opts.y] | <code>Number</code> | <code>0</code> | The y position of the text |
| [opts.width] | <code>Number</code> | <code>300</code> | The width of the output image. |
| [opts.height] | <code>Number</code> | <code>400</code> | The height of the output image. |

<a name="utility.callbackify"></a>

### utility.callbackify(fn) ⇒ [<code>function</code>](#function)
Converts a function that returns a promise into a callback based function

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: [<code>function</code>](#function) - The callback based function.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to 'callbackify'. |

**Example**  
```js
let getUUID = _$.callbackify((limit) =>
   fetch(
       `https://apis.explosionscratc.repl.co/uuid?limit=1${escape(parseInt(limit))}`
   ).then(res => res.json()));

getUUID(console.log, 500);//Get 500 uuid's from my API and log them to the console.
```
<a name="utility.promisify"></a>

### utility.promisify(fn, [argIndex]) ⇒ [<code>function</code>](#function)
Promisifies a function by converting a callback based function to return a promise.
(assuming argIndex = -1)

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: [<code>function</code>](#function) - The function promisified (now returns a promise).  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | [<code>function</code>](#function) |  | The function to run. |
| [argIndex] | <code>Number</code> | <code>0</code> | The index of the argument that is the callback returned by the function. |

**Example**  
```js
let time = _$.promisify(setTimeout);
(async () => {
	await time(2000);
	console.log("It's been 2 seconds.")
})();
```
<a name="utility.exports.race"></a>

### utility.exports.race(fn, timeout, calcelCb) ⇒ <code>Promise</code>
Times out a promise after a specified number of milliseconds.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Promise</code> - The promise that was inputted, but will time out after a specified time.  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to run that should return a promise, or the promise itself. |
| timeout | <code>Number</code> | The timeout to cancel after. |
| calcelCb | [<code>function</code>](#function) | The callback to run when cancelled, defaults to throwing an error. |

**Example**  
```js
//Attempts to fetch the date from jsontest.com, if the request is still pending after 2000 milliseconds cancel it and throw an error.
let fetch_stuff = fetch("http://date.jsontest.com/");
_$.race(fetch_stuff, 2000).then((res) => res.json()).then(console.log).catch(console.error)
```
**Example**  
```js
//Load my popup library, then prompt using it and after 4 seconds close and remove the popup.
(async () => {
 //Load the script, but check for duplicates! ;)
	await _$.loadScript("https://cdn.jsdelivr.net/gh/explosion-scratch/popup/popup.js", {}, true);
	_$.race(prompt("Enter something in the next 4 seconds!"), 4000).then(console.log).catch(() => {
		document.querySelector("#popup").remove();
		document.querySelector("#popup-bg").remove();
		console.log("User could not type fast enough -__-")
	})
});
```
<a name="utility.exports.typeOf"></a>

### utility.exports.typeOf(e, lowerCase)
Gets the type of something. This is more specific than the 'typeof' operator.

**Kind**: static method of [<code>utility</code>](#utility)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | The thing to get the type of. |
| lowerCase | <code>Boolean</code> | Whether to return the string lowercased or not. |

**Example**  
```js
_$.typeof("This is a string");//"String"
typeof "This is a string";//Also string
```
**Example**  
```js
_$.typeof(/^[regex]$/i);//"RegExp".
typeof /^[regex]$/i;//"object"
```
**Example**  
```js
_$.typeof(new Date());//"Date"
typeof new Date();//Object -__-
```
<a name="utility.exports.injectCSS"></a>

### utility.exports.injectCSS(css) ⇒ <code>HTMLElement</code>
Injects CSS into the document head.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>HTMLElement</code> - The CSS <style> element.  

| Param | Type | Description |
| --- | --- | --- |
| css | <code>String</code> | The CSS to inject. |

**Example**  
```js
//Makes the body's background a dark charcoal color.
_$.injectCSS("body {background: #101010; color: white;}");
```
**Example**  
```js
//Set the text color to an appropriate color depending on the background color of the document body:
if (_$.lightOrDark(_$.compStyle(document.body, "background-color")).lightOrDark === "light"){
   _$.injectCSS(`
     body {
       color: ${_$.lightenColor(_$.rgbToHex(_$.compStyle(document.body, "background-color")), -100)};
     }
   `)
} else {
   _$.injectCSS(`
     body {
       color: ${_$.lightenColor(_$.rgbToHex(_$.compStyle(document.body, "background-color")), 100)};
     }
   `)
}
```
<a name="utility.exports.mobileOrDesktop"></a>

### utility.exports.mobileOrDesktop() ⇒ <code>String</code>
Returns either "mobile" or "desktop" depending on which type of device the user is using.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - Either "mobile" or "desktop" depending on which type of device the user is using.  

|  |
|
| 

**Example**  
```js
console.log(_$.mobileOrDesktop()); // e.g. "desktop"
```
<a name="utility.exports.playSection"></a>

### utility.exports.playSection(audioObj, start, stop) ⇒ <code>Audio</code>
Plays a section of an audio file.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Audio</code> - The audio object first passed.  

| Param | Type | Description |
| --- | --- | --- |
| audioObj | <code>HTMLMediaElement</code> | The audio object to play. (Needs to be created from "new Audio()") |
| start | <code>Number</code> | The time to start playing. |
| stop | <code>Number</code> | The time to stop playing. |

**Example**  
```js
_$.playSection(new Audio("file.mp3"), 5, 20.5); // Plays file.mp3, starting with second 5 and ending at 20.5 seconds into the file.
```
<a name="utility.exports.formatHTML"></a>

### utility.exports.formatHTML(html) ⇒ <code>String</code>
Formats a string of HTML using indents. Note that this does not format CSS or JS in the HTML.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - The formatted string of HTML.  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>String</code> | The string of HTML to format. |

**Example**  
console.log(_$.formatHTML("<h1>moo</h1><div id="hi">hello <span>world</span></div>"));
Logs the following to the console:
```
   <h1>moo</h1>
   <div id='hi'>hello <span>world</span>
   </div>
   ```
<a name="utility.exports.getJSON"></a>

### utility.exports.getJSON(url, callback) ⇒ <code>Promise</code>
Gets JSON from a URL and performs a callback with it.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Promise</code> - A promise resolved when the JSON is fetched and parsed.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url of the JSON to be fetched. |
| callback | [<code>function</code>](#function) | The function to be run with the JSON code. |

**Example**  
```js
_$.getJSON("http://date.jsontest.com/", (json) => {alert("The current time is " + json.time)})
```
<a name="utility.exports.getHTML"></a>

### utility.exports.getHTML(url, callback) ⇒ <code>Promise</code>
Gets HTML from a URL and performs a callback with it.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Promise</code> - A promise resolved when the HTML is fetched and parsed.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url of the HTML to be fetched. |
| callback | [<code>function</code>](#function) | The function to be run with the HTML code. |

**Example**  
```js
// Logs the HTML of wikipedia.org to the console.
_$.getHTML("https://wikipedia.org", (html) => console.log(html));
```
<a name="utility.exports.preloadImage"></a>

### utility.exports.preloadImage(...urls) ⇒ <code>Array.&lt;Image&gt;</code>
Preloads all of the image urls given in the arguments

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Array.&lt;Image&gt;</code> - An array of all the Image elements created to preload.  

| Param | Type | Description |
| --- | --- | --- |
| ...urls | <code>String</code> | The urls of the images to be preloaded. |

**Example**  
```js
_$.preloadImage("https://unsplash.com/some_huge_image.png"); // Preloads the unsplash image "some_huge_image.png" :P
```
<a name="utility.exports.saveBlob"></a>

### utility.exports.saveBlob(blob, [fileName]) ⇒ <code>Blob</code>
Saves a blob as a file!

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Blob</code> - The blob saved.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| blob | <code>Blob</code> |  | The blob to save as a file. |
| [fileName] | <code>String</code> | <code>output.txt</code> | The name of the output file (Must include the extension.) |

**Example**  
```js
_$.saveBlob(new Blob(["Yay! I'm in a text file!"]), "Cool file.txt");
```
<a name="utility.exports.requestInterval"></a>

### utility.exports.requestInterval(fn, delay) ⇒ <code>Object</code>
Works exactly like setInterval but instead uses requestAnimationFrame.

**Kind**: static method of [<code>utility</code>](#utility)  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>function</code>](#function) | The function to run repeatedly every delay seconds. |
| delay | <code>Number</code> | The delay time in milliseconds to run the function. |

<a name="utility.exports.loadScript"></a>

### utility.exports.loadScript(url, callback) ⇒ <code>Promise</code>
Loads a script from a url (Can be to a local file or to a url) then runs a callback once it's loaded.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Promise</code> - A promise resolved once the script is loaded.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url to load the script from. |
| callback | [<code>function</code>](#function) | The callback to run when the script is loaded. |

**Example**  
```js
_$.("script.js", ()=>alert("Script loaded!"));//Loads the script from the "script.js" file
```
<a name="utility.exports.imageToData"></a>

### utility.exports.imageToData(url, callback) ⇒ <code>Promise</code>
Fetches an image and runs the callback with the data url of the image.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Promise</code> - A promise fulfulled when the image is loaded.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | The url of the image to load. |
| callback | [<code>function</code>](#function) | The callback function. |

**Example**  
```js
//Replaces every image's url with its respective data url.
_$.each(document.querySelectorAll('img'), (img) => {
  _$.imageToData(img.src, (data) => {
   img.src = data;
 })
})
```
<a name="utility.exports.jsonToCsv"></a>

### utility.exports.jsonToCsv(arr, columns, [delimiter]) ⇒ <code>String</code>
Converts JSON to a CSV string

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - The string of comma separated values (CSV) created from the JSON.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | The array of objects to convert to CSV. |
| columns | <code>Array</code> |  | The columns to use. |
| [delimiter] | <code>String</code> | <code>&quot;,&quot;</code> | The delimiter between cells, by default this is a comma. |

**Example**  
```js
_$.jsonToCsv(
    [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
    ['a', 'b']
  );
//
   a,b
  "1","2"
  "3","4"
  "6",""
  "","7"
```
<a name="utility.exports.arrayToCSV"></a>

### utility.exports.arrayToCSV(arr, [delimiter]) ⇒ <code>String</code>
Converts an array to CSV (Comma separated values) data.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - The comma separated array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | The array to convert. |
| [delimiter] | <code>String</code> | <code>,</code> | The separator (By default this is a comma.) |

**Example**  
```js
console.log(_$.arrayToCSV([1,2,3,4])); // "1,2,3,4"
```
<a name="utility.exports.notify"></a>

### utility.exports.notify(title, body, icon) ⇒ <code>Promise</code>
Displays a desktop notification with the specified text.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>Promise</code> - A promise that fulfills once the notification is sent, and is rejected when there is an error  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | The title of the notification. |
| body | <code>String</code> | The body of the notification. |
| icon | <code>String</code> | The url to the image for the icon of the notification. |

**Example**  
```js
_$.notify("Hello", "Hi there! This is a notification!"); Notifies the user with the title "Hello" and the body text "Hi there! This is a notification!"
```
<a name="utility.exports.copy"></a>

### utility.exports.copy(str) ⇒ <code>String</code>
Copies the string inputted to the clipboard.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - The string copied.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The string to copy. |

**Example**  
```js
_$.copy("Hello world");
```
<a name="utility.exports.browser"></a>

### utility.exports.browser() ⇒ <code>String</code>
Returns the browser that the user is using.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - A string of the browser name that the user is using.  
**Example**  
```js
_$.browser(); // For me this (correctly) returns "Chrome"
```
<a name="utility.exports.serializeForm"></a>

### utility.exports.serializeForm(form) ⇒ <code>String</code>
Converts a form to URL queries using the name attribute.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - The string of url queries (Excluding the hostname and path) of the form data.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>HTMLFormElement</code> | The form element. |

<a name="utility.exports.soundex"></a>

### utility.exports.soundex(s) ⇒ <code>String</code>
An implementation of the soundex algorithm in JavaScript, used to test if two words sound the same.

**Kind**: static method of [<code>utility</code>](#utility)  
**Returns**: <code>String</code> - The soundex of the given string  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>String</code> | The word to get the soundex of. |

**Example**  
```js
_$.soundex("ekxplohsin");//"E214"
_$.soundex("explosion");//"E214"
```
<a name="node"></a>

## node()
Tests if the user is using Node.js or not and throws an error in specific functions (that require the DOM) if they are.

**Kind**: global function  
<a name="averageByFn"></a>

## averageByFn ⇒ <code>Number</code>
**Kind**: global typedef  
**Returns**: <code>Number</code> - The number to average  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | The number to perform the operation on |

<a name="eachCallback"></a>

## eachCallback : [<code>function</code>](#function)
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>any</code> | The item of the array/string/number range |
| i | <code>Number</code> | The index of the item in the array/string/number range |
| array | <code>Array.&lt;any&gt;</code> | The original array |

<a name="replaceTextCallback"></a>

## replaceTextCallback ⇒ <code>String</code>
**Kind**: global typedef  
**Returns**: <code>String</code> - The replaced text  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | The text to replace |

<a name="eventListenersCallback"></a>

## eventListenersCallback ⇒ <code>undefined</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The event object |

<a name="sortTableCallback"></a>

## sortTableCallback ⇒ <code>String</code>
**Kind**: global typedef  
**Returns**: <code>String</code> - The cell content  

| Param | Type | Description |
| --- | --- | --- |
| td | <code>HTMLTableCellElement</code> | The td element |
| tr | <code>HTMLTableRowElement</code> | The tr element |
| cellIndex | <code>Number</code> | The cell index |

<a name="scrollStopCallback"></a>

## scrollStopCallback ⇒ <code>undefined</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>UIEvent</code> | The event object |

<a name="juxtCallback"></a>

## juxtCallback ⇒ [<code>Array.&lt;array&gt;</code>](#array)
**Kind**: global typedef  
**Returns**: [<code>Array.&lt;array&gt;</code>](#array) - The list of outputs.  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | The arguments to run on the functions |

<a name="spreadCallback"></a>

## spreadCallback ⇒ <code>any</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array</code> | The array of arguments |

<a name="listenCallback"></a>

## listenCallback ⇒ <code>undefined</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> \| <code>Symbol</code> | The key being accessed |
| value | <code>any</code> | The value of the key being accessed |

<a name="mapObjKeysCallback"></a>

## mapObjKeysCallback ⇒ <code>String</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key |

<a name="mapObjValuesCallback"></a>

## mapObjValuesCallback ⇒ <code>any</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value |

<a name="animateNumCallback"></a>

## animateNumCallback ⇒ <code>Number</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| num | <code>Number</code> | 

<a name="animateCallback"></a>

## animateCallback ⇒ <code>undefined</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| num | <code>Number</code> | 
| percent | <code>Number</code> | 

<a name="mapCallback"></a>

## mapCallback : [<code>function</code>](#function)
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>any</code> | The item |
| i | <code>Number</code> | The index of the item |
| arr | <code>Array</code> | The original array |

<a name="manipulateVideoStreamFunction"></a>

## manipulateVideoStreamFunction ⇒ <code>Object</code>
**Kind**: global typedef  
**Returns**: <code>Object</code> - Returns an object with red, green, blue and alpha keys.  

| Param | Type | Description |
| --- | --- | --- |
| pixel | <code>Object</code> |  |
| pixel.red | <code>Number</code> | The red value of the pixel (0-255) |
| pixel.green | <code>Number</code> | The green value of the pixel (0-255) |
| pixel.blue | <code>Number</code> | The blue value of the pixel (0-255) |
| pixel.alpha | <code>Number</code> | The alpha value of the pixel (0-255) |

**Example**  
```js
//Example function given to _$.manipulate
(color) => {
	if (color.green > 200){
		//Simple greenscreen effect
		color.alpha = 0;
	}
	return color;
}
```
