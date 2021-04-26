//#region String
/**
 * Compares two strings using the Jaro-Winkler Distance algorithm.
 * @memberOf string
 * @function
 * @example
 * _$.jaroDistance('test', 'tes');//0.9416666666666667
 * @returns {Number} A number representing how similar the two strings are, where 1 is exactly the same and 0 is totally different
 * @param {String} a The first string
 * @param {String} b The second string
 */
export let jaroDistance = function (a, b) {
	let adjustments = {
		A: "E",
		A: "I",
		A: "O",
		A: "U",
		B: "V",
		E: "I",
		E: "O",
		E: "U",
		I: "O",
		I: "U",
		O: "U",
		I: "Y",
		E: "Y",
		C: "G",
		E: "F",
		W: "U",
		W: "V",
		X: "K",
		S: "Z",
		X: "S",
		Q: "C",
		U: "V",
		M: "N",
		L: "I",
		Q: "O",
		P: "R",
		I: "J",
		2: "Z",
		5: "S",
		8: "B",
		1: "I",
		1: "L",
		0: "O",
		0: "Q",
		C: "K",
		G: "J",
		E: " ",
		Y: " ",
		S: " ",
	};
	if (!a || !b) {
		return 0.0;
	}
	a = a.trim().toUpperCase();
	b = b.trim().toUpperCase();
	var a_len = a.length;
	var b_len = b.length;
	var a_flag = [];
	var b_flag = [];
	var search_range = Math.floor(Math.max(a_len, b_len) / 2) - 1;
	var minv = Math.min(a_len, b_len);
	var Num_com = 0;
	var yl1 = b_len - 1;
	for (var i = 0; i < a_len; i++) {
		var lowlim = i >= search_range ? i - search_range : 0;
		var hilim = i + search_range <= yl1 ? i + search_range : yl1;
		for (var j = lowlim; j <= hilim; j++) {
			if (b_flag[j] !== 1 && a[j] === b[i]) {
				a_flag[j] = 1;
				b_flag[i] = 1;
				Num_com++;
				break;
			}
		}
	}
	if (Num_com === 0) {
		return 0.0;
	}
	var k = 0;
	var N_trans = 0;
	for (var i = 0; i < a_len; i++) {
		if (a_flag[i] === 1) {
			var j;
			for (j = k; j < b_len; j++) {
				if (b_flag[j] === 1) {
					k = j + 1;
					break;
				}
			}
			if (a[i] !== b[j]) {
				N_trans++;
			}
		}
	}
	N_trans = Math.floor(N_trans / 2);
	var N_simi = 0;
	var adjwt = adjustments;
	if (minv > Num_com) {
		for (var i = 0; i < a_len; i++) {
			if (!a_flag[i]) {
				for (var j = 0; j < b_len; j++) {
					if (!b_flag[j]) {
						if (adjwt[a[i]] === b[j]) {
							N_simi += 3;
							b_flag[j] = 2;
							break;
						}
					}
				}
			}
		}
	}
	var Num_sim = N_simi / 10.0 + Num_com;
	var weight =
		Num_sim / a_len + Num_sim / b_len + (Num_com - N_trans) / Num_com;
	weight = weight / 3;
	if (weight > 0.7) {
		var j = minv >= 4 ? 4 : minv;
		var i;
		for (i = 0; i < j && a[i] === b[i]; i++) {}
		if (i) {
			weight += i * 0.1 * (1.0 - weight);
		}
		if (minv > 4 && Num_com > i + 1 && 2 * Num_com >= minv + i) {
			weight +=
				(1 - weight) *
				((Num_com - i - 1) / (a_len * b_len - i * 2 + 2));
		}
	}
	return weight;
};
/**
 * Prefixes the given CSS property for the current browser.
 * @memberOf string
 * @function
 * @example
 * document.body.style[_$.prefix("appearance")] = "hidden";//Sets the document body's appearance property to "hidden".
 * @param {String} prop The property to prefix.
 * @returns {String} The prefixed value (camelCased, instead of css-case, so mozAppearance instead of -moz-appearance).
 */
export let prefixCSS = (prop = req("string", "property")) => {
	node();
	const capitalizedProp =
		prop.charAt(0).toUpperCase() + prop.slice(1);
	const prefixes = ["", "webkit", "moz", "ms", "o"];
	const i = prefixes.findIndex(
		(prefix) =>
			typeof document.body.style[
				prefix ? prefix + capitalizedProp : prop
			] !== "undefined",
	);
	return i !== -1
		? i === 0
			? prop
			: prefixes[i] + capitalizedProp
		: null;
};

/**
 * Parses a cookie string into object and value pairs.
 * @memberOf string
 * @function
 * @example
 * _$.parseCookie("foo=bar; something=hello%20world");//Returns {foo: "bar", something: "hello world"};
 * @param {String} str The string to parse.
 */
export let parseCookie = (str = req("string", "cookie string")) =>
	str
		.split(";")
		.map((v) => v.split("="))
		.reduce((acc, v) => {
			acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
				v[1].trim(),
			);
			return acc;
		}, {});
/**
 * Hashes a string using the crypto api. 
 * @memberOf string
 * @function
 * @example
 * _$.hash(
    JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })
  ).then(console.log);
  // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
 * @param {String} val The string to hash
 * @returns {Promise} A promise that resolves into the hashed string.
 */
export let hash = (val = req("string", "input string")) => {
	node();
	return crypto.subtle
		.digest("SHA-256", new TextEncoder("utf-8").encode(val))
		.then((h) => {
			let hexes = [],
				view = new DataView(h);
			for (let i = 0; i < view.byteLength; i += 4)
				hexes.push(
					("00000000" + view.getUint32(i).toString(16)).slice(-8),
				);
			return hexes.join("");
		});
};
/**
 * Lets you use a for loop in template literals.
 * @function
 * @memberOf string
 * @param {Array} arr The array to loop.
 * @param {Function} callback The callback to return strings
 * @example
 * console.log(`Things: ${_$.forTemplateLiteral(["apple", "orange"], (item, i) => {return `an ${item}`})}`)
 * // "Things: an apple an orange
 * @returns {String} String that has been for looped
 */
export let forTemplateLiteral = (
	arr = req("array", "array"),
	callback = req("function", "callback"),
) => {
	return arr.map(callback).join``;
};
/**
 * Maps a string like an array.
 * @memberOf string
 * @function
 * @example
 * _$.mapString("Hello world", (e) => e.toUpperCase());//Returns "HELLO WORLD"
 * @param {String} str The string to map
 * @param {Function} fn The callback function to run to map the string.
 */
export let mapString = (
	str = req("string", "string"),
	fn = req("function", "callback"),
) => Array.prototype.map.call(str, fn).join("");
/**
 * Removes the accents from a string.
 * @memberOf string
 * @function
 * @returns {String} The string without accents.
 * @example
 * console.log(_$.decurr("déjà vu")); // "deja vu"
 * @param {String} str The string to use.
 */
export let deburr = (str = req("string", "string")) =>
	str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/**
 * Removes tags from the HTML string specified.
 * @function
 * @memberOf string
 * @param {String} html The string of HTML to remove tags from.
 * @example
 * console.log(_$.removeTags("<div>Hello</div>")); // "Hello"
 * @returns {String} THe string of HTML without the tags.
 */
export let removeTags = (html = req("string", "html string")) =>
	html.replace(/<[^>]*>/g, "");

/**
 * Speaks the text given.
 * @memberOf string
 * @function
 * @param {String} text The text to split
 * @param {String} [lang=en-US] The language to speak with.
 * @param {Number} [volume=1] The volume
 * @param {String|Number} [voice=1] The voice to use.
 * @param {Number} [pitch=1] The pitch
 * @param {Number} [volume=1] The volume
 * @param {Number} [rate=1] The speed.
 * @example
 * _$.speak("Bijou is awesome!"); // speaks "Bijou is awesome!"
 * @returns {SpeechSynthesisUtterance} The SpeechSynthesisUtterance
 */
export let speak = (
	text = req("string", "text"),
	lang = "en",
	volume = 1,
	voice = 1,
	pitch = 1,
	rate = 1,
) => {
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	let def = voices.filter((c) => c.default);
	msg.voice = voice
		? typeof voice === "number"
			? voices[voice]
			: voice
		: def;
	msg.volume = volume; // From 0 to 1
	msg.rate = rate; // From 0.1 to 10
	msg.pitch = pitch; // From 0 to 2
	msg.text = text;
	msg.lang = lang;
	window.speechSynthesis.speak(msg);
	return msg
};
/**
 * Returns the last space in the string given replaced with "&nbsp;"
 * @function
 * @memberOf string
 * @param {String} text The string to replace
 * @example
 * document.querySelector("h1").innerHTML = _$.widows(document.querySelector("h1").innerHTML);
 * //Replaces the last space in the <h1>'s innerText with "&nbsp;"
 * @returns {String} The replaced string.
 */
export let widows = (text = req("string", "text")) => {
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
};

/**
 * Undoes camelCase.
 * @function
 * @memberOf string
 * @param {String} str The string to unCamelCase.
 * @example
 * console.log(_$.unCamelCase("helloWorld")); // "Hello World"
 * @returns {String} The string of unCamelCased code.
 */
export let unCamelCase = function (str = req("string", "string")) {
	return str
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
		.replace(/^./, function (s) {
			return s.toUpperCase();
		});
};

/**
 * camelCases a string.
 * @function
 * @memberOf string
 * @param {String} str The string of non-camelCased text.
 * @example
 * console.log(_$.camelCase("Hello world")); // "helloWorld"
 * @returns {String} The camelCased string.
 */
export let camelCase = (str = req("string", "string")) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, "");
};
/**
 * Scrambles the order of characters in a string. Thanks to @\Touchcreator for the suggestion for this.
 * @function
 * @memberOf string
 * @param {String} str The string to be scrambled
 * @example
 * console.log(_$.scrambleString("Hello world")); // e.g. "owllH rdloe"
 * @returns {String} The scrambled text.
 */
export let scrambleString = (str = req("string")) => {
	var a = str.split(""),
		n = a.length;

	for (var i = n - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}
	return a.join("");
};
/**
 * Hashes a string to a unique integer (This cannot be decrypted easily).
 * @function
 * @memberOf string
 * @param {String} str The String to hash.
 * @param {Number} [seed=0] The seed of the hash.
 * @example
 * console.log(_$.hashString("Hello world")); // 3494146707865688
 * @returns {Number} The hashed string.
 */
export let hashString = (str = req("string"), seed = 0) => {
	let h1 = 0xdeadbeef ^ seed,
		h2 = 0x41c6ce57 ^ seed;
	for (let i = 0, ch; i < str.length; i++) {
		ch = str.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 =
		Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
		Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 =
		Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
		Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

/**
 * Gets the edit distance between two strings.
 * @function
 * @memberOf string
 * @param {String} a The first string
 * @param {String} b The seconds string
 * @example
 * console.log(_$.editDistance("hello", "Hello")); // 1
 * @returns {Number} The edit distance between two strings
 */
export let editDistance = (
	a = req("string", "string 1"),
	b = req("string", "string 2"),
) => {
	if (a.length == 0) return b.length;
	if (b.length == 0) return a.length;

	var matrix = [];

	// increment along the first column of each row
	var i;
	for (i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}

	// increment each column in the first row
	var j;
	for (j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}

	// Fill in the rest of the matrix
	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) == a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1, // substitution
					Math.min(
						matrix[i][j - 1] + 1, // insertion
						matrix[i - 1][j] + 1,
					),
				); // deletion
			}
		}
	}

	return matrix[b.length][a.length];
};
/**
 * Returns the size of a string in bytes.
 * @function
 * @memberOf string
 * @param {String} str
 * @example
 * console.log(_$.byteSize("Hello world")); 11
 * @returns {Number} The byte size of the string.
 */
export let byteSize = (str = req("string", "string")) =>
	new Blob([str]).size;

/**
 * Finds and replace multiple values with multiple other values.
 * @function
 * @memberOf string
 * @param {String} text The text to operate the replace on.
 * @param {Object} replace The object with find and replace values.
 * @example
 * _$.replaceMultiple("I have a cat, a dog, and a goat.", {dog: "cat", goat: "dog", cat: "goat"});//Returns "I have a goat, a cat and a dog"
 * @returns {String} The replaced string
 */
export let replaceMultiple = (
	text = req("string", "text"),
	replace = req("object", "replace key pairs"),
) => {
	var re = new RegExp(Object.keys(replace).join("|"), "gi");
	text = text.replace(re, function (matched) {
		return mapObj[matched];
	});
	return text;
};
/**
 * Returns the queries from a given url (Or just the current url)
 * @function
 * @memberOf string
 * @param {String} query The url query to get.
 * @param {String} [url=window.location.href] The url to find the query in. (By default this is the current url)
 * @example
 * // If the website adress of the current page was "https://example.com/?q=hello&hello=world"
 * console.log(_$.urlQuery("hello")); // "world"
 * // Or on a custom url:
 * console.log(_$.urlQuery("q", "https://google.com/search?q=something")); // "something"
 * @returns {String} The url query
 */
export let urlQuery = (
	query = req("string", "query"),
	url = window.location.href,
) => {
	query = query.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp(`[?&]${query}(=([^&#]*)|&|#|$)`),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
};

/**
 * Sanitizes an HTML string. It is quite possible that this is not production ready so use with caution. (I did my best though >=( )
 * @function
 * @memberOf string
 * @param {String} html The input string to sanitize.
 * @param {Array} [tags=undefined] The array of tags to allow, there is a default list though.
 * @param {Array} [attributes=undefined] The array of attributes to allow. By default only allows "href" and "src" attributes.
 * @example
 * console.log(_$.sanitizeHTML("<script>alert('hello')></script><b>A normal tag</b>")); // "<b>A normal tag</b>"
 * @returns {String} The sanitized HTML string.
 */
export let sanitize = (
	html = req("string", "input html"),
	tags = undefined,
	attributes = undefined,
) => {
	node();
	var attributes = attributes || [
		{ attribute: "src", tags: "*", regex: /^(?:https|http|\/\/):/ },
		{ attribute: "href", tags: "*", regex: /^(?:https|http|\/\/):/ },
		{ attribute: "width", tags: "*", regex: /^[0-9]+$/ },
		{ attribute: "height", tags: "*", regex: /^[0-9]+$/ },
		{ attribute: "id", tags: "*", regex: /^[a-zA-Z]+$/ },
		{ attribute: "class", tags: "*", regex: /^[a-zA-Z ]+$/ },
		{
			attribute: "value",
			tags: ["INPUT", "TEXTAREA"],
			regex: /^.+$/,
		},
		{
			attribute: "checked",
			tags: ["INPUT"],
			regex: /^(?:true|false)+$/,
		},
		{
			attribute: "placeholder",
			tags: ["INPUT", "TEXTAREA"],
			regex: /^.+$/,
		},
		{
			attribute: "alt",
			tags: ["IMG", "AREA", "INPUT"],
			//"^" and "$" match beggining and end
			regex: /^[0-9a-zA-Z]+$/,
		},
		{
			attribute: "autofocus",
			tags: ["INPUT"],
			regex: /^(?:true|false)+$/,
		},
		{
			attribute: "for",
			tags: ["LABEL", "OUTPUT"],
			regex: /^[a-zA-Z0-9]+$/,
		},
	];
	var tags = tags || [
		"I",
		"P",
		"B",
		"BODY",
		"HTML",
		"DEL",
		"INS",
		"STRONG",
		"SMALL",
		"A",
		"IMG",
		"CITE",
		"FIGCAPTION",
		"ASIDE",
		"ARTICLE",
		"SUMMARY",
		"DETAILS",
		"NAV",
		"TD",
		"TH",
		"TABLE",
		"THEAD",
		"TBODY",
		"NAV",
		"SPAN",
		"BR",
		"CODE",
		"PRE",
		"BLOCKQUOTE",
		"EM",
		"HR",
		"H1",
		"H2",
		"H3",
		"H4",
		"H5",
		"H6",
		"DIV",
		"MAIN",
		"HEADER",
		"FOOTER",
		"SELECT",
		"COL",
		"AREA",
		"ADDRESS",
		"ABBR",
		"BDI",
		"BDO",
	];

	attributes = attributes.map((el) => {
		if (typeof el === "string") {
			return { attribute: el, tags: "*", regex: /^.+$/ };
		}
		let output = el;
		if (!el.hasOwnProperty("tags")) {
			output.tags = "*";
		}
		if (!el.hasOwnProperty("regex")) {
			output.regex = /^.+$/;
		}
		return output;
	});
	var el = new DOMParser().parseFromString(html, "text/html");
	var elements = el.querySelectorAll("*");
	for (let i = 0; i < elements.length; i++) {
		const current = elements[i];
		let attr_list = get_attributes(current);
		for (let j = 0; j < attr_list.length; j++) {
			const attribute = attr_list[j];
			if (!attribute_matches(current, attribute)) {
				current.removeAttribute(attr_list[j]);
			}
		}
		if (!tags.includes(current.tagName)) {
			current.remove();
		}
	}
	return el.documentElement.innerHTML;
	function attribute_matches(element, attribute) {
		let output = attributes.filter((attr) => {
			let returnval =
				attr.attribute === attribute &&
				(attr.tags === "*" || attr.tags.includes(element.tagName)) &&
				attr.regex.test(element.getAttribute(attribute));
			return returnval;
		});

		return output.length > 0;
	}
	function get_attributes(element) {
		for (
			var i = 0, atts = element.attributes, n = atts.length, arr = [];
			i < n;
			i++
		) {
			arr.push(atts[i].nodeName);
		}
		return arr;
	}
};
/**
 * Converts markdown to HTML.
 * @param {String} src The markdown to convert to HTML.
 * @memberOf string
 * @function
 * @example
 * console.log(_$.markdownToHTML("_Italic text_, **bold text**")); // "<em>Italic text</em>, <b>bold text</b>"
 * @returns {String} The string of HTML converted from the markdown input.
 */
export let markdownToHTML = (src = req("string", "input")) => {
	var rx_lt = /</g;
	var rx_gt = />/g;
	var rx_space = /\t|\r|\uf8ff/g;
	var rx_escape = /\\([\\\|`*_{}\[\]()#+\-~])/g;
	var rx_hr = /^([*\-=_] *){3,}$/gm;
	var rx_blockquote = /\n *&gt; *([^]*?)(?=(\n|$){2})/g;
	var rx_list = /\n( *)(?:[*\-+]|((\d+)|([a-z])|[A-Z])[.)]) +([^]*?)(?=(\n|$){2})/g;
	var rx_listjoin = /<\/(ol|ul)>\n\n<\1>/g;
	var rx_highlight = /(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g;
	var rx_code = /\n((```|~~~).*\n?([^]*?)\n?\2|(( {4}.*?\n)+))/g;
	var rx_link = /((!?)\[(.*?)\]\((.*?)( ".*")?\)|\\([\\`*_{}\[\]()#+\-.!~]))/g;
	var rx_table = /\n(( *\|.*?\| *\n)+)/g;
	var rx_thead = /^.*\n( *\|( *\:?-+\:?-+\:? *\|)* *\n|)/;
	var rx_row = /.*\n/g;
	var rx_cell = /\||(.*?[^\\])\|/g;
	var rx_heading = /(?=^|>|\n)([>\s]*?)(#{1,6}) (.*?)( #*)? *(?=\n|$)/g;
	var rx_para = /(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g;
	var rx_stash = /-\d+\uf8ff/g;

	function replace(rex, fn) {
		src = src.replace(rex, fn);
	}

	function element(tag, content) {
		return "<" + tag + ">" + content + "</" + tag + ">";
	}

	function blockquote(src) {
		return src.replace(rx_blockquote, function (all, content) {
			return element(
				"blockquote",
				blockquote(highlight(content.replace(/^ *&gt; */gm, ""))),
			);
		});
	}

	function list(src) {
		return src.replace(
			rx_list,
			function (all, ind, ol, num, low, content) {
				var entry = element(
					"li",
					highlight(
						content
							.split(
								RegExp(
									"\n ?" +
										ind +
										"(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +",
									"g",
								),
							)
							.map(list)
							.join("</li><li>"),
					),
				);

				return (
					"\n" +
					(ol
						? '<ol start="' +
						  (num
								? ol + '">'
								: parseInt(ol, 36) -
								  9 +
								  '" style="list-style-type:' +
								  (low ? "low" : "upp") +
								  'er-alpha">') +
						  entry +
						  "</ol>"
						: element("ul", entry))
				);
			},
		);
	}

	function highlight(src) {
		return src.replace(
			rx_highlight,
			function (all, _, p1, emp, sub, sup, small, big, p2, content) {
				return (
					_ +
					element(
						emp
							? p2
								? "strong"
								: "em"
							: sub
							? p2
								? "s"
								: "sub"
							: sup
							? "sup"
							: small
							? "small"
							: big
							? "big"
							: "code",
						highlight(content),
					)
				);
			},
		);
	}

	function unesc(str) {
		return str.replace(rx_escape, "$1");
	}

	var stash = [];
	var si = 0;

	src = "\n" + src + "\n";

	replace(rx_lt, "&lt;");
	replace(rx_gt, "&gt;");
	replace(rx_space, "  ");

	// blockquote
	src = blockquote(src);

	// horizontal rule
	replace(rx_hr, "<hr/>");

	// list
	src = list(src);
	replace(rx_listjoin, "");

	// code
	replace(rx_code, function (all, p1, p2, p3, p4) {
		stash[--si] = element(
			"pre",
			element("code", p3 || p4.replace(/^ {4}/gm, "")),
		);
		return si + "\uf8ff";
	});

	// link or image
	replace(rx_link, function (all, p1, p2, p3, p4, p5, p6) {
		stash[--si] = p6
			? p6
			: p2
			? p4
				? '<img src="' +
				  _$.escapeHTML(p4) +
				  '" alt="' +
				  _$.escapeHTML(p3) +
				  '"/>'
				: p1
			: /^https?:\/\//g.test(p4)
			? '<a href="' +
			  _$.escapeHTML(p4) +
			  '">' +
			  unesc(highlight(p3)) +
			  "</a>"
			: p1;
		return si + "\uf8ff";
	});

	// table
	replace(rx_table, function (all, table) {
		var sep = table.match(rx_thead)[1];
		return (
			"\n" +
			element(
				"table",
				table.replace(rx_row, function (row, ri) {
					return row == sep
						? ""
						: element(
								"tr",
								row.replace(rx_cell, function (all, cell, ci) {
									return ci
										? element(
												sep && !ri ? "th" : "td",
												unesc(highlight(cell || "")),
										  )
										: "";
								}),
						  );
				}),
			)
		);
	});

	// heading
	replace(rx_heading, function (all, _, p1, p2) {
		return _ + element("h" + p1.length, unesc(highlight(p2)));
	});

	// paragraph
	replace(rx_para, function (all, content) {
		return element("p", unesc(highlight(content)));
	});

	// stash
	replace(rx_stash, function (all) {
		return stash[parseInt(all)];
	});

	return src.trim();
};

/**
 * Counts the syllables in the word given.
 * @memberOf string
 * @function
 * @param {String} word The word to count syllables of
 * @example
 * console.log(_$.syllables("Hello")); // 2
 * @returns {Number} The number of syllables in the specified word.
 */
export let syllables = (word = req("string", "word")) => {
	word = word.toLowerCase();
	var t_some = 0;
	if (word.length > 3) {
		if (word.substring(0, 4) == "some") {
			word = word.replace("some", "");
			t_some++;
		}
	}
	word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, "");
	word = word.replace(/^y/, "");
	var syl = word.match(/[aeiouy]{1,2}/g);
	console.log(syl);
	if (syl) {
		return syl.length + t_some;
	}
};
/**
 * Converts a string to title case
 * @memberOf string
 * @function
 * @param {String} str The string to convert to title case.
 * @example
 * _$.titleCase("hello world");//Returns "Hello World"
 * @returns {String} The string in title case.
 */
export let titleCase = (str = req("string", "string")) =>
	str
		.toLowerCase()
		.split(" ")
		.map((word, index) =>
			[
				"at",
				"by",
				"for",
				"in",
				"of",
				"off",
				"on",
				"out",
				"to",
				"up",
				"as",
				"if",
				"but",
				"per",
				"via",
				"for",
				"and",
				"nor",
				"but",
				"or",
				"yet",
				"so",
				"the",
				"a",
				"an",
			].includes(word) && index != 0
				? word
				: String.fromCodePoint(word.codePointAt(0)).toUpperCase() +
				  word.slice(word.codePointAt(0) > 0xffff ? 2 : 1),
		)
		.join(" ");
/**
 * Capitalizes the first letter of the string
 * @memberOf string
 * @function
 * @param {String} str The string to capitalize.
 * @example
 * console.log(_$.capitalize("hello world")); // "Hello world"
 * @returns {String} The capitalized string.
 */
export let capitalize = (str = req("string", "string")) =>
	String.fromCodePoint(str.codePointAt(0)).toUpperCase() +
	str.slice(str.codePointAt(0) > 0xffff ? 2 : 1);
/**
 * Replaces between two indexes of a string.
 * @memberOf string
 * @function
 * @example
 * console.log(_$.replaceBetween("Hello world", 6, 11, "earthlings")); // "Hello earthlings"
 * @param {String} string The string to operate on.
 * @param {Number} start The start index
 * @param {Number} end The end index
 * @param {String} what What to replace with.
 * @returns {String} The replaced string
 */
export let replaceBetween = (
	string = req("string", "string"),
	start = req("number", "start"),
	end = req("number", "end"),
	what = req("string", "replace with"),
) => string.substring(0, start) + what + string.substring(end);
/**
 * Escapes a string of HTML
 * @function
 * @memberOf string
 * @param {String} str The string of HTML to escape.
 * @example
 * console.log(_$.escapeHTML("<div>")); // "&lt;div&gt;"
 * @returns {String} The escaped HTML.
 */
export let escapeHTML = (str = req("string")) =>
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
	);
/**
 * Unescapes a string of HTML
 * @function
 * @memberOf string
 * @param {String} str The string of HTML to unescape.
 * @example
 * console.log(_$.unescapeHTML("&lt;div&gt;")); // "<div>"
 * @returns {String} The unescaped HTML.
 */
export let unescapeHTML = (str = req("string")) =>
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
	);
/**
 * Returns the previous page that the user visited.
 * @function
 * @memberOf string
 * @example
 * console.log(_$.previousPage()); // e.g. "https://bijou.js.org"
 * @returns {String} The url of the previous page the user visited.
 */
export let previousPage = () => {
	node();
	return document.referrer || window.location.href;
};
//#endregion String
