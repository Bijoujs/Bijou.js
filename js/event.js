//#region Event
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
  element = req('HTMLElement', 'element'),
  callback = req('function', 'callback'),
) => {
  node();
  return new Promise((resolve, reject) => {
    document.addEventListener('click', (e) => {
      if (!element.contains(e.target)) {
        callback();
        resolve();
      }
    });
  });
};
/**
 * Returns the callback when the user stops scrolling.
 * @function
 * @memberOf event
 * @param {Function} callback The callback to call when the user stops scrolling.
 * @param {Number} [time=150]
 * @example
 * _$.onScrollStop(() => {alert("You stopped scrolling!")})
 * @returns {Promise} Returns a promise that is resolved when the user stops scrolling.
 */
export let onScrollStop = (
  callback = req('function', 'callback'),
  time = 150,
) => {
  let isScrolling;
  node();
  return new Promise((resolve, reject) => {
    window.addEventListener(
      'scroll',
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
 * @returns {undefined}
 */
export let dispatch = (
  type = req('string', 'type'),
  args = req('object', 'event properties'),
  target = window,
) => {
  let e = new Event(type);
  for (let o in args) {
    e[o] = args[o];
  }
  target.dispatchEvent(e);
};
//#endregion Event
