//#region Utility
/**
 * Plays a section of an audio file.
 * @param {HTMLMediaElement} audioObj The audio object to play. (Needs to be created from "new Audio()")
 * @param {Number} start The time to start playing.
 * @param {Number} stop The time to stop playing.
 * @memberOf bijou
 * @function
 * @example
 * _$.playSection(new Audio("file.mp3"), 5, 20.5); // Plays file.mp3, starting with second 5 and ending at 20.5 seconds into the file.
 * @returns {undefined}
 */
export let playSection = (audioObj, start, stop) => {
  let audioObjNew = audioObj.cloneNode(true); //this is to prevent "play() request was interrupted" error.
  audioObjNew.currentTime = start;
  audioObjNew.play();
  audioObjNew.int = setInterval(function () {
    if (audioObjNew.currentTime > stop) {
      audioObjNew.pause();
      clearInterval(audioObjNew.int);
    }
  }, 10);
};
/**
   * Formats a string of HTML using indents. Note that this does not format CSS or JS in the HTML.
   * @memberOf bijou
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
export let formatHTML = (html) => {
  var tab = '\t';
  var result = '';
  var indent = '';

  html.split(/>\s*</).forEach(function (element) {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += indent + '<' + element + '>\r\n';

    if (
      element.match(/^<?\w[^>]*[^\/]$/) &&
      !element.startsWith('input')
    ) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
};
/**
 * Gets JSON from a URL and performs a callback with it.
 * @function
 * @memberOf bijou
 * @param {String} url The url of the JSON to be fetched.
 * @param {Function} callback The function to be run with the JSON code.
 * @example
 * _$.getJSON("http://date.jsontest.com/", (json) => {alert("The current time is " + json.time)})
 * @returns {Promise} A promise resolved when the JSON is fetched and parsed.
 */
export let getJSON = (url, callback) => {
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
 * @memberOf bijou
 * @param {String} url The url of the HTML to be fetched.
 * @param {Function} callback The function to be run with the HTML code.
 * @example
 * // Logs the HTML of wikipedia.org to the console.
 * _$.getHTML("https://wikipedia.org", (html) => console.log(html));
 * @returns {Promise} A promise resolved when the HTML is fetched and parsed.
 */
export let getHTML = (url, callback) => {
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
 * @memberOf bijou
 * @param {...String} urls The urls of the images to be preloaded.
 * @example
 * _$.preloadImage("https://unsplash.com/some_huge_image.png"); // Preloads the unsplash image "some_huge_image.png" :P
 * @returns {undefined}
 */
export let preloadImage = (...urls) => {
  let images = [];
  for (var i = 0; i < urls.length; i++) {
    images[i] = new Image();
    images[i].src = urls[i];
  }
};

/**
 * Saves a blob as a file!
 * @function
 * @memberOf bijou
 * @param {Blob} blob The blob to save as a file.
 * @param {String} [fileName=output.txt] The name of the output file (Must include the extension.)
 * @example
 * _$.saveBlob(new Blob(["Yay! I'm in a text file!"]), "Cool file.txt");
 * @returns {undefined}
 */
export let saveBlob = (blob, fileName = 'output.txt') => {
  node();
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';

  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

/**
 * Works exactly like setInterval but instead uses requestAnimationFrame.
 * @memberOf bijou
 * @function
 * @param {Function} fn The function to run repeatedly every delay seconds.
 * @param {Number} delay The delay time in milliseconds to run the function.
 * @returns {Object}
 */
export let requestInterval = function (fn, delay) {
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
 * @memberOf bijou
 * @function
 * @param {String} url The url to load the script from.
 * @param {Function} callback The callback to run when the script is loaded.
 * @example
 * _$.("script.js", ()=>alert("Script loaded!"));//Loads the script from the "script.js" file
 * @returns {Promise} A promise resolved once the script is loaded.
 */
export let loadScript = (url, callback) => {
  node();
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) {
      // only required for IE <9
      script.onreadystatechange = function () {
        if (
          script.readyState === 'loaded' ||
          script.readyState === 'complete'
        ) {
          script.onreadystatechange = null;
          callback();
          resolve();
        }
      };
    } else {
      //Others
      script.onload = function () {
        callback();
        resolve();
      };
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};

/**
 * Fetches an image and runs the callback with the data url of the image.
 * @memberOf bijou
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
export let imageToData = async (url, callback) => {
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
 * @memberOf bijou
 * @Object
 * @example
 * _$.cookies.setItem("a_cookie", "Hello world!", 1); // Set a_cookie to "Hello world" and have it expire in a day.
 * @returns {Function} The function that the user wanted
 */
export let cookies = {
  /**
   * Sets a cookie to a value
   * @function
   * @memberOf bijou
   * @param {String} name The name of the cookie to set
   * @param {String} value The value of the cookie
   * @param {Number} [days=1000] The days that the cookie should last.
   * @returns {String} The value of the cookie
   */
  setItem: (name, value, days = 1000) => {
    node();
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie =
      name + '=' + (value || '') + expires + '; path=/';
  },
  /**
   * Gets a cookie from its name.
   * @function
   * @memberOf bijou
   * @param {String} name The name of the cookie.
   * @returns {String} The value of the cookie
   */
  getItem: (name) => {
    node();

    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  /**
   * Deletes a cookie
   * @memberOf bijou
   * @param {String} name The name of the cookie to delete.
   * @returns {undefined}
   */
  removeItem: (name) => {
    node();

    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  },
};
/**
 * A collection of regular expressions to validate and get common things from a page
 * @memberOf bijou
 * @Object
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
   */
  name: /^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,
  /**
      Validates email adresses
      */
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  /** Validates a link
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
   */
  strongPassword: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
  /**
   * Tests for a moderate password.
   * Should have:
   * 1 lowercase letter
   * 1 uppercase letter
   * 1 number
   * At least 8 characters long */
  moderatePassword: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  /** Ip adresses */
  /* Match IPv4 address */
  ipv4: /^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,
  /* Match IPv6 address */
  ipv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
  /**Both ipv4 and ipv6 */
  ip: / ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,
  /**Social security number */
  socialSecurity: /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,
  /**Hex color */
  hex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  /** Zip code */
  zipCode: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
  /**Phone */
  simplePhone: /^\+?[\d\s]{3,}$/,
  /**Credit cards */
  visaCredit: /^4[0–9]{12}(?:[0–9]{3})?$/,
  expressCredit: /^3[47][0–9]{13}$/,
  mastercardCredit: /^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,
  discoverCredit: /^6(?:011|5[0–9]{2})[0–9]{12}$/,
};
/**
     * Converts JSON to a CSV string
     * @function
     * @memberOf bijou
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
export let jsonToCsv = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? '' : delimiter}"${
            !obj[key] ? '' : obj[key]
          }"`,
        '',
      ),
    ),
  ].join('\n');
/**
 * Converts an array to CSV (Comma separated values) data.
 * @function
 * @memberOf bijou
 * @param {Array} arr The array to convert.
 * @param {String} [delimiter=,] The separator (By default this is a comma.)
 * @example
 * console.log(_$.arrayToCSV([1,2,3,4])); // "1,2,3,4"
 * @returns {String} The comma separated array.
 */
export let arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map((v) =>
      v
        .map((x) => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter),
    )
    .join('\n');
/**
 * Times the function passed.
 * @function
 * @memberOf bijou
 * @param {Function} fn The function to run and time.
 * @param {String} [name=_$ function timer]
 * @example
 * // Times how long it took the user to enter their name.
 * _$.timeFunction(() => prompt("What's your name?"));
 * @returns {undefined}
 */
export let timeFunction = (fn, name = '_$ function timer') => {
  console.time(name);
  fn();
  console.timeEnd(name);
};
/**
 * Displays a desktop notification with the specified text.
 * @function
 * @memberOf bijou
 * @param {String} text The title of the notification.
 * @param {String} body The body of the notification.
 * @param {String} icon The url to the image for the icon of the notification.
 * @example
 * _$.notify("Hello", "Hi there! This is a notification!"); Notifies the user with the title "Hello" and the body text "Hi there! This is a notification!"
 * @returns {undefined}
 */
export let notify = (text, body, icon) => {
  node();
  if (!window.Notification) {
    console.log('Browser does not support notifications.');
  } else {
    if (Notification.permission === 'granted') {
    } else {
      Notification.requestPermission()
        .then(function (p) {
          if (p === 'granted') {
          } else {
            console.log('User blocked notifications.');
          }
        })
        .catch(function (err) {
          //Eat it.
          console.error(err);
        });
    }
  }
};
/**
 * Copies the string inputted to the clipboard.
 * @function
 * @memberOf bijou
 * @param {String} str The string to copy.
 * @example
 * _$.copy("Hello world");
 * @returns {String} The string copied.
 */
export let copy = (str) => {
  node();
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
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
 * @memberOf bijou
 * @example
 * _$.browser(); // For me this (correctly) returns "Chrome"
 * @returns {String} A string of the browser name that the user is using.
 */
export let browser = () => {
  node();
  var isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(' OPR/') >= 0;
  var isFirefox = typeof InstallTrigger !== 'undefined';
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        (typeof safari !== 'undefined' &&
          window['safari'].pushNotification),
    );
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  var isEdge = !isIE && !!window.StyleMedia;
  var isChrome =
    !!window.chrome &&
    (!!window.chrome.webstore || !!window.chrome.runtime);
  var isEdgeChromium =
    isChrome && navigator.userAgent.indexOf('Edg') != -1;
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isOpera) {
    return 'Opera';
  }
  if (isFirefox) {
    return 'Firefox';
  }
  if (isSafari) {
    return 'Safari';
  }
  if (isEdge) {
    return 'Edge';
  }
  if (isIE) {
    return 'Internet Explorer';
  }
  if (isChrome) {
    return 'Chrome';
  }
  if (isEdgeChromium) {
    return 'Edge Chromium';
  }
  if (isBlink) {
    return 'Blink';
  }
};
//#endregion Utility
