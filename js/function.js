//#region Function
/**
 * Runs a list of functions with a list of arguments.
 * @returns {Array.<array>} The list of outputs.
 * @memberOf function
 * @example
 * //It returns an array of outputs, each item in the base array is the output of one function, and each item in that array is the output for each argument.
 * _$.juxt(
    x => x + 1,
    x => x - 1,
    x => x * 10
  )(1, 2, 3); // [[2, 3, 4], [0, 1, 2], [10, 20, 30]]
 * @param  {...function} fns The functions to call.
 */
export let juxt = (...fns) => (...args) =>
	[...fns].map((fn) => [...args].map(fn));
/**
 * Returns a promise after a specified number of milliseconds.
 * @returns {Promise}
 * @memberOf function
 * @example
 * (async () => {
 *    while (true){
 *     document.body.innerHTML = (await _$.getJSON("https://time.jsontest.com")).time
 *     await _$.sleep(60000);//Wait one minute then loop.
 *    }
 * })
 * @param {Number} ms The milliseconds to sleep.
 */
export let sleep = (ms = req("number", "milliseconds")) =>
	new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Limits the arguments that a given function takes to only the 1st n arguments.
 * @example
 * //Now console can only log one item. How utterly useless but explanatory at the same time!
 * console.log = _$.limitArgs(console.log, 1);
 * @memberOf function
 * @returns {Function} The new function that only takes the 1st n arguments.
 * @param {Function} fn The function to call.
 * @param {Number} n The number of arguments to accept.
 */
export let limitArgs = (
	fn = req("function", "function"),
	n = req("number", "arguments"),
) => (...args) => fn(...args.slice(0, n));
/**
 * Returns the index of the fastest function in an array of functions.
 * @memberOf math
 * @returns {Number} The index of the fastest function in the array.
 * @example
 * _$.fastestFunction([_$.uuid, () => _$.syntaxHighlight("<h1>Hello world</h1>", "html")]);//0, the first function.
 * @param {Array} fns The array of functions to execute.
 * @param {Number} [iterations=1000] How many times to execute the functions. (More is more reliable but takes longer.)
 */
export let fastestFunction = (fns, iterations = 1000) => {
	const times = fns.map((fn) => {
		const before = performance.now();
		for (let i = 0; i < iterations; i++) fn();
		return performance.now() - before;
	});
	return times.indexOf(Math.min(...times));
};

/**
 * Uses an array of arguments to make a function based on the one inputted.
 * @memberOf function
 * @function
 * @returns {Function}
 * @example
 * var say = _$.spread(function(who, what) {
    return who + ' says ' + what;
  });
  say(["Fred", "hi"]);//"Fred says hi"
 * @param {Function} fn The function to use
 */
export let spread = (fn = req("function")) => {
	return (args) => {
		call_me.apply(this, args);
	};
};
/**
 * Memoizes a function, basically caching the result of past operations so that if the exact same thing is called again it will return the same value instantly.
 * @function
 * @memberOf function
 * @param {Function} fn The function to memoize.
 * @example
 * let uuid = _$.memoize(() => _$.uuid()); // uuid will always return the same uuid. (Note that _$.uuid is already very fast - it can generate up to 10 million values in 20 seconds.)
 * @returns {Function} The memoized function.
 */
export let memoize = (fn = req("function")) => {
	let cache = {};
	return function () {
		let args = JSON.stringify(Array.from(arguments));
		let arg_array = Array.from(arguments);
		if (cache[args]) {
			return cache[args];
		} else {
			cache[args] = fn(...arg_array);
			return cache[args];
		}
	};
};
/**
 * Composes two functions together. Read more here: https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj
 * @function
 * @memberOf function
 * @param {...Function} The functions to be composed.
 * @returns {Function} The composed function.
 * @example
 * const add2 = (x) => x + 2;
 * const multiply2 = (x) => x * 2;
 * console.log(_$.composeFunction(add2, multiply2)(3)) // 8 - i.e  3 * 2 + 2
 */
export let composeFunction = (...functions) => (args) => {
	req("functions", "function list", ![...functions].length);
	return functions.reduceRight((arg, fn) => fn(arg), args);
};
/**
 * Returns the curried version of a function. Read more here: https://medium.com/@abitoprakash/implementing-a-curry-function-in-javascript-6a249dbcb1bb
 * @function
 * @memberOf function
 * @param {Function} fn The function to curry.
 * @param {Number} [arity=fn.length] The arity (number of params) of the function to curry.
 * {...*} [args] Optional arguments to pass to the function being curried.
 * @returns {Function} The curried version of the function.
 * @example
 * let fn = (x, y, z, w) => x * y * z * w;
 * console.log(_$.curryFunction(fn, 4, 5)(4)(3)(2)); // 120 i.e. 5 * 4 * 3 * 2
 */
export let curryFunction = (
	fn = req("function"),
	arity = fn.length,
	...args
) =>
	arity <= args.length
		? fn(...args)
		: curryFunction.bind(null, fn, arity, ...args);
/**
 * Returns if the given function is async or not.
 * @memberOf function
 * @function
 * @param {Function} val The function to test.
 * @returns {Boolean} True if the function is async and false if not.
 * @example
 * const asyncFn = async (x) => x ** 3; // It's a silly function, but a good example
 * console.log(_$.isAsync(asyncFn)); // true
 */
export let isAsync = (val = req("function")) =>
	Object.prototype.toString.call(val) === "[object AsyncFunction]";

/**
 * Times the function passed.
 * @function
 * @memberOf utility
 * @param {Function} fn The function to run and time.
 * @param {String} [name=_$ function timer]
 * @example
 * // Times how long it took the user to enter their name.
 * _$.timeFunction(() => prompt("What's your name?"));
 * @returns {undefined}
 */
export let timeFunction = (
	fn = req("function"),
	name = "_$ function timer",
) => {
	let startTime = performance.now();
	console.time(name);
	fn();
	console.timeEnd(name);
	return performance.now() - startTime;
};
/**
 * Only runs the input function at MAX with the delay specified.
 * @function
 * @memberOf function
 * @param {Function} func The function to run.
 * @param {Object.<Boolean>} options The options.
 * @param {Number} wait The number of milliseconds to wait.
 * @example
 * const alert_function = _$.throttle(() => {alert("hello")}, 5000)
 * setInterval(alert_function, 1)
 * @returns {Function} The throttled function
 */
export let throttle = (
	func = req("function"),
	wait = req("number", "wait"),
	options = {},
) => {
	var context, args, result;
	var timeout = null;
	var previous = 0;
	if (!options) options = {};
	var later = function () {
		previous = options.leading === false ? 0 : Date.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function () {
		var now = Date.now();
		if (!previous && options.leading === false) previous = now;
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
};
/**
 * Debounces a function
 * @memberOf function
 * @function
 * @example
 * window.addEventListener("keyup", _$.debounce(expensiveFunction, 100));//Run the function expensiveFunction at most every 100ms.
 * @param {Function} func The function to throttle.
 * @param {Number} wait The milliseconds to wait between executions.
 * @param {Boolean} [immediate=false] Whether or not to run immediately, or after a group of executions.
 */
export let debounce = (
	func = req("function"),
	wait = req("number", "wait"),
	immediate = false,
) => {
	// 'private' variable for instance
	// The returned function will be able to reference this due to closure.
	// Each call to the returned function will share this common timer.
	var timeout;

	// Calling debounce returns a new anonymous function
	return function () {
		// reference the context and args for the setTimeout function
		var context = this,
			args = arguments;

		// Should the function be called now? If immediate is true
		//   and not already in a timeout then the answer is: Yes
		var callNow = immediate && !timeout;

		// This is the basic debounce behaviour where you can call this
		//   function several times, but it will only execute once
		//   [before or after imposing a delay].
		//   Each time the returned function is called, the timer starts over.
		clearTimeout(timeout);

		// Set the new timeout
		timeout = setTimeout(function () {
			// Inside the timeout function, clear the timeout variable
			// which will let the next execution run when in 'immediate' mode
			timeout = null;

			// Check if the function already ran with the immediate flag
			if (!immediate) {
				// Call the original function with apply
				// apply lets you define the 'this' object as well as the arguments
				//    (both captured before setTimeout)
				func.apply(context, args);
			}
		}, wait);

		// Immediate mode and no wait timer? Execute the function..
		if (callNow) func.apply(context, args);
	};
};
/**
 * Runs a function asynchronously in a web worker.
 * @function
 * @memberOf function
 * @param {Function} fn The function to run
 * @example
 * _$.runAsync(() =>  "hello world").then(console.log); // "hello world"
 * @returns {Promise} A promise that resolves into the return value of the function.
 */
export let runAsync = (fn = req("function")) => {
	const worker = new Worker(
		URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
			type: "application/javascript; charset=utf-8",
		}),
	);
	return new Promise((res, rej) => {
		worker.onmessage = ({ data }) => {
			res(data), worker.terminate();
		};
		worker.onerror = (err) => {
			rej(err), worker.terminate();
		};
	});
};
//#endregion Function
