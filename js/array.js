// #region Array
/**
 * Counts the items in an array, returning a separate count for each object.
 * @returns {Object}
 * @memberOf array
 * @function
 * @example
 * _$.count(['a', 'b', 'c', 'd', 'e', 'f'])//{'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1}
 *
 * //But if you have multiple items:
 * _$.count(['a', 'a', b', 'b', 'c', 'd', 'e']);//{'a': 2, 'b': 2, 'c': 1, 'd': 1, 'e': 1}
 * @param {Array} arr The array to count items in.
 */
export const count = (arr = req("array", "array")) =>
	arr.reduce((counts, item) => {
		counts[item] = (counts[item] || 0) + 1;
		return counts;
	}, {});

/**
 * Returns the difference between two arrays or strings.
 * @memberOf array
 * @function
 * @returns {Array|String} The difference between two arrays or strings.
 * @example
 * console.log(_$.arrayDiff(['a', 'b'], ['a', 'b', 'c', 'd'])); // ["c", "d"]
 * @param {Array|String} a1 The first array or string
 * @param {Array|String} a2 The 2nd array or string.
 */
export const arrayDiff = (
	a1 = req("array", "array 1"),
	a2 = req("array", "array 2"),
) => {
	const a = [];
	const diff = [];
	for (var i = 0; i < a1.length; i++) {
		a[a1[i]] = true;
	}
	for (var i = 0; i < a2.length; i++) {
		if (a[a2[i]]) {
			delete a[a2[i]];
		} else {
			a[a2[i]] = true;
		}
	}
	for (const k in a) {
		diff.push(k);
	}
	return diff;
};

/**
 * Gets the difference between two strings.
 * @memberOf array
 * @function
 * @param {String} text1 The 1st text to compare
 * @param {String} text2 The 2nd text to compare with the 1st one.
 * @example
 * console.log(_$.diff("hello earthlings", "hello world"); // [[6,8],[9,16]]
 * @returns {Array.<Array.<number>>} An array of arrays, each array in the main array contains 2 numbers, the start and then end of the difference.
 */
export const diff = function (
	text1 = req("string", "Text 1"),
	text2 = req("string", "Text 2"),
) {
	// Takes in two strings
	// Returns an array of the span of the differences
	// So if given:
	// text1: "that is number 124"
	// text2: "this is number 123"
	// It will return:
	// [[2,4],[17,18]]
	// If the strings are of different lengths, it will check up to the end of text1
	// If you want it to do case-insensitive difference, just convert the texts to lowercase before passing them in
	const diffRange = [];
	let currentRange;
	for (var i = 0; i < text1.length; i++) {
		if (text1[i] != text2[i]) {
			// Found a diff!
			if (currentRange == undefined) {
				// Start a new range
				currentRange = [i];
			}
		}
		if (currentRange != undefined && text1[i] == text2[i]) {
			// End of range!
			currentRange.push(i);
			diffRange.push(currentRange);
			currentRange = undefined;
		}
	}
	// Push any last range if there's still one at the end
	if (currentRange != undefined) {
		currentRange.push(i);
		diffRange.push(currentRange);
	}
	return diffRange;
};

/**
 * Removes an item from the array specified.
 * @memberOf array
 * @function
 * @param {Array} array The array to remove the item from.
 * @param {*} item The item to remove.
 * @example
 * console.log(_$.remove([5, 4, 3, 2, 1], 4)); // [5, 3, 2, 1]
 */
export const remove = (
	array = req("array", "array"),
	item = req(undefined, "item"),
) => {
	if (typeof array === "string") {
		return array.replace(item, "");
	}
	if (typeof array === "object") {
		array[`${item}`] = undefined;
		array = _$.clone(array, (itm) => itm !== undefined);
		return array;
	}
	if (array.indexOf(item) > -1) {
		array.splice(array.indexOf(item), 1);
	}
	return array;
};
/**
 * Splices an ArrayBuffer.
 * @function
 * @memberOf array
 * @param {ArrayBuffer|Buffer} arr The ArrayBuffer to splice.
 * @param {Number} start The start index.
 * @param {Number} end The end index.
 * @param {Boolean} [endian=false] Whether to use big endian or not.
 * @returns {Number} The hex representation of part of the ArrayBuffer.
 */
export const spliceArrayBuffer = (
	arr = req("ArrayBuffer"),
	start = req("number"),
	end = req("number"),
	endian = false,
) => {
	const direction = endian ? -1 : 1;
	if (endian) [start, end] = [end, start];
	start = Math.floor(start);
	end = Math.floor(end) + direction;
	for (var i = start, value = 0; i != end; i += direction) {
		value = 256 * value + arr[i];
	}
	return value;
};

/**
 * Flattens an array `level` times.
 * @memberOf array
 * @function
 * @returns {Array} The flattened array.
 * @example
 * console.log(_$.flatten(['a', 'b', ['c', 'd']])); // ['a', 'b', 'c', 'd'];
 * @param {Array} array The array to flatten.
 * @param {Number} [level=1] The number of iterations to flatten it.
 */
export const flatten = (array = req("array", "array"), level = 1) => {
	let output = array;
	_$.each(level, () => {
		output = [].concat.apply([], array);
	});
	return output;
};

/**
 * Flattens an array recursively.
 * @function
 * @memberOf array
 * @param {Array} arr The array to flatten.
 * @returns {Array} The flattened array.
 * @example
 * console.log(_$.nFlatten([5,[[9,4],0],[7,6]])); // [5,9,4,0,6,7]
 */
export const nFlatten = (arr = req("array", "array")) => {
	return arr.reduce(function (flat, toFlatten) {
		return flat.concat(
			Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten,
		);
	}, []);
};

/**
 * Returns whether the specified array or string contains the item given.
 * @memberOf array
 * @function
 * @param {Array} array The array to test with.
 * @param {String} item The item to see if the array contains.
 * @example
 * console.log(_$.contains([1,2,3,4,5], 3)); // true
 * @returns {Boolean} True or false depending on if the array contains that item.
 */
export const contains = (
	array = req("array"),
	item = req("string"),
) => array.includes(item);

/**
 * Shuffles an array
 * @function
 * @memberOf array
 * @param {Array} array The array to shuffle.
 * @example
 * let array = [1,2,3,4,5];
 * console.log(_$.shuffleArray(array)); // e.g. [2,4,1,5,3]
 * @returns {Array} The shuffled array.
 */
export const shuffleArray = (array = req("array")) =>
	array.sort(() => Math.random() - 0.5);

/**
 * Splice but also for strings
 * @memberOf array
 * @function
 * @param {String|Array} array The array or string to operate on
 * @param {Number} index The index to splice
 * @param {*} item The item
 * @param {Number} [remove=0] How many to remove.
 * @returns {String|Array} the spliced array or string
 * @example
 * console.log(_$.splice("hello earthlings", 5, " puny")); // "hello puny earthlings"
 */
export const splice = (
	array = req("array", "array"),
	index = req("number", "index"),
	remove = 0,
	item,
) => {
	const args = Array.from(arguments);
	args.shift();
	return typeof array === "string"
		? array
				.split("")
				.splice(...args)
				.join("")
		: array.splice(...args);
};
/**
 * Joins two arrays together and removes duplicate items.
 * @function
 * @memberOf array
 * @param {Array} x The first array to join.
 * @param {Array} y The second array to join.
 * @example
 * console.log(_$.unionArrays([1,2,3,4], [4,5,6])); // [1,2,3,4,5,6]
 * @returns {Array} The joined array from the two other arrays.
 */
export const unionArrays = (
	x = req("array", "array1"),
	y = req("array", "array2"),
) => {
	const obj = {};
	for (var i = x.length - 1; i >= 0; --i) obj[x[i]] = x[i];
	for (var i = y.length - 1; i >= 0; --i) obj[y[i]] = y[i];
	const res = [];
	for (const k in obj) {
		if (obj.hasOwnProperty(k)) res.push(obj[k]);
	}
	return res;
};
/**
 * averageBy
 * @function
 * @memberOf array
 * @param {Array.<number>} arr The array to average
 * @param {Function} fn The function to apply to each item of the array.
 * @example
 * Logs the average of the first 4 square numbers:
 * console.log(_$.averageBy([1,2,3,4], (v) => v ** 2)); // 7.5
 * @returns {Number} The average of the array.
 */
export const averageBy = (
	arr = req("array", "array"),
	fn = req("function", "callback"),
) =>
	arr
		.map(typeof fn === "function" ? fn : (val) => val[fn])
		.reduce((acc, val) => acc + val, 0) / arr.length;

/**
 * Removes duplicates from an array
 * @function
 * @memberOf array
 * @param {Array} array The array to remove duplicates from.
 * @example
 * console.log(_$.uniqueArray([1,1,2,3,4,4,4,5,6)); // [1,2,3,4,5,6]
 * @returns {Array} The array with no duplicates.
 */
export const uniqueArray = (array = req("array", "array")) => [
	...new Set(array),
];
/**
 * For each item in an array, run a callback with it.
 * @function
 * @memberOf array
 * @param {Array|String|Number} array The array, string or number to run the callback with.
 * @param {Function} callback The callback function to run on the array items.
 * @example
 * _$.each(new Array(6), (array_item, i) => console.log(i));
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * @returns {undefined}
 */
export const each = (
	array = req("Array|Number|String", "array"),
	callback = req("function", "callback"),
) => {
	array =
		typeof array === "number"
			? _$.range(1, array)
			: typeof array === "string"
			? array.split("")
			: array;
	for (let i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
};
// #endregion Array
