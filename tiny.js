document.head.innerHTML +=
	'<script src="https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.min.js" integrity="sha512-lvWiOP+aMKHllm4THsjzNleVuGOh0WGniJ3lgu/nvCbex1LlaQSxySUjAu/LTJw9FhnSL/PVYoQcckg1Q03+fQ==" crossorigin="anonymous"></script>';
let _temp = {
	primesTo: (num) => {
		let arr = Array.from({
				length: num - 1,
			}).map((x, i) => i + 2),
			sqroot = Math.floor(Math.sqrt(num)),
			numsTillSqroot = Array.from({
				length: sqroot - 1,
			}).map((x, i) => i + 2);
		numsTillSqroot.forEach(
			(x) => (arr = arr.filter((y) => y % x !== 0 || y === x)),
		);
		return arr;
	},
	async: (fn) => {
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
	},
	formatMilliseconds: (ms) => {
		if (ms < 0) ms = -ms;
		const time = {
			day: Math.floor(ms / 86400000),
			hour: Math.floor(ms / 3600000) % 24,
			minute: Math.floor(ms / 60000) % 60,
			second: Math.floor(ms / 1000) % 60,
			millisecond: Math.floor(ms) % 1000,
		};
		return Object.entries(time)
			.filter((val) => val[1] !== 0)
			.map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
			.join(", ");
	},
	addStyles: (el, styles) => {
		return Object.assign(el.style, styles);
	},
	onOutsideClick: (element, callback) => {
		document.addEventListener("click", (e) => {
			if (!element.contains(e.target)) callback();
		});
	},
	onScrollStop: (callback) => {
		let isScrolling;
		window.addEventListener(
			"scroll",
			(e) => {
				clearTimeout(isScrolling);
				isScrolling = setTimeout(() => {
					callback();
				}, 150);
			},
			false,
		);
	},
	copy: (str) => {
		const el = document.createElement("textarea");
		el.value = str;
		el.setAttribute("readonly", "");
		el.style.position = "absolute";
		el.style.left = "-9999px";
		document.body.appendChild(el);
		const selected =
			document.getSelection().rangeCount > 0
				? document.getSelection().getRangeAt(0)
				: false;
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
		if (selected) {
			document.getSelection().removeAllRanges();
			document.getSelection().addRange(selected);
		}
	},
	throttle: (fn, wait) => {
		let inThrottle, lastFn, lastTime;
		return function () {
			const context = this,
				args = arguments;
			if (!inThrottle) {
				fn.apply(context, args);
				lastTime = Date.now();
				inThrottle = true;
			} else {
				clearTimeout(lastFn);
				lastFn = setTimeout(function () {
					if (Date.now() - lastTime >= wait) {
						fn.apply(context, args);
						lastTime = Date.now();
					}
				}, Math.max(wait - (Date.now() - lastTime), 0));
			}
		};
	},
	createElement: (str) => {
		const el = document.createElement("div");
		el.innerHTML = str;
		return el.firstElementChild;
	},
	browser: () => {
		var isOpera =
			(!!window.opr && !!opr.addons) ||
			!!window.opera ||
			navigator.userAgent.indexOf(" OPR/") >= 0;
		var isFirefox = typeof InstallTrigger !== "undefined";
		var isSafari =
			/constructor/i.test(window.HTMLElement) ||
			(function (p) {
				return p.toString() === "[object SafariRemoteNotification]";
			})(
				!window["safari"] ||
					(typeof safari !== "undefined" && window["safari"].pushNotification),
			);
		var isIE = /*@cc_on!@*/ false || !!document.documentMode;
		var isEdge = !isIE && !!window.StyleMedia;
		var isChrome =
			!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
		var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1;
		var isBlink = (isChrome || isOpera) && !!window.CSS;
		if (isOpera) {
			return "Opera";
		}
		if (isFirefox) {
			return "Firefox";
		}
		if (isSafari) {
			return "Safari";
		}
		if (isEdge) {
			return "Edge";
		}
		if (isIE) {
			return "Internet Explorer";
		}
		if (isChrome) {
			return "Chrome";
		}
		if (isEdgeChromium) {
			return "Edge Chromium";
		}
		if (isBlink) {
			return "Blink";
		}
	},
	notify: (text, body, icon) => {
		if (!window.Notification) {
			console.log("Browser does not support notifications.");
		} else {
			if (Notification.permission === "granted") {
				var notify = new Notification(text, {
					body: body,
					icon: icon,
				});
			} else {
				Notification.requestPermission()
					.then(function (p) {
						if (p === "granted") {
							var notify = new Notification(text, {
								body: body,
								icon: icon,
							});
						} else {
							console.log("User blocked notifications.");
						}
					})
					.catch(function (err) {
						console.error(err);
					});
			}
		}
	},
	dayName: (date, locale) =>
		date.toLocaleDateString(locale, {
			weekday: "long",
		}),
	jsonToCsv: (arr, columns, delimiter = ",") =>
		[
			columns.join(delimiter),
			...arr.map((obj) =>
				columns.reduce(
					(acc, key) =>
						`${acc}${!acc.length ? "" : delimiter}"${
							!obj[key] ? "" : obj[key]
						}"`,
					"",
				),
			),
		].join("\n"),
	unionArrays: (x, y) => {
		var obj = {};
		for (var i = x.length - 1; i >= 0; --i) obj[x[i]] = x[i];
		for (var i = y.length - 1; i >= 0; --i) obj[y[i]] = y[i];
		var res = [];
		for (var k in obj) {
			if (obj.hasOwnProperty(k)) res.push(obj[k]);
		}
		return res;
	},
	each: (array, callback) => {
		for (let i = 0; i < array.length; i++) {
			callback(array[i]);
		}
	},
	mapObjectKeys: (obj, fn) =>
		Array.isArray(obj)
			? obj.map((val) => _$.mapObjectKeys(val, fn))
			: typeof obj === "object"
			? Object.keys(obj).reduce((acc, current) => {
					const key = fn(current);
					const val = obj[current];
					acc[key] =
						val !== null && typeof val === "object"
							? _$.mapObjectKeys(val, fn)
							: val;
					return acc;
			  }, {})
			: obj,
	arrayToCSV: (arr, delimiter = ",") =>
		arr
			.map((v) =>
				v
					.map((x) => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x))
					.join(delimiter),
			)
			.join("\n"),
	averageBy: (arr, fn) =>
		arr
			.map(typeof fn === "function" ? fn : (val) => val[fn])
			.reduce((acc, val) => acc + val, 0) / arr.length,
	inView: (el) => {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top >= window.pageYOffset &&
			left >= window.pageXOffset &&
			top + height <= window.pageYOffset + window.innerHeight &&
			left + width <= window.pageXOffset + window.innerWidth
		);
	},
	inPartialView: (el) => {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < window.pageYOffset + window.innerHeight &&
			left < window.pageXOffset + window.innerWidth &&
			top + height > window.pageYOffset &&
			left + width > window.pageXOffset
		);
	},
	serializeForm: (form) =>
		Array.from(new FormData(form), (field) =>
			field.map(encodeURIComponent).join("="),
		).join("&"),
	formToObject: (form) =>
		Array.from(new FormData(form)).reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{},
		),
	uuid: () =>
		([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
			(
				c ^
				(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
			).toString(16),
		),
	escapeHTML: (str) =>
		str.replace(
			/[&<>'"]/g,
			(tag) =>
				({
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					"'": "&#39;",
					'"': "&quot;",
				}[tag] || tag),
		),
	unescapeHTML: (str) =>
		str.replace(
			/&amp;|&lt;|&gt;|&#39;|&quot;/g,
			(tag) =>
				({
					"&amp;": "&",
					"&lt;": "<",
					"&gt;": ">",
					"&#39;": "'",
					"&quot;": '"',
				}[tag] || tag),
		),
	previousPage: () => document.referrer || window.location.href,
	replaceText: (el, callback) => {
		for (
			var e,
				t = (function () {
					for (var e, t = el, o = [], a = 0; a < t.length; a++)
						(e = t[a].childNodes[0]),
							t[a].hasChildNodes() && 3 == e.nodeType && o.push(e);
					return o;
				})(),
				o = 0,
				a = t.length;
			o < a;
			o++
		)
			(e = t[o].nodeValue), (t[o].nodeValue = callback(e));
	},
	timeFunction: (fn, name = "_ function timer") => {
		console.time(name);
		fn();
		console.timeEnd(name);
	},
	sortObj: (obj) => {
		return Object.keys(obj)
			.sort()
			.reduce(function (result, key) {
				result[key] = obj[key];
				return result;
			}, {});
	},
	widows: (text) => {
		var wordArray = text.split(" ");
		var finalTitle = "";
		for (var i = 0; i <= wordArray.length - 1; i++) {
			finalTitle += wordArray[i];
			if (i == wordArray.length - 2) {
				finalTitle += "&nbsp;";
			} else {
				finalTitle += " ";
			}
		}
		return finalTitle;
	},
	randomColor: () => "#" + Math.floor(Math.random() * 16777215).toString(16),
	lightenColor: (col, amt) => {
		var usePound = false;

		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}

		var num = parseInt(col, 16);

		var r = (num >> 16) + amt;

		if (r > 255) r = 255;
		else if (r < 0) r = 0;

		var b = ((num >> 8) & 0x00ff) + amt;

		if (b > 255) b = 255;
		else if (b < 0) b = 0;

		var g = (num & 0x0000ff) + amt;

		if (g > 255) g = 255;
		else if (g < 0) g = 0;

		return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
	},
	lightOrDark: (color) => {
		var r, g, b, hsp;
		if (color.match(/^rgb/)) {
			color = color.match(
				/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
			);

			r = color[1];
			g = color[2];
			b = color[3];
		} else {
			color = +(
				"0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
			);

			r = color >> 16;
			g = (color >> 8) & 255;
			b = color & 255;
		}

		hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
		if (hsp > 127.5) {
			return { lightordark: "light", hsp: hsp };
		} else {
			return { lightordark: "dark", hsp: hsp };
		}
	},
	compStyle: (el, prop) => {
		var computedstyles = window.getComputedStyle(el);
		return computedstyles.getPropertyValue(prop);
	},
	rgbToHex: (rgb) => {
		let sep = rgb.indexOf(",") > -1 ? "," : " ";
		rgb = rgb.substr(4).split(")")[0].split(sep);

		let r = (+rgb[0]).toString(16),
			g = (+rgb[1]).toString(16),
			b = (+rgb[2]).toString(16);

		if (r.length == 1) r = "0" + r;
		if (g.length == 1) g = "0" + g;
		if (b.length == 1) b = "0" + b;

		return "#" + r + g + b;
	},
	hexToRGB: (hex) => {
		let alpha = false,
			h = hex.slice(hex.startsWith("#") ? 1 : 0);
		if (h.length === 3) h = [...h].map((x) => x + x).join("");
		else if (h.length === 8) alpha = true;
		h = parseInt(h, 16);
		return (
			"rgb" +
			(alpha ? "a" : "") +
			"(" +
			(h >>> (alpha ? 24 : 16)) +
			", " +
			((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
			", " +
			((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
			(alpha ? `, ${h & 0x000000ff}` : "") +
			")"
		);
	},
	querySelector: (elem) => {
		var element = elem;
		var str = "";

		function loop(element) {
			if (
				element.getAttribute("id") &&
				document.querySelectorAll(`#${element.getAttribute("id")}`).length === 1
			) {
				str = str.replace(/^/, " #" + element.getAttribute("id"));
				str = str.replace(/\s/, "");
				str = str.replace(/\s/g, " > ");
				return str;
			}
			if (document.body === element) {
				str = str.replace(/^/, " body");
				str = str.replace(/\s/, "");
				str = str.replace(/\s/g, " > ");
				return str;
			}
			if (element.getAttribute("class")) {
				var elemClasses = ".";
				elemClasses += element.getAttribute("class");
				elemClasses = elemClasses.replace(/\s/g, ".");
				elemClasses = elemClasses.replace(/^/g, " ");
				var classNth = "";
				var childrens = element.parentNode.children;

				if (childrens.length < 2) {
					return;
				}

				var similarClasses = [];

				for (var i = 0; i < childrens.length; i++) {
					if (
						element.getAttribute("class") == childrens[i].getAttribute("class")
					) {
						similarClasses.push(childrens[i]);
					}
				}

				if (similarClasses.length > 1) {
					for (var j = 0; j < similarClasses.length; j++) {
						if (element === similarClasses[j]) {
							j++;
							classNth = ":nth-of-type(" + j + ")";
							break;
						}
					}
				}

				str = str.replace(/^/, elemClasses + classNth);
			} else {
				var name = element.nodeName;
				name = name.toLowerCase();
				var nodeNth = "";

				var childrens = element.parentNode.children;

				if (childrens.length > 2) {
					var similarNodes = [];

					for (var i = 0; i < childrens.length; i++) {
						if (element.nodeName == childrens[i].nodeName) {
							similarNodes.push(childrens[i]);
						}
					}

					if (similarNodes.length > 1) {
						for (var j = 0; j < similarNodes.length; j++) {
							if (element === similarNodes[j]) {
								j++;
								nodeNth = ":nth-of-type(" + j + ")";
								break;
							}
						}
					}
				}

				str = str.replace(/^/, " " + name + nodeNth);
			}

			if (element.parentNode) {
				loop(element.parentNode);
			} else {
				str = str.replace(/\s/g, " > ");
				str = str.replace(/\s/, "");
				return str;
			}
		}

		loop(element);

		return str;
	},
	removeComments: (el) => {
		el.innerHTML = el.innerHTML.replace(
			/<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,
			"",
		);
	},
	random: (min, max, round = true) => {
		if (round) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		} else {
			return Math.random() * (max - min + 1) + min;
		}
	},
	seedRandom: (seed) => {
		var t = (seed += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	},
	flatten: (arr) => arr.reduce((a, c) => a.concat(c), []),
	uniqueArray: (array) => [...new Set(array)],
	formatNumber: (n) => n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"),
	spliceArrayBuffer: (arr, start, end, endian) => {
		endian = endian || false;
		var direction = endian ? -1 : 1;
		if (endian) [start, end] = [end, start];
		start = Math.floor(start);
		end = Math.floor(end) + direction;
		for (var i = start, value = 0; i != end; i += direction)
			value = 256 * value + arr[i];
		return value;
	},
	unCamelCase: function (str) { return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (s) { return s.toUpperCase(); }) }
};
_temp = _temp.sortObj(_temp);
let desc = {
	addStyles:
		"Add the styles in an object to a specified element:\n\n \t_$.addStyles(element, {background: 'red'});\n\n(Changes the background color of the element to red!)",
	arrayToCSV: `Returns a comma seperated list from the specified array. \n\n\t_$.arrayToCSV([['a', 'b'], ['c', 'd']]);//'"a","b"\n"c","d"'\n\nNote that this also escapes characters such as quotes.`,
	averageBy:
		"This returns the average of an array based on the given function, for example:\n\n\t_$.averageBy([1,2,3,4], (val) => val / 2);//Returns the average of each element after each element has been divided by 2.",
	async:
		"Runs the given function in a web worker, returning a promise with the return value. This is useful to prevent the main thread from becoming clogged while trying to compute something.",
	browser:
		"Returns the current browser without sniffing the user-agent string. e.g. 'Chrome'",
	compStyle:
		"Returns an element of the computed style, e.g. \n\n\t_$.compStyle(document.querySelector('h1'), 'background-color'); //Returns the background-color of the first <h1>",
	copy:
		"Copies the text specified to the clipboard, e.g. \n\n\t_$.copy('Hello world');",
	createElement:
		"Returns a DOM element who's outerHTML is the string provided: \n\n\t_$.createElement('<div id=`fun`>Hello</div>);//Returns a DOM element whoose id is 'fun' and whoose innerText is 'Hello'",
	dayName: "Returns the day of the week from a Date object.",
	each:
		"Runs a function with each element of an array: \n\n\t_$.each([1,2,3], (num) => alert(num * 3));//Alerts each number in the array times 3",
	escapeHTML:
		"Returns an escaped version of the HTML string provided: \n\n\t_$.escapeHTML('<script>');//'&lt;script&gt;'",
	formToObject:
		"Converts a form to a javascript object using each element's 'name' attribute as the key and the 'value' attribute as the value.",
	formatMilliseconds:
		"Formats a number of milliseconds into a human-readable duration of time, e.g. \n\n\t_$.formatMilliseconds(600000);//Returns '10 minutes'",
	hexToRGB: "Converts a hex value into an RGB color.",
	inPartialView:
		"Returns whether the specified element is visible at all in the viewport. Usefull for lazy loading images!",
	inView:
		"Returns whether the specified element is completely visible in the viewport.",
	jsonToCsv: "Converts a JSON object to CSV.",
	lightOrDark:
		"Returns an object, the key 'lightordark' returns either 'light' or 'dark' and the key 'hsp' returns the value of the color from 0 (completely dark) to 255 (completely bright).",
	lightenColor:
		"Lightens or darkens a hex color by a certain amount, on a scale rom 0 (completely dark) to 255 (completely bright): \n\n\t_$.lightenColor('#ffffff', -20);//Returns '#ebebeb'.",
	mapObjectKeys:
		"Maps an object's keys recursively: \n\n\t_$.mapObjectKeys({\r\n    key: 'value',\r\n    another: {\r\n        deep: 'thing',\r\n        map: 'another'\r\n    }\r\n}, (key) => key.toUpperCase()); // Transforms every key of the object to uppercase.",
	notify:
		"Notifies the user through a desktop notification. Takes 3 arguments: text, body, icon. Text is the title of the notification, body is the message of it, and icon is the icon displayed next to the notification.",
	onOutsideClick:
		'Returns the callback when a click is called outside the specified element:\r\n\r\n    _$.onoutsideclick(document.querySelector("h1"), () => {alert("You clicked outside the header")}); // Alerts when the user clicks anywhere that is NOT the h1 in question.',
	onScrollStop: "Returns the callback when a user stops scrolling the window. ",
	previousPage: "Returns the url of the previous page that the user visited.",
	primesTo: "Returns an array of all the prime numbers up to the number given.",
	querySelector: "Generates a unique querySelector for the given element.",
	random:
		"Returns a random number between two numbers:\n\n\t_$.random(-10,10,false);//Return a random number between -10 and 10 and DO NOT round it. (True as the last value would round it.)",
	randomColor: "Returns a random hex color.",
	removeComments: "Removes comments from the HTML element specified.",
	replaceText:
		'Replaces the text of the specified element by passing the old value through a function:\r\n\r\n    _$.replaceText(document, (oldtext) => oldtext.replace(" ", "-"));//Replace all spaces in the document with a hyphen.',
	rgbToHex: "Returns the hex code of a given RGB string.",
	seedRandom: "Gives a random number based on a whole number seed.",
	serializeForm: "Convert a form to url queries",
	sortObj: "Returns an alphabetized copy of the object by keys.",
	throttle:
		"Runs the function specified, the second input controls at MAX how much wait there is between the next time it runs:\n\n\t_$.throttle(() => alert('hello'), 10000);\n\nRunning this like any other function will simply just run the function, however if you try to run the throttled function in a setInterval loop or before its timeout ends it will not run.",
	timeFunction:
		"Use console.time to how long the function inputted takes to execute.",
	unescapeHTML: "Unescapes the string of HTML specified.",
	unionArrays:
		"Merges two arrays using union, meaning that any duplicates between the two arrays will be removed.",
	uuid:
		"Generates a unique id, like the uuid npm package.\n\n\tFor example:\n8dfe52e3-7beb-48eb-8282-209ff1c5250f",
	widows:
		"Replaces the last space character between words with '&nbsp;', preventing a single word on a newline.",
	flatten:
		"This takes a 2d array (an array of arrays) and flattens in into a 1d array (a list of items).",
	uniqueArray: "Removes duplicates from an array",
	formatNumber: "Adds commas to large numbers in the right place.",
	spliceArrayBuffer:
		"Splices a number as if it's 8 bits long and converts it to a single number:\n\n\t_$.spliceArrayBuffer([5, 8, 255], 0, 2, true);//16713733",
	unCamelCase: "Un-camelCases a string. Camel case is when a string's case looks like this: camelCase, where the normal version would be Camel Case."
};
_temp.info = (prop) => {
	return desc[prop];
};
const _$ = _temp;
const explosion = _temp;
