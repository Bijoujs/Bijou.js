//#region Element

/**
 * Re-enables the use of &lt;menu&gt; and &lt;menuitem&gt; tags for corner clicking.
 * @memberOf bijou
 * @function
 * @example
 * //HTML:
 * ```
 * <h1 contextmenu="menu">Corner click me</h1>
 * <menu>
 *  <menuitem label="An item!">
 *  <menuitem label="Another item!">
 * </menu>
 * ```
 * //JS
 * _$.context();
 * // Now the user can corner click the items that have parents with a "contextmenu" attribute! Try it out here: https://bcs88.csb.app/
 * @returns {undefined};
 */
export let context = () => {
  var menu = document.createElement('UL');
  menu.id = 'contextMenu';
  document.body.appendChild(menu);
  let styles = document.createElement('STYLE');
  styles.innerHTML = `#contextMenu {
       pointer-events: none;
       padding: 0;
       opacity: 0;
       transition: opacity .3s ease;
       position: fixed;
       padding-top: 3px;
       padding-bottom: 3px;
       max-height: 200px;
       overflow-y: scroll;
       overflow-x: hidden;
       list-style: none;
       z-index: 10000;
       background: white;
       color: #333;
       font-family: sans-serif;
       border-radius: 5px;
       box-shadow: 2px 2px 5px #0004;
       width: fit-content;
       min-width: 50px;
       max-width: 150px;
     }
     #contextMenu li {
       transition: background-color .3s ease;
       display: block;
       min-width: 150px;
       margin: 0;
       padding: 10px;
     }
     #contextMenu li:hover {
       background-color: #ddd;
       cursor: pointer;
     }
     `;
  document.body.appendChild(styles);
  var elements = document.querySelectorAll('[contextmenu]');
  for (let i = 0; i < elements.length; i++) {
    window.addEventListener('contextmenu', (e) => {
      menu.style.pointerEvents = 'auto';
      let items;
      try {
        items = document.querySelectorAll(
          `#${e.target
            .closest('[contextmenu]')
            .getAttribute('contextmenu')} menuitem`,
        );
        e.preventDefault();
      } catch (e) {
        return true;
      }
      menu.innerHTML = '';
      for (let j = 0; j < items.length; j++) {
        const contextMenu = items[j];
        const liTag = document.createElement('li');
        liTag.onclick = contextMenu.getAttribute('onclick');
        liTag.textContent = contextMenu.getAttribute('label');
        menu.innerHTML += liTag.outerHTML;
      }
      console.log(menu.innerHTML);
      menu.style.top = `${e.clientY}px`;
      menu.style.left = `${e.clientX}px`;
      menu.style.opacity = 1;
    });
  }
  var contextTimer = 0;
  requestInterval(() => {
    contextTimer += 100;
    if (contextTimer > 3000) {
      menu.style.opacity = 0;
      menu.style.pointerEvents = 'none';
      contextTimer = 0;
      return;
    }
  }, 100);
  addEventListeners(menu, ['mousemove', 'click', 'scroll'], () => {
    contextTimer = 0;
  });
  onOutsideClick(menu, () => {
    menu.style.opacity = 0;
    menu.style.pointerEvents = 'none';
  });
};
/**
 * Tests whether the specified element is fully in view.
 * @function
 * @memberOf bijou
 * @param {Element} el The DOM element to test.
 * @example
 * // Alerts "In view!" if the first <div> in the document is in view.
 * if (_$.inView(document.querySelector("div"))) alert("In view!");
 * @returns {Boolean} Whether the element is completely in view.
 */
export let inView = (el) => {
  node();
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
};
/**
 * Tests if the given DOM element is partially (or fully) in view.
 * @function
 * @memberOf bijou
 * @param {Element} el The element to test.
 * @example
 * // Alerts "In view!" if the first <div> in the document is partially or fully view.
 * if (_$.inPartialView(document.querySelector("div"))) alert("In view!");
 * @returns {Boolean} Whether the DOM element is partially in view.
 */
export let inPartialView = (el) => {
  node();
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
};
/**
 * Converts a form to URL queries using the name attribute.
 * @function
 * @memberOf bijou
 * @param {HTMLFormElement} form The form element.
 * @returns {String} The string of url queries (Excluding the hostname and path) of the form data.
 */
export let serializeForm = (form) => {
  node();
  return Array.from(new FormData(form), (field) =>
    field.map(encodeURIComponent).join('='),
  ).join('&');
};

/**
 * Replaces the text in an element by running it through a callback.
 * @function
 * @memberOf bijou
 * @param {Element} el The element to replace the text of.
 * @param {Function} callback The callback to run (Gets passed the element's text).
 * @example
 * _$.replaceText(document.querySelector("div"), (text) => text.toUpperCase());
 * // Converts the text of the first <div> element to upperCase.
 * @returns {undefined}
 */
export let replaceText = (el, callback) => {
  node();
  _$.each(_$.textNodes(el), (node) => {
    node.textContent = callback(node.textContent);
  });
};
/**
 * Gets a list of all the text nodes in an element
 * @memberOf bijou
 * @function
 * @param {Element} el The element to get the text nodes of.
 * @returns {Array} The text nodes.
 * @example
 * _$.textNodes(document.querySelector("h1"))[0].textContent = "hello world"; // replaces the text with "hello world" without deleting other elements
 */
export let textNodes = (el) => {
  return [...el.childNodes].filter((node) => {
    return (
      node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== ''
    );
  });
};
/**
 * Generates a querySelector for an element passed in.
 * @function
 * @memberOf bijou
 * @param {Element} elem The element to generate the querySelector for.
 * @example
 * const textarea = document.getElementById('textarea');
 * console.log(_$.querySelector(textarea)); //Logs "#textarea" to the console.
 * @returns {String} The generated querySelector.
 */
export let querySelector = (elem) => {
  node();
  var element = elem;
  var str = '';

  function loop(element) {
    if (
      element.getAttribute('id') &&
      document.querySelectorAll(`#${element.getAttribute('id')}`)
        .length === 1
    ) {
      str = str.replace(/^/, ' #' + element.getAttribute('id'));
      str = str.replace(/\s/, '');
      str = str.replace(/\s/g, ' > ');
      return str;
    }
    if (document.body === element) {
      str = str.replace(/^/, ' body');
      str = str.replace(/\s/, '');
      str = str.replace(/\s/g, ' > ');
      return str;
    }
    if (element.getAttribute('class')) {
      var elemClasses = '.';
      elemClasses += element.getAttribute('class');
      elemClasses = elemClasses.replace(/\s/g, '.');
      elemClasses = elemClasses.replace(/^/g, ' ');
      var classNth = '';
      var childrens = element.parentNode.children;

      if (childrens.length < 2) {
        return;
      }

      var similarClasses = [];

      for (var i = 0; i < childrens.length; i++) {
        if (
          element.getAttribute('class') ==
          childrens[i].getAttribute('class')
        ) {
          similarClasses.push(childrens[i]);
        }
      }

      if (similarClasses.length > 1) {
        for (var j = 0; j < similarClasses.length; j++) {
          if (element === similarClasses[j]) {
            j++;
            classNth = ':nth-of-type(' + j + ')';
            break;
          }
        }
      }

      str = str.replace(/^/, elemClasses + classNth);
    } else {
      var name = element.nodeName;
      name = name.toLowerCase();
      var nodeNth = '';

      childrens = element.parentNode.children;

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
              nodeNth = ':nth-of-type(' + j + ')';
              break;
            }
          }
        }
      }

      str = str.replace(/^/, ' ' + name + nodeNth);
    }

    if (element.parentNode) {
      loop(element.parentNode);
    } else {
      str = str.replace(/\s/g, ' > ');
      str = str.replace(/\s/, '');
      return str;
    }
  }

  loop(element);

  return str;
};
/**
 * Removes comments from the element or string of code specified.
 * @function
 * @memberOf bijou
 * @param {Element|String} el The element or string or code to remove comments from.
 * @example
 * _$.removeComments(document.documentElement);//Removes the comments from the document element.
 * @returns {String|Element} The string removed of comments or the element removed of comments.
 */
export let removeComments = (el) => {
  const isString = typeof el === 'string';
  el = isString ? _$.parseHTML(el) : el.cloneNode(true);
  for (const child of [...el.querySelectorAll('*'), el]) {
    for (const grandchild of child.childNodes) {
      if (grandchild instanceof Comment)
        child.removeChild(grandchild);
    }
  }
  return isString ? el.outerHTML : el;
};
/**
 * Parses the string of HTML specified and returns an HTML element of it.
 * @function
 * @memberOf bijou
 * @param {String} string The HTML string to parse.
 * @param {String} [mimeType="text/html"] The mimeType of the string.
 * @example
 * let html = _$.parseHTML("<div id='hello'><textarea></textarea></div>");
 * html.querySelector("textarea");//Returns the textarea!
 * @returns {HTMLDocument} The HTML document element of the HTML string specified.
 */
export let parseHTML = (string, mimeType = 'text/html') => {
  const domparser = new DOMParser();
  return domparser.parseFromString(string, mimeType);
};
/**
 * Allows an element to be dragged and dropped.
 * @function
 * @memberOf bijou
 * @param {Element} el The element to be dragged (And dropped :P ).
 * @example
 * _$.drag(document.querySelector('div')); // Allows the first <div> on the page to be dragged.
 * @returns {Element} The element.
 */
export let drag = (el) => {
  node();
  var initX, initY, mousePressX, mousePressY;
  el.addEventListener(
    'mousedown',
    function (event) {
      var style = window.getComputedStyle(el);
      el.style.top = style.getPropertyValue('top');
      el.style.left = style.getPropertyValue('left');
      el.style.right = style.getPropertyValue('right');
      el.style.bottom = style.getPropertyValue('bottom');
      this.style.position = 'absolute';
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;
      this.addEventListener('mousemove', repositionElement, false);

      window.addEventListener(
        'mouseup',
        function () {
          el.removeEventListener(
            'mousemove',
            repositionElement,
            false,
          );
        },
        false,
      );
    },
    false,
  );

  function repositionElement(event) {
    this.style.left = initX + event.clientX - mousePressX + 'px';
    this.style.top = initY + event.clientY - mousePressY + 'px';
  }
  return el;
};
/**
 * Adds multiple event listeners with one callback to the element specified.
 * @memberOf bijou
 * @function
 * @param {Element} element The element to add the event listeners to.
 * @param {Array.<String>} events The array of events to listen for.
 * @param {Function} handler The function to run when the events happen.
 * @param {Boolean} [useCapture=false] Wether to use capture.
 * @param {Array} [args=false] The arguments to use in the handler function.
 * @example
 * // Reset a timer every user interaction.
 * let timer = 0;
 * setInterval(() => timer++, 1);
 * _$.addEventListeners(
 *  document,
 *  ["mousemove", "click", "scroll", "keypress"],
 *  () => timer = 0,
 * );
 * @returns {undefined}
 */
export let addEventListeners = (
  element,
  events,
  handler = {},
  useCapture = false,
  args = false,
) => {
  if (!(events instanceof Array)) {
    throw (
      'addMultipleListeners: ' +
      'please supply an array of eventstrings ' +
      '(like ["click","mouseover"])'
    );
  }
  //create a wrapper to be able to use additional arguments
  var handlerFn = function (e) {
    handler.apply(this, args && args instanceof Array ? args : []);
  };
  for (var i = 0; i < events.length; i += 1) {
    element.addEventListener(events[i], handlerFn, useCapture);
  }
};
/**
 * @memberOf bijou
 * @function
 * @returns {undefined}
 * Sorts a table using JavaScript. This appends click listeners to every TH in the table.
 * @param {HTMLTableElement} element The table to sort
 */
export let sortTable = (element) => {
  var getCellValue = function (tr, idx) {
    return tr.children[idx].innerText || tr.children[idx].textContent;
  };

  var comparer = function (idx, asc) {
    return function (a, b) {
      return (function (v1, v2) {
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2);
      })(
        getCellValue(asc ? a : b, idx),
        getCellValue(asc ? b : a, idx),
      );
    };
  };

  Array.prototype.slice
    .call(element.querySelectorAll('th'))
    .forEach(function (th) {
      th.addEventListener('click', function () {
        var table = th.parentNode;
        while (table.tagName.toUpperCase() != 'TABLE')
          table = table.parentNode;
        Array.prototype.slice
          .call(table.querySelectorAll('tr:nth-child(n+2)'))
          .sort(
            comparer(
              Array.prototype.slice
                .call(th.parentNode.children)
                .indexOf(th),
              (this.asc = !this.asc),
            ),
          )
          .forEach(function (tr) {
            table.appendChild(tr);
          });
      });
    });
};
/**
 * Sorts a table by a <th> element.
 * @memberOf bijou
 * @function
 * @returns {undefined}
 * @example
 * //Note that this example pretty much recreates the _$ sortTable function, which is much more cross browser and good than this recreation. If sorting a whole table please use that.
 * _$.each(document.querySelectorAll("#table th"), (th) => {
 *  th.addEventListener("click", () => {
 *    //Add event listeners to each of them.
 *    _$.sortTableBy(th, th.asc = !th.asc);//Toggle the "asc" attribute on the th.
 *  });
 * })
 * @param {HTMLTableElement} th The table header (<th> element) to sort with.
 * @param {Boolean} acending Whether to sort the table ascending or descending.
 */
export let sortTableBy = (th, acending) => {
  var getCellValue = function (tr, idx) {
    return tr.children[idx].innerText || tr.children[idx].textContent;
  };

  var comparer = function (idx, asc) {
    return function (a, b) {
      return (function (v1, v2) {
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2);
      })(
        getCellValue(asc ? a : b, idx),
        getCellValue(asc ? b : a, idx),
      );
    };
  };

  var table = th.parentNode;
  while (table.tagName.toUpperCase() != 'TABLE')
    table = table.parentNode;
  Array.prototype.slice
    .call(table.querySelectorAll('tr:nth-child(n+2)'))
    .sort(
      comparer(
        Array.prototype.slice
          .call(th.parentNode.children)
          .indexOf(th),
        acending,
      ),
    )
    .forEach(function (tr) {
      table.appendChild(tr);
    });
};
/**
 * Adds the specified styles to the element specified.
 * @function
 * @memberOf bijou
 * @param {Element} el The element to add the styles to.
 * @param {Object} styles An object that represents the styles to be added. (camelCased)
 * @example
 * _$.addStyles(document.documentElement, {backgroundColor: "#101010", color: "white"})
 * @returns {Object} the style object of the element.
 */
export let addStyles = (el, styles) => {
  node();
  return Object.assign(el.style, styles);
};

/**
 * Creates an HTML element from the specified string.
 * @function
 * @memberOf bijou
 * @param {String} str The string of the HTML element to create.
 * @example
 * //Returns a div with an id of "id_here" and innerText of "Testing!"
 * _$.createElement("<div id='id_here'>Testing!</div>");
 * @returns {Element} The created element.
 */
export let createElement = (str) => {
  node();
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};
/**
 * Gets a property from the computed style of an element.
 * @function
 * @memberOf bijou
 * @param {Element} el The element whose styles to get.
 * @param {String} prop The css-property value to get of the styles.
 * @example
 * console.log(_$.compStyle(document.documentElement, "background-color")); // logs the background colour of the document
 * @returns {String} The computed style property for the element specified.
 */
export let compStyle = (el, prop) => {
  node();
  var computedStyles = window.getComputedStyle(el);
  return computedStyles.getPropertyValue(prop);
};

/**
 * Get the siblings of a DOM element
 * @function
 * @memberOf bijou
 * @param {Element} n The element to get siblings of
 * @example
 * _$.each(_$.elementSiblings(document.querySelectorAll("li")), (el) => el.style.backgroundColor = 'white');
 * // Make every sibling of the first list item's background color white.
 * @returns {Element[]} The array of sibling elements.
 */
export let elementSiblings = (n) =>
  [...n.parentElement.children].filter((c) => c != n);
/**
 * Disables right click on the element spcified.
 * @function
 * @memberOf bijou
 * @param {Element} el The element to disable right click on.
 * @example
 * _$.disableRightClick(document.documentElement)
 * @returns {undefined}
 */
export let disableRightClick = (el) => {
  node();
  return (el.oncontextmenu = false);
};
/**
 * Converts all of the styles for an element to inline CSS. This is nice for production sites because it means that they will look the same on all browsers. (Because it uses computed style.)
 * @function
 * @memberOf bijou
 * @param {Element} el The element to convert.
 * @example
 * _$.inlineCSS(document.querySelector("h1")); // Converts the styles for the <h1> element to inline using the style="___" attribute
 * @returns {undefined}
 */
export let inlineCSS = (el) => {
  var cs = getComputedStyle(el, null);
  var i;
  for (i = 0; i < cs.length; i++) {
    var s = cs[i] + '';
    el.style[s] = cs[s];
  }
};
/**
 * Returns an array of objects representing the attributes of a passed element.
 * @param {Element} el The HMTL element to get attributes from.
 * @function
 * @memberOf bijou
 * @example
 * // Say the <html> tag of the document was "<html style='background-color: #101010;'>", then the function below would log "style," to the console.
 * console.log(Object.keys(_$.attributes(document.documentElement).join(", "));
 * @return {Array.<object>} The array of objects representing the attributes
 */
export let attributes = (el) => {
  node();
  var output = [];
  for (
    var att, i = 0, atts = el.attributes, n = atts.length;
    i < n;
    i++
  ) {
    att = atts[i];
    output.push({
      name: att.nodeName,
      value: att.nodeValue,
    });
  }
  return output;
};
/**
 * Observes the mutations of the html element specified.
 * @memberOf bijou
 * @function
 * @param {Element} element The element to observe
 * @param {Function} callback The callback function to run when a mutation happens.
 * @param {Object} options The options to use.
 * @example
 * _$.observeMutations(document, console.log); // Logs all the mutations that happen to the console.
 * @returns {undefined}
 */
export let observeMutations = (element, callback, options) => {
  const observer = new MutationObserver((mutations) =>
    mutations.forEach((m) => callback(m)),
  );
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options,
    ),
  );
  return observer;
};
/**
 * Tilts a specified element to point towards the specified position. Note that 0,0 is the center of the screen in coordinates.
 * @memberOf bijou
 * @function
 * @param {Element} el The element to tilt.
 * @param {Number} x The x value of the mouse
 * @param {Number} y The y value of the mouse
 * @param {Number} [perspective=500] The perspective
 * @param {Number} [amount=30] The amount to tilt.
 * @returns {undefined}
 * @example
 * // Tilt the first image in the document whenever the mouse moves.
 * let el = document.querySelector("img");
 * el.onmousemove = (e) => {
 *  let x = e.layerX;
 *  let y = e.layerY
 *  _$.tilt(el, x, y);
 * }
 */
export let tilt = (el, x, y, perspective = 500, amount = 30) => {
  //Old code
  /*  const xVal = x
    const yVal = y
    const yRotation = amount * ((xVal - width / 2) / width)
    const xRotation = amount * -1 * ((yVal - height / 2) / height)
    const string = `perspective(${perspective}px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
    el.style.transform = string */

  //One liner
  el.style.transform = `perspective(${perspective}px) scale(1.1) rotateX(${
    amount * -1 * ((y - el.clientHeight / 2) / el.clientHeight)
  }deg) rotateY(${
    amount * ((x - el.clientWidth / 2) / el.clientWidth)
  }deg)`;
};
/**
 * Enters fullscreen on an element.
 * @memberOf bijou
 * @function
 * @param {Element} element The element to enter full screen with.
 * @returns {undefined}
 * @example
 * _$.fullScreen(document.documentElement); // Make the window fullscreen
 */
export let fullScreen = (element) => {
  return (
    element.requestFullScreen ||
    element.mozRequestFullScreen ||
    element.webkitRequestFullScreen() ||
    new Error('Fullscreen failed')
  );
};
/**
 * Replaces the selected text in a contentEditable div with the HTML given.
 * @memberOf bijou
 * @function
 * @returns {undefined}
 * @example
 * // Add a simple contenteditable div to the page.
 * document.appendChild(_$.createElement("<div contenteditable id='text'></div>"));
 * _$.replaceSelection("<b>BOLD TEXT</b> <small>Bijou is awesome</small><h1>You need to use it</h1>");
 * //Replaces the selection! =)
 * @param {String} replacementText The replacement HTML to replace with.
 */
export let replaceSelection = (replacementText) => {
  var sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      let n = document.createElement('span');
      n.insertAdjacentHTML('beforeend', replacementText);
      range.insertNode(n);
    }
  } else if (document.selection && document.selection.createRange) {
    console.warn(
      'You are using IE < 9, you are evil. Falling back to text not HTML.',
    );
    range = document.selection.createRange();
    range.text = replacementText.replace(/<[^>]*>/g, '');
  }
};
//#endregion Element
