//#region Utility
/**
 * Creates a MediaStream with all of the tracks passed.
 * @memberof utility
 * @param  {...MediaStreamTrack} tracks A list of the tracks to add to the new media stream.
 * @returns {MediaStream} A MediaStream object which has all of the tracks passed.
 * @example
 * //Combine video from screen share with audio from microphone
 * const audioStream = await navigator.mediaDevices.getUserMedia({audio: true});
 * //Get the audio track, streams can have more than one track.
 * const audioTrack = audioStream.getAudioTracks()[0];
 *
 * //Do the same for video (get from screen share)
 * const videoStream = await navigator.mediaDevices.getDisplayMedia({video: true});
 * const videoTrack = videoStream.getVideoTracks()[0];
 *
 * //   Now use the _$.createStream function to create a new stream with the
 * // audio from the microphone and the video from the screen share.
 * const combinedStream = createStream(audioStream, videoStream);//Order doesn't matter, _$.createStream also accepts an array of streams.
 */
 export let createStream = (...tracks) => {
	if (Array.isArray(arguments[0])) {
		tracks = arguments[0];
		//Also allow [stream1, stream2] etc
	}
	let newStream = new MediaStream();
	tracks.forEach((i) => newStream.addTrack(i));
	return newStream;
};

/**
 * @callback manipulateVideoStreamFunction
 * @param {Object} pixel
 * @param {Number} pixel.red The red value of the pixel (0-255)
 * @param {Number} pixel.green The green value of the pixel (0-255)
 * @param {Number} pixel.blue The blue value of the pixel (0-255)
 * @param {Number} pixel.alpha The alpha value of the pixel (0-255)
 * @returns {{red: number, green: number, blue: number, alpha: number}} Returns an object with red, green, blue and alpha keys.
 * @example
 * //Example function given to _$.manipulate
 * (color) => {
 * 	if (color.green > 200){
 * 		//Simple greenscreen effect
 * 		color.alpha = 0;
 * 	}
 * 	return color;
 * }
 */
/**
 * @memberof utility
 * @param {MediaStreamTrack} videoTrack A video track to manipulate
 * @param {manipulateVideoStreamFunction} fn The function given to manipulate the video stream.
 * @returns {Promise.<MediaStreamTrack>} Returns a promise that resolves into a mediaStream with the original videoStream but manipulated by whatever the fn function returns (see example).
 * @example
 * //Greenscreen effect
 * let video = document.createElement("video");
 * video.setAttribute("autoplay", true);
 * document.body.appendChild(video);
 *
 * //Now the cool part
 * let videotrack = await navigator.mediaDevices.getUserMedia({video: true})
 * 		.then(stream => stream.getVideoTracks()[0]);
 *
 * //    Basically manipulate the video track using canvas, and for every color,
 * // if its green value is above 200 then make that pixel transparent.
 * // Creating a simple greenscreen effect.
 * video.srcObject = _$.createStream(
 * _$.manipulate(videotrack, (color) => {
 *		if (color.green > 200){
 *			//Simple greenscreen effect
 *			color.alpha = 0;
 *		}
 *		return color;
 *	})
 * )
 */
export let manipulate = async (
	videoTrack = req("MediaStreamTrack", "video media stream track"),
	fn,
) => {
	let canvas = document.createElement("canvas");
	let running = true;
	const ctx = canvas.getContext("2d");
	let video = document.createElement("video");
	video.setAttribute("autoplay", true);
	video.setAttribute("muted", true);
	video.srcObject = createStream(videoTrack);
	videoTrack.addEventListener("ended", () => {
		running = false;
	});
	await new Promise((res) => video.addEventListener("play", res));
	function animate() {
		const { width, height } = videoTrack.getSettings();
		Object.assign(canvas, {
			width,
			height,
		});
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		// Recursively loop
		const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const length = frame.data.length;
		let data = frame.data;
		for (let i = 0; i < length; i += 4) {
			let o = fn({
				red: data[i],
				green: data[i + 1],
				blue: data[i + 2],
				alpha: data[i + 3],
			});
			data[i] = o.red;
			data[i + 1] = o.green;
			data[i + 2] = o.blue;
			data[i + 3] = o.alpha;
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.putImageData(frame, 0, 0);
		if (running) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
	//   Return the first video track
	let track = canvas.captureStream(30).getVideoTracks()[0];
	track.addEventListener("ended", () => {
		//   When someone ends the track stop the loop.
		running = false;
	});
	return track;
};

/**
 * preload links when hovering over them, to have no-refresh page navigation
 * @namespace preload
 * @memberof utility
 */
export let preload = {
	/**
	 * Initialises the preloader so that links to the same site always navigate without a page refresh
	 * @function
	 * @returns {undefined}
	 * @example
	 * _$.preload.init()
	 */
	init: () => {
		//Set window.load and window.show so that the child iframe element can access those functions.
		window.load = load;
		window.show = show;
		//Convert all links to preload on hover.
		[...document.querySelectorAll("a")].forEach((a) => {
			a.addEventListener("click", (e) => {
				e.preventDefault();
				show(a.href);
			});
			a.addEventListener("mouseenter", (e) => {
				//you could alter this function so that it would preload if the mouse is close, or if the user has hovered for 200ms or more, but just onmouseenter is enough for this example.
				load(a.href);
			});
		});
	},
	/**
	 * preload a given url
	 * @function
	 * @param {string} page - the url to preload
	 * @returns {Promise} Returns a promise fulfilled once the iframe loads, so that we can await load("page") in show("url") if the page isn't loaded already.
	 */
	load: function load(page) {
		//Return a promise fulfilled once the iframe loads, so that we can await load("page") in show("url") if the page isn't loaded already.
		return new Promise((res) => {
			//If page is external don't load it, history.pushState only works with internal URLs.
			if (!isLocal(page)) return;
			//Don't load it twice.
			if (document.getElementById(id(page))) return;
			//Create an iframe
			var iframe = document.createElement("iframe");
			iframe.src = page;
			//Add it to the document
			document.documentElement.appendChild(iframe);
			//Set a unique ID.
			iframe.id = id(page);
			//And add the preload class so it's easy to remove all iframes.
			iframe.classList.add("preload");
			iframe.onload = res; //Return promise once loaded
			//Make it fill the window, but with display: none
			_$.addStyles(iframe, {
				background: "transparent",
				width: "100vw",
				height: "100vh",
				padding: "0",
				margin: "0",
				display: "none",
				border: "none",
			});
		});
		function id(page) {
			//This function gets a unique id from a page that works with CSS id standards.
			//E.g. "#/page" is not a valid ID.
			return `preload_${hash(page).toString(16)}`;
		}
		function isLocal(page) {
			//Tests if a page is local
			try {
				//If the page doesn't start with "http" or "https" then it's definitely local.
				if (
					!(page.startsWith("http://") || page.startsWith("https://"))
				)
					return true;
				//If it does start with "http" or "https" we need to see if the hostname (domain) is the same as the one of the current page, so we compare the window.location.hostname with that parsed from the input URL.
				return new URL(page).hostname === window.location.hostname;
			} catch (e) {
				//Invalid url maybe?
				// mailto:someone@somewhere.com will cause an error above.
				return false;
			}
		}
		function hash(str, seed = 0) {
			// I could've done without the hash function, but hash functions are cool. So why not.
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
		}
	},
	/**
	 Navigate to the given url without a page refresh
	 @function
	 @param {string} page  - the url to navigate to
	 @returns {undefined}
	*/
	show: async function show(page) {
		if (!isLocal(page)) {
			//Actually navigate to the page if it's not local, e.g. show('https://google.com') would just go to google.com
			window.location.href = page;
			//Stop the rest of the function.
			return;
		}
		//If the page isn't already loaded then load it.
		if (!document.getElementById(id(page))) {
			await _$.preload.load(page);
		}
		//Update URL
		//This step is the reason why this won't work with external URLs.
		history.pushState({}, page, page);
		//If there's current information on the page remove it.
		//This translates into "if (document.body) document.body.remove()" but it's nicer.
		document.body && document.body.remove();
		let ifr = document.getElementById(id(page));
		//Show the iframe.
		ifr.style.display = "block";
		//Get the content document of the iframe
		let doc = ifr.contentDocument;
		//For each element in the iframe make it prevent default on click, and preload on hover.
		Array.from(doc.querySelectorAll("a")).forEach((a) => {
			a.addEventListener("click", (e) => {
				//Prevent default navigation.
				e.preventDefault();
				//Call the parent window (main window's) show function and remove the current iframe
				_$.preload.show.call(window.parent, a.href);
				ifr.remove();
			});
			a.addEventListener("mouseenter", (e) => {
				//Preload the page.
				_$.preload.load.call(window.parent, a.href);
			});
		});
		function id(page) {
			//This function gets a unique id from a page that works with CSS id standards.
			//E.g. "#/page" is not a valid ID.
			return `preload_${hash(page).toString(16)}`;
		}
		function isLocal(page) {
			//Tests if a page is local
			try {
				//If the page doesn't start with "http" or "https" then it's definitely local.
				if (
					!(page.startsWith("http://") || page.startsWith("https://"))
				)
					return true;
				//If it does start with "http" or "https" we need to see if the hostname (domain) is the same as the one of the current page, so we compare the window.location.hostname with that parsed from the input URL.
				return new URL(page).hostname === window.location.hostname;
			} catch (e) {
				//Invalid url maybe?
				// mailto:someone@somewhere.com will cause an error above.
				return false;
			}
		}
		function hash(str, seed = 0) {
			// I could've done without the hash function, but hash functions are cool. So why not.
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
		}
	},
};
/**
 * Creates a template literal tag. Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 * @example
 * let t = tag(_$.escapeHTML);
 * //Notice the "t" at the beginning of the template literal. (t`Some text`).
 * console.log(t`This will not be escaped <i>Italics!</i> ${"But this will, <i>Not italic</i>"}`)
 * @param {Function} k The function to run on new (interpolated) text in the template literal.
 * @param {Function} o The function to run on the normal text in the template literal.
 * @returns {Function} A template literal tagging function, which returns a string.
 * @memberof utility
 */
export let tag = (k = (j) => j, o = (j) => j) => {
	return (old, ...int) => {
		let n = [];
		int.push("");
		for (let i = 0; i < old.length; i++) {
			n.push(o(old[i]), k(int[i]));
		}
		return n.join("");
	};
};
/**
 * Resizes an image from a URL and returns a promise with it's data URL.
 * @memberOf utility
 * @function
 * @param {String} url The URL of the image to resize.
 * @param {Number} [width=Natural width of the image] The target width of the new image
 * @param {Number} [height=Natural width of the image] The target height of the new image
 * @returns {Promise.<string>} A data URL of the resized image.
 */
export let resize = async (
	url = req("string", "html"),
	width,
	height,
) => {
	node();
	url = url.replace(/^(?:http|https)\:\/\//, "");
	let img = new Image();
	img.src = await _$.imageToData(
		"https://cors.explosionscratc.repl.co/" + url,
	);
	await new Promise((res) => (img.onload = res));
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext("2d");
	canvas.width = width || img.width;
	canvas.height = height || img.height;
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	let data = canvas.toDataURL(0, 0, canvas.width, canvas.height);
	return data;
};
/**
 * Converts a string of HTML to an image (!!)
 * @memberOf utility
 * @function
 * @param {String} html The HTML string to transform into an image
 * @param {Object.<string>} [opts={x: 0, y: 0, width: 300, height: 400}] The object with options.
 * @param {Number} [opts.x=0] The x position of the text
 * @param {Number} [opts.y=0] The y position of the text
 * @param {Number} [opts.width=300] The width of the output image.
 * @param {Number} [opts.height=400]  The height of the output image.
 * @returns {Promise.<string>} A promise that resolves into the data URL string of the image.
 */
export let htmlToImage = (
	html = req("string", "html string"),
	{ x = 0, y = 0, width = 300, height = 400 } = {},
) => {
	node();
	let canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	return new Promise((res) => {
		var xml = toXML(html);
		xml = xml.replace(/\#/g, "%23");
		var data = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%">${xml}</foreignObject></svg>`;

		var img = new Image();
		img.onload = function () {
			ctx.drawImage(img, x, y, width, height);
			res(canvas.toDataURL());
		};
		img.src = data;
	});
	function toXML(html) {
		var doc = document.implementation.createHTMLDocument("");
		doc.write(html);
		doc.documentElement.setAttribute(
			"xmlns",
			doc.documentElement.namespaceURI,
		);
		html = new XMLSerializer().serializeToString(doc.body);
		return html;
	}
};

/**
 * Converts a function that returns a promise into a callback based function
 * @param {Function} fn The function to 'callbackify'.
 * @memberOf utility
 * @function
 * @returns {Function} The callback based function.
 * @example
 * let getUUID = _$.callbackify((limit) =>
 *    fetch(
 *        `https://apis.explosionscratc.repl.co/uuid?limit=1${escape(parseInt(limit))}`
 *    ).then(res => res.json()));
 *
 * getUUID(console.log, 500);//Get 500 uuid's from my API and log them to the console.
 */
let callbackify =
	(fn = req("function", "function")) =>
	(callback, ...args) =>
		fn(...args)
			.then(callback)
			.catch(errCallback);
/**
 * Promisifies a function by converting a callback based function to return a promise.
 * (assuming argIndex = -1)
 * @param {Function} fn The function to run.
 * @param {Number} [argIndex=0] The index of the argument that is the callback returned by the function.
 * @returns {Function} The function promisified (now returns a promise).
 * @memberOf utility
 * @function
 * @example
 * let time = _$.promisify(setTimeout);
 * (async () => {
 * 	await time(2000);
 * 	console.log("It's been 2 seconds.")
 * })();
 */
let promisify = (fn = req("function"), argIndex = 0) => {
	return (...args) =>
		new Promise((resolve, reject) => {
			try {
				args.splice(argIndex, 0, resolve);
				fn(...args);
			} catch (e) {
				reject(e);
			}
		});
};
/**
 * Times out a promise after a specified number of milliseconds.
 * @memberOf utility
 * @function
 * @returns {Promise} The promise that was inputted, but will time out after a specified time.
 * @example
 * //Attempts to fetch the date from jsontest.com, if the request is still pending after 2000 milliseconds cancel it and throw an error.
 * let fetch_stuff = fetch("http://date.jsontest.com/");
 * _$.race(fetch_stuff, 2000).then((res) => res.json()).then(console.log).catch(console.error)
 * @example
 * //Load my popup library, then prompt using it and after 4 seconds close and remove the popup.
 * (async () => {
 *  //Load the script, but check for duplicates! ;)
 * 	await _$.loadScript("https://cdn.jsdelivr.net/gh/explosion-scratch/popup/popup.js", {}, true);
 * 	_$.race(prompt("Enter something in the next 4 seconds!"), 4000).then(console.log).catch(() => {
 * 		document.querySelector("#popup").remove();
 * 		document.querySelector("#popup-bg").remove();
 * 		console.log("User could not type fast enough -__-")
 * 	})
 * });
 * @param {Function} fn The function to run that should return a promise, or the promise itself.
 * @param {Number} timeout The timeout to cancel after.
 * @param {Function} calcelCb The callback to run when cancelled, defaults to throwing an error.
 */
export let race = (
	fn = req("function"),
	timeout = req("number", "timeout"),
	cancelCb = undefined,
) => {
	return Promise.race([
		typeof fn === "function" ? fn() : fn,
		new Promise((_, reject) =>
			setTimeout(
				() =>
					cancelCb
						? cancelCb
						: reject(
								new Error(
									"Promise timed out (Bijou.js _$.race function)",
								),
						  ),
				timeout,
			),
		),
	]);
};
/**
 * Gets the type of something. This is more specific than the 'typeof' operator.
 * @memberof utility
 * @function
 * @example
 * _$.typeof("This is a string");//"String"
 * typeof "This is a string";//Also string
 * @example
 * _$.typeof(/^[regex]$/i);//"RegExp".
 * typeof /^[regex]$/i;//"object"
 * @example
 * _$.typeof(new Date());//"Date"
 * typeof new Date();//Object -__-
 * @param {*} e The thing to get the type of.
 * @param {Boolean} lowerCase Whether to return the string lowercased or not.
 */
export let typeOf = (e = req("any", "any"), lowerCase = true) =>
	lowerCase
		? Object.prototype.toString
				.call(e)
				.split(" ")[1]
				.replace(/]$/, "")
				.toLowerCase()
		: Object.prototype.toString
				.call(e)
				.split(" ")[1]
				.replace(/]$/, "");
/**
 * Injects CSS into the document head.
 * @memberOf utility
 * @function
 * @example
 * //Makes the body's background a dark charcoal color.
 * _$.injectCSS("body {background: #101010; color: white;}");
 * @example
 * //Set the text color to an appropriate color depending on the background color of the document body:
 * if (_$.lightOrDark(_$.compStyle(document.body, "background-color")).lightOrDark === "light"){
 *    _$.injectCSS(`
 *      body {
 *        color: ${_$.lightenColor(_$.rgbToHex(_$.compStyle(document.body, "background-color")), -100)};
 *      }
 *    `)
 * } else {
 *    _$.injectCSS(`
 *      body {
 *        color: ${_$.lightenColor(_$.rgbToHex(_$.compStyle(document.body, "background-color")), 100)};
 *      }
 *    `)
 * }
 * @returns {HTMLElement} The CSS <style> element.
 * @param {String} css The CSS to inject.
 */
export let injectCSS = (css = req("string", "css")) => {
	node();
	let el = document.createElement("style");
	el.setAttribute("type", "text/css");
	el.innerText = css;
	document.head.appendChild(el);
	return el;
};
/**
 * Returns either "mobile" or "desktop" depending on which type of device the user is using.
 * @function
 * @memberOf utility
 * @param
 * @returns {String} Either "mobile" or "desktop" depending on which type of device the user is using.
 * @example
 * console.log(_$.mobileOrDesktop()); // e.g. "desktop"
 */
export let mobileOrDesktop = () => {
	node();
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent,
	)
		? "mobile"
		: "desktop";
};
/**
 * Plays a section of an audio file.
 * @param {HTMLMediaElement} audioObj The audio object to play. (Needs to be created from "new Audio()")
 * @param {Number} start The time to start playing.
 * @param {Number} stop The time to stop playing.
 * @memberOf utility
 * @function
 * @example
 * _$.playSection(new Audio("file.mp3"), 5, 20.5); // Plays file.mp3, starting with second 5 and ending at 20.5 seconds into the file.
 * @returns {Audio} The audio object first passed.
 */
export let playSection = (
	audioObj = req("HTMLMediaElement", "audio"),
	start = req("number", "start"),
	stop = req("number", "stop"),
) => {
	let audioObjNew = audioObj.cloneNode(true); //this is to prevent "play() request was interrupted" error.
	audioObjNew.currentTime = start;
	audioObjNew.play();
	audioObjNew.int = setInterval(function () {
		if (audioObjNew.currentTime > stop) {
			audioObjNew.pause();
			clearInterval(audioObjNew.int);
		}
	}, 10);
	return audioObjNew;
};
/**
 * Formats a string of HTML using indents. Note that this does not format CSS or JS in the HTML.
 * @memberOf utility
 * @function
 * @param {String} html The string of HTML to format.
 * @example
 * console.log(_$.formatHTML("<h1>moo</h1><div id="hi">hello <span>world</span></div>"));
 * Logs the following to the console:
 * ```
   <h1>moo</h1>
   <div id='hi'>hello <span>world</span>
   </div>
   ```
 * @returns {String} The formatted string of HTML.
 */
export let formatHTML = (html = req("string", "html")) => {
	var tab = "\t";
	var result = "";
	var indent = "";

	html.split(/>\s*</).forEach(function (element) {
		if (element.match(/^\/\w/)) {
			indent = indent.substring(tab.length);
		}

		result += indent + "<" + element + ">\r\n";

		if (
			element.match(/^<?\w[^>]*[^\/]$/) &&
			!element.startsWith("input")
		) {
			indent += tab;
		}
	});

	return result.substring(1, result.length - 3);
};
/**
 * Gets JSON from a URL and performs a callback with it.
 * @function
 * @memberOf utility
 * @param {String} url The url of the JSON to be fetched.
 * @param {Function} callback The function to be run with the JSON code.
 * @example
 * _$.getJSON("http://date.jsontest.com/", (json) => {alert("The current time is " + json.time)})
 * @returns {Promise} A promise resolved when the JSON is fetched and parsed.
 */
export let getJSON = (
	url = req("string", "url"),
	callback = () => {},
) => {
	node();
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				callback(json);
				resolve(json);
			})
			.catch((error) => {
				reject(error);
				throw new Error(error.stack);
			});
	});
};
/**
 * Gets HTML from a URL and performs a callback with it.
 * @function
 * @memberOf utility
 * @param {String} url The url of the HTML to be fetched.
 * @param {Function} callback The function to be run with the HTML code.
 * @example
 * // Logs the HTML of wikipedia.org to the console.
 * _$.getHTML("https://wikipedia.org", (html) => console.log(html));
 * @returns {Promise} A promise resolved when the HTML is fetched and parsed.
 */
export let getHTML = (
	url = req("string", "url"),
	callback = () => {},
) => {
	node();
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((res) => res.text())
			.then((html) => {
				callback(_$.parseHTML(html));
				resolve(_$.parseHTML(html));
			})
			.catch((error) => {
				reject(error.stack);
				throw new Error(error.stack);
			});
	});
};

/**
 * Preloads all of the image urls given in the arguments
 * @function
 * @memberOf utility
 * @param {...String} urls The urls of the images to be preloaded.
 * @example
 * _$.preloadImage("https://unsplash.com/some_huge_image.png"); // Preloads the unsplash image "some_huge_image.png" :P
 * @returns {Array.<Image>} An array of all the Image elements created to preload.
 */
export let preloadImage = (...urls) => {
	req("string", "url arguments", ![...urls].length);
	let images = [];
	for (var i = 0; i < urls.length; i++) {
		images[i] = new Image();
		images[i].src = urls[i];
	}
	return images;
};

/**
 * Saves a blob as a file!
 * @function
 * @memberOf utility
 * @param {Blob} blob The blob to save as a file.
 * @param {String} [fileName=output.txt] The name of the output file (Must include the extension.)
 * @example
 * _$.saveBlob(new Blob(["Yay! I'm in a text file!"]), "Cool file.txt");
 * @returns {Blob} The blob saved.
 */
export let saveBlob = (
	blob = req("blob", "blob"),
	fileName = "output.txt",
) => {
	node();
	var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";

	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(url);
	return blob;
};

/**
 * Works exactly like setInterval but instead uses requestAnimationFrame.
 * @memberOf utility
 * @function
 * @param {Function} fn The function to run repeatedly every delay seconds.
 * @param {Number} delay The delay time in milliseconds to run the function.
 * @returns {Object}
 */
export let requestInterval = function (
	fn = req("function", "function"),
	delay = req("number", "delay"),
) {
	node();
	var requestAnimFrame = (function () {
			return (
				window.requestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				}
			);
		})(),
		start = new Date().getTime(),
		handle = {};
	function loop() {
		handle.value = requestAnimFrame(loop);
		var current = new Date().getTime(),
			delta = current - start;
		if (delta >= delay) {
			fn.call();
			start = new Date().getTime();
		}
	}
	handle.value = requestAnimFrame(loop);
	return handle;
};

/**
 * Loads a script from a url (Can be to a local file or to a url) then runs a callback once it's loaded.
 * @memberOf utility
 * @function
 * @param {String} url The url to load the script from.
 * @param {Function} callback The callback to run when the script is loaded.
 * @example
 * _$.("script.js", ()=>alert("Script loaded!"));//Loads the script from the "script.js" file
 * @returns {Promise} A promise resolved once the script is loaded.
 */
export let loadScript = (
	url = req("string", "url"),
	callback = () => {},
	options = {},
	dupeCheck = false,
) => {
	node();
	if (dupeCheck) {
		if (document.querySelector(`script[src="${url}"]`)) {
			return;
		}
	}
	return new Promise((resolve, reject) => {
		var script = document.createElement("script");
		script.type = "text/javascript";
		let keys = Object.keys(options);
		_$.each(keys, (key) => {
			script.setAttribute(key, options[key]);
		});
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (
					script.readyState === "loaded" ||
					script.readyState === "complete"
				) {
					script.onreadystatechange = null;
					callback();
					resolve();
				}
			};
		} else {
			script.onload = function () {
				callback();
				resolve();
			};
		}

		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	});
};

/**
 * Fetches an image and runs the callback with the data url of the image.
 * @memberOf utility
 * @function
 * @param {String} url The url of the image to load.
 * @param {Function} callback The callback function.
 * @example
 * //Replaces every image's url with its respective data url.
 * _$.each(document.querySelectorAll('img'), (img) => {
 *   _$.imageToData(img.src, (data) => {
 *    img.src = data;
 *  })
 * })
 * @returns {Promise} A promise fulfulled when the image is loaded.
 */
export let imageToData = async (
	url = req("string", "url"),
	callback = () => {},
) => {
	node();
	return new Promise(async (res, reject) => {
		let blob = await fetch(url).then((r) => r.blob());
		let dataUrl = await new Promise((resolve) => {
			let reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.readAsDataURL(blob);
		});
		callback(dataUrl);
		res(dataUrl);
	});
};
/**
 * A set of functions to set and modify cookies.
 * @memberOf utility
 * @namespace cookies
 * @example
 * _$.cookies.setItem("a_cookie", "Hello world!", 1); // Set a_cookie to "Hello world" and have it expire in a day.
 * @returns {Function} The function that the user wanted
 */
export let cookies = {
	/**
	 * Sets a cookie to a value
	 * @function
	 * @param {String} name The name of the cookie to set
	 * @param {String} value The value of the cookie
	 * @param {Number} [days=1000] The days that the cookie should last.
	 * @returns {String} The value of the cookie
	 */
	setItem: (
		name = req("string", "name"),
		value = req("string", "value"),
		days = 1000,
	) => {
		node();
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie =
			name + "=" + (value || "") + expires + "; path=/";
	},
	/**
	 * Gets a cookie from its name.
	 * @function
	 * @param {String} name The name of the cookie.
	 * @returns {String} The value of the cookie
	 */
	getItem: (name = req("string", "name")) => {
		node();

		var nameEQ = name + "=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0)
				return c.substring(nameEQ.length, c.length);
		}
		return null;
	},
	/**
	 * Deletes a cookie
	 * @param {String} name The name of the cookie to delete.
	 * @returns {String} The new document.cookie
	 */
	removeItem: (name = req("string", "name")) => {
		node();

		document.cookie =
			name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		return document.cookie;
	},
};
/**
 * A collection of regular expressions to validate and get common things from a page
 * @memberOf utility
 * @namespace regex
 * @example
 * if (_$.regex.email.test("email@gmail.com") alert("That is a valid email!")
 * @returns {Regexp} A regex
 */
export let regex = {
	/**
	 * Valid formats:
	 * (123) 456-7890
	 * (123)456-7890
	 * 123-456-7890
	 * 123.456.7890
	 * 1234567890
	 * +31636363634
	 * 075-63546725
	 * @type {RegExp}
	 */
	phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
	/** Validates names, examples:
	 * John Smith
	 * John D'Largy
	 * John Doe-Smith
	 * John Doe Smith
	 * Hector Sausage-Hausen
	 * Mathias d'Arras
	 * Martin Luther King
	 * Ai Wong
	 * Chao Chang
	 * Alzbeta Bara
	 * @type {RegExp}
	 */
	name: /^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,
	/**
	 * Validates email addresses
	 * @type {RegExp}
	 */
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	/** Validates a link
	 * @type {RegExp}
	 */
	link: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,
	/**
	 * Tests for a strong password.
	 * Should have:
	 * 1 lowercase letter
	 * 1 uppercase letter
	 * 1 number
	 * 1 special character
	 * At least 8 characters long
	 * @type {RegExp}
	 */
	strongPassword:
		/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
	/**
	 * Tests for a moderate password.
	 * Should have:
	 * 1 lowercase letter
	 * 1 uppercase letter
	 * 1 number
	 * At least 8 characters long
	 * @type {RegExp}
	 */
	moderatePassword:
		/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
	// Ip addresses
	/** Match IPv4 address
	 * @type {RegExp}
	 */
	ipv4: /^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,
	/** Match IPv6 address
	 * @type {RegExp}
	 */
	ipv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
	/**Both ipv4 and ipv6
	 * @type {RegExp}
	 */
	ip: / ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,
	/**Social security number
	 * @type {RegExp}
	 */
	socialSecurity:
		/^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,
	/**Hex color
	 * @type {RegExp}
	 */
	hex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
	/** Zip code
	 * @type {RegExp}
	 */
	zipCode:
		/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
	/**Phone
	 * @type {RegExp}
	 */
	simplePhone: /^\+?[\d\s]{3,}$/,
	// Credit cards
	/** Visa credit card
	 * @type {RegExp}
	 */
	visaCredit: /^4[0–9]{12}(?:[0–9]{3})?$/,
	/** Express credit card
	 * @type {RegExp}
	 */
	expressCredit: /^3[47][0–9]{13}$/,
	/** Mastercard credit card
	 * @type {RegExp}
	 */
	mastercardCredit:
		/^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,
	/** Discover credit card
	 * @type {RegExp}
	 */
	discoverCredit: /^6(?:011|5[0–9]{2})[0–9]{12}$/,
};
/**
   * Converts JSON to a CSV string
   * @function
   * @memberOf utility
   * @param {Array} arr The array of objects to convert to CSV.
   * @param {Array} columns The columns to use.
   * @param {String} [delimiter=","] The delimiter between cells, by default this is a comma.
   * @example
   * _$.jsonToCsv(
    [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
    ['a', 'b']
  );
  * //
   a,b
  "1","2"
  "3","4"
  "6",""
  "","7"
   * @returns {String} The string of comma separated values (CSV) created from the JSON.
   */
export let jsonToCsv = (
	arr = req("array", "array"),
	columns = req("number", "columns"),
	delimiter = ",",
) =>
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
	].join("\n");
/**
 * Converts an array to CSV (Comma separated values) data.
 * @function
 * @memberOf utility
 * @param {Array} arr The array to convert.
 * @param {String} [delimiter=,] The separator (By default this is a comma.)
 * @example
 * console.log(_$.arrayToCSV([1,2,3,4])); // "1,2,3,4"
 * @returns {String} The comma separated array.
 */
export let arrayToCSV = (
	arr = req("array", "array"),
	delimiter = ",",
) =>
	arr
		.map((v) =>
			v
				.map((x) => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x))
				.join(delimiter),
		)
		.join("\n");

/**
 * Displays a desktop notification with the specified text.
 * @function
 * @memberOf utility
 * @param {String} title The title of the notification.
 * @param {String} body The body of the notification.
 * @param {String} icon The url to the image for the icon of the notification.
 * @example
 * _$.notify("Hello", "Hi there! This is a notification!"); Notifies the user with the title "Hello" and the body text "Hi there! This is a notification!"
 * @returns {Promise} A promise that fulfills once the notification is sent, and is rejected when there is an error
 */
export let notify = async (
	title = req("string", "text"),
	body = req("string", "body"),
	icon = undefined,
) => {
	node();
	if (!window.Notification) {
		throw new Error("browser does not support notifications.");
	} else {
		if (Notification.permission === "granted") {
			var notify = new Notification(title, {
				body: body,
				icon: icon,
			});
			return;
		} else {
			// request permission from user
			Notification.requestPermission()
				.then(function (p) {
					if (p === "granted") {
						// show notification here
						var notify = new Notification(title, {
							body: body,
							icon: icon,
						});
						return;
					} else {
						throw new Error("User blocked notifications");
					}
				})
				.catch(function (err) {
					throw err;
				});
		}
	}
};
/**
 * Copies the string inputted to the clipboard.
 * @function
 * @memberOf utility
 * @param {String} str The string to copy.
 * @example
 * _$.copy("Hello world");
 * @returns {String} The string copied.
 */
export let copy = (str = req("string", "string")) => {
	node();
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
	return str;
};
/**
 * Returns the browser that the user is using.
 * @function
 * @memberOf utility
 * @example
 * _$.browser(); // For me this (correctly) returns "Chrome"
 * @returns {String} A string of the browser name that the user is using.
 */
export let browser = () => {
	node();
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
				(typeof safari !== "undefined" &&
					window["safari"].pushNotification),
		);
	var isIE = /*@cc_on!@*/ false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;
	var isChrome =
		!!window.chrome &&
		(!!window.chrome.webstore || !!window.chrome.runtime);
	var isEdgeChromium =
		isChrome && navigator.userAgent.indexOf("Edg") != -1;
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
};
/**
 * Converts a form to URL queries using the name attribute.
 * @function
 * @memberOf utility
 * @param {HTMLFormElement} form The form element.
 * @returns {String} The string of url queries (Excluding the hostname and path) of the form data.
 */
export let serializeForm = (
	form = req("HTMLFormElement", "form"),
) => {
	node();
	return Array.from(new FormData(form), (field) =>
		field.map(encodeURIComponent).join("="),
	).join("&");
};

/**
 * Request a URL and get the data back in a specific format.
 * @param {Object} options The options object
 * @param {String} options.url The URL to fetch
 * @param {Object|String|FormData} options.body The body of the request
 * @param {String|Array.<String>} [options.as="response"] What to fetch the data as. A string that is one of ["response", "blob", "json", "dataurl", "text", "image", "html", "bloburl", "headers"], or an Array of multiple. If an array (e.g. ["text", "json"]) an object with {text: "{'some': 'json'}", json: {some: "json"}} will be returned
 * @param {String} [options.method="GET"] One of ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"]
 * @param {Object} [options.options={}] An options object that is passed to fetch(url, options).
 * @param {Object} [options.headers={}] Headers object to add to the request before sent
 * @param {Object|String} [options.type="json"]  The type of the request payload. One of ["JSON", "urlencoded", "text", "formdata"] (not case sensitive). For urlencoded or JSON, pass an object as options.body, for text, pass a string, for formdata pass a FormData object, and for raw, pass anything. This is then added into fetch(url, {body: body})
 * @param {Boolean} [options.corsFallback=true] Whether to retry the request via a cors proxy if it fails
 * @param {String} [options.corsDomain='https://cors.explosionscratc.repl.co/'] The cors domain to use as a proxy
 * @param {Function} [options.detectCors = ({response, error}) => error || !response.ok] Passed a response or an error. If this function returns true the request will be retried with the CORS domain proxy (up to once)
 * @param {Function} [options.makeCorsUrl = (url, domain) => `${domain}${url.split("//")[1]}`] The function which takes a URL and domain as an input and returns the altered URL to be retried with CORS. For example makeCors("https://google.com", "https://cors.explosionscratc.repl.co/") would return "https://cors.explosionscratc.repl.co/google.com"
 * @param {Number} [options.timeout=null] The timeout (in ms) before cancelling the request. If null than there will be no timeout handling.
 * @example
 * let response = await _$.request({
 * 	url: "https://google.com", 
 * 	as: ["html", "bloburl"], 
 * 	timeout: 1000
 * })
 * // → {html: #document, bloburl: "blob:https://github.com/abc-def-ghi"}
 * 
 * @returns
 */
export let request = ({
	url = req("URL to fetch", "options.url"),
	body,
	as = "response",
	method = "GET",
	options = {},
	authorization = {},
	headers = {},
	type = "json",
	corsFallback = true,
	corsDomain = "https://cors.explosionscratc.repl.co/",
	//Given a response or an error.
	detectCors = ({ response, error }) => error || !response.ok,
	makeCorsUrl = (url, domain) => `${domain}${url.split("//")[1]}`,
	timeout = null,
}) => {
	node();
	return new Promise(async (resolve, reject) => {
		let controller = new AbortController();
		let OPTS = {
			method: method.trim().toUpperCase(),
			signal: controller.signal,
			headers: {
				...headers,
			},
			...options,
		};

		if (authorization && authorization.type) {
			authorization.type = `${authorization.type[0].toUpperCase()}${authorization.type
				.slice(1)
				.toLowerCase()}`;
			if (
				!["Basic", "Bearer", "Other"].includes(authorization.type)
			) {
				return err({
					type: "auth_type_not_supported",
					message: `The authorization type ${authorization.type} is not supported.`,
					supportedTypes: ["Basic", "Bearer", "Other"],
				});
			} else if (authorization.type === "Basic") {
				if (
					!(authorization.username && authorization.password) &&
					!authorization.data
				) {
					return err({
						type: "missing_param",
						message:
							"Basic authorization requires a username and password, or a data field.",
						examples: [
							{
								type: "basic",
								username: "johndoe",
								password: "password123",
							},
							{ type: "basic", data: "am9obmRvZTpwYXNzd29yZDEyMw==" },
						],
					});
				}
				OPTS.headers.Authorization = `Basic ${atob(
					`${authorization.username}:${authorization.password}`,
				)}`;
			} else if (authorization.type === "Bearer") {
				if (!authorization.token) {
					return err({
						type: "no_token",
						message: "No token for Bearer auth given",
						examples: [
							{ type: "bearer", token: "supersecretapitoken123" },
						],
					});
				}
				OPTS.headers.Authorization = `Bearer ${authorization.token}`;
			} else if (authorization.type === "Other") {
				if (!authorization.data) {
					return err({
						type: "missing_param",
						message:
							"Missing options.authorization.data for auth type 'Other'",
						examples: [
							{
								type: "other",
								data: "Digest 12409f873e141466c741ab81bf3f1ca6a69f4421d06af0ebb7106721c65a4aa4",
							},
						],
					});
				}
				OPTS.headers.Authorization = authorization.data;
			}
		}

		method = method.trim().toUpperCase();
		if (
			![
				"GET",
				"HEAD",
				"POST",
				"PUT",
				"DELETE",
				"CONNECT",
				"OPTIONS",
				"TRACE",
				"PATCH",
			].includes(method)
		) {
			return err({
				type: "invalid_method",
				message: `The method ${method} isn't supported.`,
				supportedMethods: [
					"GET",
					"HEAD",
					"POST",
					"PUT",
					"DELETE",
					"CONNECT",
					"OPTIONS",
					"TRACE",
					"PATCH",
				],
			});
		}
		if (method !== "GET") {
			type = type.toLowerCase().trim();
			if (
				!["json", "urlencoded", "text", "formdata"].includes(type)
			) {
				return err({
					type: "body_type_not_supported",
					message: `The type ${type} isn't supported`,
					supportedTypes: ["json", "urlencoded", "text", "formdata"],
					examples: [
						{ type: "json", body: { cool: "object" } },
						{ type: "text", body: "Random text" },
					],
				});
			} else if (!body) {
				req("Object|String|FormData", "options.body")
				return err({
					type: "no_body",
					message:
						"Request body not provided, use options.body to provide it",
					examples: [
						{
							type: "json",
							body: { key1: "Object key #1", key2: "Object key #2" },
						},
					],
				});
			} else if (type === "json") {
				OPTS.headers["Content-Type"] = "application/json";
				OPTS.body = JSON.stringify(body);
			} else if (type === "urlencoded") {
				OPTS.headers["Content-Type"] =
					"application/x-www-form-urlencoded";
				OPTS.body = new URLSearchParams(body);
			} else if (type === "text") {
				OPTS.headers["Content-Type"] = "text/plain";
				OPTS.body = body;
			} else if (type === "formdata" || type === "raw") {
				if (type === "formdata" && !(body instanceof FormData)) {
					window.temp1 = body;
					return err({
						type: "expected_formdata",
						message: `Expected body to be instanceof FormData. typeof body === ${typeof body}. Stored body as a temp global variable, window.temp1`,
					});
				}
				OPTS.body = body;
			}
		}

		if (timeout !== null) {
			Promise.race([
				new Promise((_, r) =>
					setTimeout(
						() => controller.abort() && r("REQUEST ABORTED"),
						timeout,
					),
				),
				corsFetch(url, OPTS, err),
			])
				.catch((e) => {
					if (e === "REQUEST ABORTED") {
						return err({
							type: "timed_out",
							message: `Request timed out [${timeout}ms timeout]`,
						});
					} else {
						return err({
							type: "fetch_error",
							message: e.message,
							error: e,
						});
					}
				})
				.then((response) => {
					if (response instanceof Response) {
						gotResponse(response);
					} else {
						return err({
							type: "response_not_recognized",
							message: "Response not instanceof Response",
							typeofResponse: typeof response,
							response: response,
						});
					}
				});
		} else {
			gotResponse(
				await corsFetch(url, OPTS, reject).catch((e) => {
					return err({
						type: "fetch_error",
						message: e.message,
						error: e,
					});
				}),
			);
		}

		async function gotResponse(response) {
			if (Array.isArray(as)) {
				as = as.map((i) => i.toLowerCase());
				//Make {text: "{}", json: {}, blob: Blob([...])}
				resolve(
					Object.fromEntries(
						(
							await Promise.all(as.map((i) => r(response.clone(), i)))
						).map((i, idx) => [as[idx], i]),
					),
				);
			} else {
				resolve(await r(response.clone(), as));
			}
			async function r(res, as) {
				if (as === "response") {
					return res.clone();
				} else if (as === "blob") {
					return await res.blob();
				} else if (as === "json") {
					let j;
					try {
						return await res.json();
					} catch (_) {
						return err({
							type: "invalid_json",
							message: "Couldn't parse JSON",
							response: res.clone(),
						});
					}
				} else if (as === "dataurl") {
					return toData(await res.blob());
					function toData(blob) {
						return new Promise((callback) => {
							var a = new FileReader();
							a.onload = function (e) {
								callback(e.target.result);
							};
							a.readAsDataURL(blob);
						});
					}
				} else if (as === "text") {
					return await res.text();
				} else if (as === "arraybuffer") {
					return await res.arrayBuffer();
				} else if (as === "html") {
					return new DOMParser().parseFromString(
						await res.text(),
						"text/html",
					);
				} else if (as === "image") {
					let img = new Image();
					img.src = toData(await res.blob());
					await new Promise((a) => (i.onload = a));
					return img;
				} else if (as === "bloburl") {
					return URL.createObjectURL(await res.blob());
				} else if (as === "headers") {
					return Object.fromEntries(res.headers.entries());
				}
				function toData(blob) {
					return new Promise((callback) => {
						var a = new FileReader();
						a.onload = function (e) {
							callback(e.target.result);
						};
						a.readAsDataURL(blob);
					});
				}
			}
		}
		function err(e) {
			if (
				e.type === "fetch_error" &&
				e.message === "The user aborted a request." &&
				timeout
			) {
				return reject({
					type: "timed_out",
					message: `Request timed out [${timeout}ms timeout]`,
				});
			}
			reject(e);
		}

		function corsFetch(url, OPTS, reject, _retried = false) {
			return new Promise((r, rej) => {
				fetch(url, OPTS, reject)
					.then(async (response) => {
						if (detectCors({ response: response.clone() })) {
							r(
								await corsFetch(
									makeCorsUrl(url, corsDomain),
									OPTS,
									reject,
									true,
								),
							);
						} else {
							r(response.clone());
						}
					})
					.catch(async (e) => {
						//console.debug(`[cors retried request] Handled error %o`, e)
						if (e.message !== "Failed to fetch") {
							return reject({
								type: "fetch_error",
								message: e.message,
								error: e,
							});
						}
						if (_retried) {
							reject({
								type: "cors_rejected",
								message:
									"Retried request with cors proxy and it still failed",
							});
						} else {
							if (detectCors({ error: e })) {
								r(
									await corsFetch(
										makeCorsUrl(url, corsDomain),
										OPTS,
										reject,
										true,
									),
								);
							}
						}
					});
			}).catch(reject);
		}
	});
};
/**
 * An implementation of the soundex algorithm in JavaScript, used to test if two words sound the same.
 * @returns {String} The soundex of the given string
 * @param {String} s The word to get the soundex of.
 * @example
 * _$.soundex("ekxplohsin");//"E214"
 * _$.soundex("explosion");//"E214"
 * @memberOf utility
 * @function
 */
export let soundex = (s = req("string", "word")) => {
	var a = s.toLowerCase().split(""),
		f = a.shift(),
		r = "",
		codes = {
			a: "",
			e: "",
			i: "",
			o: "",
			u: "",
			b: 1,
			f: 1,
			p: 1,
			v: 1,
			c: 2,
			g: 2,
			j: 2,
			k: 2,
			q: 2,
			s: 2,
			x: 2,
			z: 2,
			d: 3,
			t: 3,
			l: 4,
			m: 5,
			n: 5,
			r: 6,
		};

	r =
		f +
		a
			.map(function (v, i, a) {
				return codes[v];
			})
			.filter(function (v, i, a) {
				return i === 0 ? v !== codes[f] : v !== a[i - 1];
			})
			.join("");

	return (r + "000").slice(0, 4).toUpperCase();
};
//#endregion Utility
