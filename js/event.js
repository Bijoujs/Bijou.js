//#region Event
/**
 * Waits until a condition is met then resolves a promise.
 * @returns {Promise} A promise resolved when the condition returned by the function is true.
 * @memberOf event
 * @function
 * @example
 * //Waits until the current second of the current minute is 10.
 * _$.waitUntil(() => new Date().getSeconds === 10).then(() => console.log("Done"))
 * @example
 * //This DOES NOT work
 * _$.waitUntil(() => Date.now() === Date.now() + 100);
 * //Because it is evaluated many times, and the current date, is never ahead of itself. Therefore in this case the function will run infinitely.
 * //To fix this problem and cancel the function after a certain amount of time,
 * //you can pass another argument to the function
 * _$.waitUntil(() => false, 10000);//Waits 10 seconds, because the function always returns false.
 * @param {Function} condition The function which returns true when the condition is met
 * @param {Number} [wait=Infinity] The wait time in milliseconds to cancel the function and reject the promise.
 */
export let waitUntil = async (
	condition = req("function", "condition"),
	wait = Infinity,
) => {
	return new Promise(async (resolve, reject) => {
		let startTime = Date.now();
		while (!condition()) {
			if (Date.now() - startTime >= wait) {
				reject(condition());
				return;
			}
			await new Promise((res) => requestAnimationFrame(res));
		}
		resolve(condition());
		return condition();
	});
};
/**
 * Returns the callback when a a click is registered outside the selected element
 * @function
 * @memberOf event
 * @param {Element} element The element to use as the outsideclick element.
 * @param {Function} callback The function to run when a click is registered outside the specified element.
 * @example
 * _$.onOutsideClick(document.querySelector("div"), () => {alert("You clicked outside the DIV!")});
 * @returns {Promise} A promise that is resolved when the user clicks outside the specified element.
 */
export let onOutsideClick = (
	element = req("HTMLElement", "element"),
	callback = req("function", "callback"),
) => {
	node();
	return new Promise((resolve, reject) => {
		document.addEventListener("click", (e) => {
			if (!element.contains(e.target)) {
				callback();
				resolve();
			}
		});
	});
};
/**
 * @callback scrollStopCallback
 * @param {UIEvent} event The event object
 * @returns {undefined}
 */
/**
 * Returns the callback when the user stops scrolling.
 * @function
 * @memberOf event
 * @param {HTMLElement} [element=window] The HTML element to listen on for scroll stop.
 * @param {Function} callback The callback to call when the user stops scrolling.
 * @param {Number} [time=150]
 * @example
 * _$.onScrollStop(() => {alert("You stopped scrolling!")})
 * @returns {Promise} Returns a promise that is resolved when the user stops scrolling.
 */
export let onScrollStop = (
	element = window,
	callback = req("function", "callback"),
	time = 150,
) => {
	let isScrolling;
	node();
	return new Promise((resolve, reject) => {
		element.addEventListener(
			"scroll",
			(e) => {
				clearTimeout(isScrolling);
				isScrolling = setTimeout(() => {
					callback(e);
					resolve(e);
				}, time);
			},
			false,
		);
	});
};
/**
 * A lot like socket.io, this allows emit, on and off handlers. (Note that this is local, only your computer sends and recieves your data. Still useful though)
 * @memberOf event
 * @function
 * @returns {Object} The object with the emit, on and off functions in it.
 * @example
 * let thing = _$.hub();
 * // Log any new data to the console
 * thing.on("data", (data) => console.log(data));
 * setTimeout(() => {
 *   thing.emit("data", "Yay! Some data!!"); // Logs "Yay! Some data!!" to the console after 2 seconds.
 * }, 2000)
 */
export let hub = () => ({
	hub: Object.create(null),
	emit(event, data) {
		(this.hub[event] || []).forEach((handler) => handler(data));
	},
	on(event, handler) {
		if (!this.hub[event]) this.hub[event] = [];
		this.hub[event].push(handler);
	},
	off(event, handler) {
		const i = (this.hub[event] || []).findIndex((h) => h === handler);
		if (i > -1) this.hub[event].splice(i, 1);
		if (this.hub[event].length === 0) delete this.hub[event];
	},
});
/**
 * Dispatches an event of the type specified with custom arguments.
 * @memberOf event
 * @function
 * @example
 * //Dispatch a custom mouse move event to the window.
 * _$.dispatch("mousemove", {clientX: 100, clientY: 150, target: document.documentElement}, window);
 * @param {String} type The type of event to dispatch (E.g. "mousemove")
 * @param {Object} args The argument representing the event, e.g. {clientX: 100, clientY: 150}
 * @param {EventTarget} [target=window] What to dispatch the event to.
 * @returns {Event} The event object.
 */
export let dispatch = (
	args = req("object", "event properties"),
	type = req("string", "type"),
	target = window,
) => {
	let e = new Event(type);
	for (let o in args) {
		e[o] = args[o];
	}
	target.dispatchEvent(e);
	return e;
};
//#endregion Event
