//#region String
/**
 * Lets you use a for loop in template literals.
 * @function
 * @memberOf string
 * @param {arr} The array to loop.
 * @param {callback} Callback to return strings
 * @example
 * `Things: ${_$.forTemplateLiteral(["apple"], (item, i) => {return `an ${item}`})}`
 * // "Things: an apple
 * @returns {String} String that has been for looped
 */
export let forTemplateLiteral = (arr, callback) => {
  return arr.map((item, i) => callback(item, i)).join``;
};
/**
 * Maps a string like an array.
 * @example
 * _$.mapString("Hello world", (e) => e.toUpperCase());//Returns "HELLO WORLD"
 * @param {String} str The string to map
 * @param {Function} fn The callback function to run to map the string.
 */
export let mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
/**
 * Removes the accents from a string.
 * @memberOf string
 * @function
 * @returns {String} The string without accents.
 * @example
 * console.log(_$.decurr("déjà vu")); // "deja vu"
 * @param {String} str The string to use.
 */
export let deburr = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/**
 * Removes tags from the HTML string specified.
 * @function
 * @memberOf string
 * @param {String} html The string of HTML to remove tags from.
 * @example
 * console.log(_$.removeTags("<div>Hello</div>")); // "Hello"
 * @returns {String} THe string of HTML without the tags.
 */
export let removeTags = (html) => html.replace(/<[^>]*>/g, '');

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
 * @returns {undefined}
 */
export let speak = (
  text,
  lang = 'en',
  volume = 1,
  voice = 1,
  pitch = 1,
  rate = 1,
) => {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  let def = voices.filter((c) => c.default);
  msg.voice = voice
    ? typeof voice === 'number'
      ? voices[voice]
      : voice
    : def;
  msg.volume = volume; // From 0 to 1
  msg.rate = rate; // From 0.1 to 10
  msg.pitch = pitch; // From 0 to 2
  msg.text = text;
  msg.lang = lang;
  speechSynthesis.speak(msg);
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
export let widows = (text) => {
  var wordArray = text.split(' ');
  var finalTitle = '';
  for (var i = 0; i <= wordArray.length - 1; i++) {
    finalTitle += wordArray[i];
    if (i == wordArray.length - 2) {
      finalTitle += '&nbsp;';
    } else {
      finalTitle += ' ';
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
export let unCamelCase = function (str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
    .replace(/^./, function (s) {
      return s.toUpperCase();
    });
};

/**
 * Syntax highlights a string of code.
 * @function
 * @memberOf string
 * @param {String} string The string of HTML to highlight.
 * @param {String} [mode=html] The mode to use for highlighting. (CSS, JS or HTML).
 * @param {Object} [colors={}] The colors to use for highlighting.
 * @param {String} [colors.tagNameColor='mediumblue'] The color to use for HTML tags.
 * @param {String} [colors.tagColor='brown'] The color to use for HTML tag names.
 * @param {String} [colors.attributeColor='red'] The color to use for HTML attributes.
 * @param {String} [colors.attributeValueColor='mediumblue'] The color to use for HTML attribute values.
 * @param {String} [colors.commentColor='green'] The color to use for comments.
 * @param {String} [colors.cssSelectorColor='brown'] The color to use for CSS selectors.
 * @param {String} [colors.cssPropertyColor='red'] The color to use for CSS properties.
 * @param {String} [colors.cssPropertyValueColor='mediumblue'] The color to use for CSS propertie values.
 * @param {String} [colors.cssLimiterColor='black'] The color to use for css limiters.
 * @param {String} [colors.cssImportantColor='red'] The color to use for `!important` in CSS.
 * @param {String} [colors.jsColor='black'] The color to use for the majority of javascript.
 * @param {String} [colors.jsKeywordColor='black'] The color to use for javascript keywords.
 * @param {String} [colors.jsStringColor='brown'] The color to use for javascript strings.
 * @param {String} [colors.jsNumberColor='black'] The color to use for javascript numbers.
 * @param {String} [colors.jsPropertyColor='black'] The color to use for javascript properties.
 * @param {String} [colors.fontFamily="Consolas,'Courier New', monospace"] The font to use for syntax highlighting.
 * @example
 * _$.syntaxHighlight('alert(\"Hello\")', 'js'); // <span style="color:black">alert(<span style="color:brown">"Hello"</span>)</span>
 * @returns {String} The highlighted string of code as HTML code.
 */
export let syntaxHighlight = (string, mode = 'html', colors = {}) => {
  node();
  //        .==.        .==.
  //       //`^\\      //^`\\
  //      // ^ ^\(\__/)/^ ^^\\
  //     //^ ^^ ^/6  6\ ^^ ^ \\
  //    //^ ^^ ^/( .. )\^ ^ ^ \\
  //   // ^^ ^/\| v""v |/\^ ^ ^\\
  //  // ^^/\/ /  `~~`  \ \/\^ ^\\
  //  -----------------------------
  /// HERE BE DRAGONS
  let el = document.createElement('DIV');
  el.innerText = string;
  let highlightel = (elmnt, mode, colors = {}) => {
    // Credit to w3schools for this
    var lang = mode || 'html';
    var elmntObj = document.getElementById(elmnt) || elmnt;
    var elmntTxt = elmntObj.innerHTML;
    var tagcolor = colors.tagColor || 'mediumblue';
    var tagnamecolor = colors.tagNameColor || 'brown';
    var attributecolor = colors.attributeColor || 'red';
    var attributevaluecolor =
      colors.attributeValueColor || 'mediumblue';
    var commentcolor = colors.commentColor || 'green';
    var cssselectorcolor = colors.cssSelectorColor || 'brown';
    var csspropertycolor = colors.cssPropertyColor || 'red';
    var csspropertyvaluecolor =
      colors.cssPropertyValueColor || 'mediumblue';
    var cssdelimitercolor = colors.cssLimiterColor || 'black';
    var cssimportantcolor = colors.cssImportantColor || 'red';
    var jscolor = colors.jsColor || 'black';
    var jskeywordcolor = colors.jsKeywordColor || 'mediumblue';
    var jsstringcolor = colors.jsStringColor || 'brown';
    var jsnumbercolor = colors.jsNumberColor || 'red';
    var jspropertycolor = colors.jsPropertyColor || 'black';
    elmntObj.style.fontFamily =
      colors.fontFamily || "Consolas,'Courier New', monospace";
    if (!lang) {
      lang = 'html';
    }
    if (lang == 'html') {
      elmntTxt = htmlMode(elmntTxt);
    }
    if (lang == 'css') {
      elmntTxt = cssMode(elmntTxt);
    }
    if (lang == 'js') {
      elmntTxt = jsMode(elmntTxt);
    }
    elmntObj.innerHTML = elmntTxt;

    function extract(str, start, end, func, repl) {
      var s,
        e,
        d = '',
        a = [];
      while (str.search(start) > -1) {
        s = str.search(start);
        e = str.indexOf(end, s);
        if (e == -1) {
          e = str.length;
        }
        if (repl) {
          a.push(func(str.substring(s, e + end.length)));
          str =
            str.substring(0, s) + repl + str.substr(e + end.length);
        } else {
          d += str.substring(0, s);
          d += func(str.substring(s, e + end.length));
          str = str.substr(e + end.length);
        }
      }
      this.rest = d + str;
      this.arr = a;
    }
    function htmlMode(txt) {
      var rest = txt,
        done = '',
        comment,
        startpos,
        endpos,
        note,
        i;
      comment = new extract(
        rest,
        '&lt;!--',
        '--&gt;',
        commentMode,
        'W3HTMLCOMMENTPOS',
      );
      rest = comment.rest;
      while (rest.indexOf('&lt;') > -1) {
        note = '';
        startpos = rest.indexOf('&lt;');
        if (rest.substr(startpos, 9).toUpperCase() == '&LT;STYLE') {
          note = 'css';
        }
        if (rest.substr(startpos, 10).toUpperCase() == '&LT;SCRIPT') {
          note = 'javascript';
        }
        endpos = rest.indexOf('&gt;', startpos);
        if (endpos == -1) {
          endpos = rest.length;
        }
        done += rest.substring(0, startpos);
        done += tagMode(rest.substring(startpos, endpos + 4));
        rest = rest.substr(endpos + 4);
        if (note == 'css') {
          endpos = rest.indexOf('&lt;/style&gt;');
          if (endpos > -1) {
            done += cssMode(rest.substring(0, endpos));
            rest = rest.substr(endpos);
          }
        }
        if (note == 'javascript') {
          endpos = rest.indexOf('&lt;/script&gt;');
          if (endpos > -1) {
            done += jsMode(rest.substring(0, endpos));
            rest = rest.substr(endpos);
          }
        }
      }
      rest = done + rest;
      for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace('W3HTMLCOMMENTPOS', comment.arr[i]);
      }
      return rest;
    }
    function tagMode(txt) {
      var rest = txt,
        done = '',
        startpos,
        endpos,
        result;
      while (rest.search(/(\s|<br>)/) > -1) {
        startpos = rest.search(/(\s|<br>)/);
        endpos = rest.indexOf('&gt;');
        if (endpos == -1) {
          endpos = rest.length;
        }
        done += rest.substring(0, startpos);
        done += attributeMode(rest.substring(startpos, endpos));
        rest = rest.substr(endpos);
      }
      result = done + rest;
      result =
        '<span style=color:' +
        _$.escapeHTML(tagcolor) +
        '>&lt;</span>' +
        result.substring(4);
      if (result.substr(result.length - 4, 4) == '&gt;') {
        result =
          result.substring(0, result.length - 4) +
          '<span style=color:' +
          _$.escapeHTML(tagcolor) +
          '>&gt;</span>';
      }
      return (
        '<span style=color:' +
        _$.escapeHTML(tagnamecolor) +
        '>' +
        result +
        '</span>'
      );
    }
    function attributeMode(txt) {
      var rest = txt,
        done = '',
        startpos,
        endpos,
        singlefnuttpos,
        doublefnuttpos,
        spacepos;
      while (rest.indexOf('=') > -1) {
        endpos = -1;
        startpos = rest.indexOf('=');
        singlefnuttpos = rest.indexOf("'", startpos);
        doublefnuttpos = rest.indexOf('"', startpos);
        spacepos = rest.indexOf(' ', startpos + 2);
        if (
          spacepos > -1 &&
          (spacepos < singlefnuttpos || singlefnuttpos == -1) &&
          (spacepos < doublefnuttpos || doublefnuttpos == -1)
        ) {
          endpos = rest.indexOf(' ', startpos);
        } else if (
          doublefnuttpos > -1 &&
          (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) &&
          (doublefnuttpos < spacepos || spacepos == -1)
        ) {
          endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
        } else if (
          singlefnuttpos > -1 &&
          (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) &&
          (singlefnuttpos < spacepos || spacepos == -1)
        ) {
          endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
        }
        if (!endpos || endpos == -1 || endpos < startpos) {
          endpos = rest.length;
        }
        done += rest.substring(0, startpos);
        done += attributeValueMode(
          rest.substring(startpos, endpos + 1),
        );
        rest = rest.substr(endpos + 1);
      }
      return (
        '<span style=color:' +
        _$.escapeHTML(attributecolor) +
        '>' +
        done +
        rest +
        '</span>'
      );
    }
    function attributeValueMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(attributevaluecolor) +
        '>' +
        txt +
        '</span>'
      );
    }
    function commentMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(commentcolor) +
        '>' +
        txt +
        '</span>'
      );
    }
    function cssMode(txt) {
      var rest = txt,
        done = '',
        s,
        e,
        comment,
        i,
        midz,
        c,
        cc;
      comment = new extract(
        rest,
        /\/\*/,
        '*/',
        commentMode,
        'W3CSSCOMMENTPOS',
      );
      rest = comment.rest;
      while (rest.search('{') > -1) {
        s = rest.search('{');
        midz = rest.substr(s + 1);
        cc = 1;
        c = 0;
        for (i = 0; i < midz.length; i++) {
          if (midz.substr(i, 1) == '{') {
            cc++;
            c++;
          }
          if (midz.substr(i, 1) == '}') {
            cc--;
          }
          if (cc == 0) {
            break;
          }
        }
        if (cc != 0) {
          c = 0;
        }
        e = s;
        for (i = 0; i <= c; i++) {
          e = rest.indexOf('}', e + 1);
        }
        if (e == -1) {
          e = rest.length;
        }
        done += rest.substring(0, s + 1);
        done += cssPropertyMode(rest.substring(s + 1, e));
        rest = rest.substr(e);
      }
      rest = done + rest;
      rest = rest.replace(
        /{/g,
        '<span style=color:' +
          _$.escapeHTML(cssdelimitercolor) +
          '>{</span>',
      );
      rest = rest.replace(
        /}/g,
        '<span style=color:' +
          _$.escapeHTML(cssdelimitercolor) +
          '>}</span>',
      );
      for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace('W3CSSCOMMENTPOS', comment.arr[i]);
      }
      return (
        '<span style=color:' +
        _$.escapeHTML(cssselectorcolor) +
        '>' +
        rest +
        '</span>'
      );
    }
    function cssPropertyMode(txt) {
      var rest = txt,
        done = '',
        s,
        e,
        n,
        loop;
      if (rest.indexOf('{') > -1) {
        return cssMode(rest);
      }
      while (rest.search(':') > -1) {
        s = rest.search(':');
        loop = true;
        n = s;
        while (loop == true) {
          loop = false;
          e = rest.indexOf(';', n);
          if (rest.substring(e - 5, e + 1) == '&nbsp;') {
            loop = true;
            n = e + 1;
          }
        }
        if (e == -1) {
          e = rest.length;
        }
        done += rest.substring(0, s);
        done += cssPropertyValueMode(rest.substring(s, e + 1));
        rest = rest.substr(e + 1);
      }
      return (
        '<span style=color:' +
        _$.escapeHTML(csspropertycolor) +
        '>' +
        done +
        rest +
        '</span>'
      );
    }
    function cssPropertyValueMode(txt) {
      var rest = txt,
        done = '',
        s;
      rest =
        '<span style=color:' +
        _$.escapeHTML(cssdelimitercolor) +
        '>:</span>' +
        rest.substring(1);
      while (rest.search(/!important/i) > -1) {
        s = rest.search(/!important/i);
        done += rest.substring(0, s);
        done += cssImportantMode(rest.substring(s, s + 10));
        rest = rest.substr(s + 10);
      }
      result = done + rest;
      if (
        result.substr(result.length - 1, 1) == ';' &&
        result.substr(result.length - 6, 6) != '&nbsp;' &&
        result.substr(result.length - 4, 4) != '&lt;' &&
        result.substr(result.length - 4, 4) != '&gt;' &&
        result.substr(result.length - 5, 5) != '&amp;'
      ) {
        result =
          result.substring(0, result.length - 1) +
          '<span style=color:' +
          _$.escapeHTML(cssdelimitercolor) +
          '>;</span>';
      }
      return (
        '<span style=color:' +
        _$.escapeHTML(csspropertyvaluecolor) +
        '>' +
        result +
        '</span>'
      );
    }
    function cssImportantMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(cssimportantcolor) +
        ';font-weight:bold;>' +
        txt +
        '</span>'
      );
    }
    function jsMode(txt) {
      var rest = txt,
        done = '',
        esc = [],
        i,
        cc,
        tt = '',
        sfnuttpos,
        dfnuttpos,
        compos,
        comlinepos,
        keywordpos,
        numpos,
        mypos,
        dotpos,
        y;
      for (i = 0; i < rest.length; i++) {
        cc = rest.substr(i, 1);
        if (cc == '\\') {
          esc.push(rest.substr(i, 2));
          cc = 'W3JSESCAPE';
          i++;
        }
        tt += cc;
      }
      rest = tt;
      y = 1;
      while (y == 1) {
        sfnuttpos = getPos(rest, "'", "'", jsStringMode);
        dfnuttpos = getPos(rest, '"', '"', jsStringMode);
        compos = getPos(rest, /\/\*/, '*/', commentMode);
        comlinepos = getPos(rest, /\/\//, '<br>', commentMode);
        numpos = getNumPos(rest, jsNumberMode);
        keywordpos = getKeywordPos('js', rest, jsKeywordMode);
        dotpos = getDotPos(rest, jsPropertyMode);
        if (
          Math.max(
            numpos[0],
            sfnuttpos[0],
            dfnuttpos[0],
            compos[0],
            comlinepos[0],
            keywordpos[0],
            dotpos[0],
          ) == -1
        ) {
          break;
        }
        mypos = getMinPos(
          numpos,
          sfnuttpos,
          dfnuttpos,
          compos,
          comlinepos,
          keywordpos,
          dotpos,
        );
        if (mypos[0] == -1) {
          break;
        }
        if (mypos[0] > -1) {
          done += rest.substring(0, mypos[0]);
          done += mypos[2](rest.substring(mypos[0], mypos[1]));
          rest = rest.substr(mypos[1]);
        }
      }
      rest = done + rest;
      for (i = 0; i < esc.length; i++) {
        rest = rest.replace('W3JSESCAPE', esc[i]);
      }
      return (
        '<span style=color:' +
        _$.escapeHTML(jscolor) +
        '>' +
        rest +
        '</span>'
      );
    }
    function jsStringMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(jsstringcolor) +
        '>' +
        txt +
        '</span>'
      );
    }
    function jsKeywordMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(jskeywordcolor) +
        '>' +
        txt +
        '</span>'
      );
    }
    function jsNumberMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(jsnumbercolor) +
        '>' +
        txt +
        '</span>'
      );
    }
    function jsPropertyMode(txt) {
      return (
        '<span style=color:' +
        _$.escapeHTML(jspropertycolor) +
        '>' +
        txt +
        '</span>'
      );
    }
    function getDotPos(txt, func) {
      var x,
        i,
        j,
        s,
        e,
        arr = [
          '.',
          '<',
          ' ',
          ';',
          '(',
          '+',
          ')',
          '[',
          ']',
          ',',
          '&',
          ':',
          '{',
          '}',
          '/',
          '-',
          '*',
          '|',
          '%',
        ];
      s = txt.indexOf('.');
      if (s > -1) {
        x = txt.substr(s + 1);
        for (j = 0; j < x.length; j++) {
          cc = x[j];
          for (i = 0; i < arr.length; i++) {
            if (cc.indexOf(arr[i]) > -1) {
              e = j;
              return [s + 1, e + s + 1, func];
            }
          }
        }
      }
      return [-1, -1, func];
    }
    function getMinPos() {
      var i,
        arr = [];
      for (i = 0; i < arguments.length; i++) {
        if (arguments[i][0] > -1) {
          if (arr.length == 0 || arguments[i][0] < arr[0]) {
            arr = arguments[i];
          }
        }
      }
      if (arr.length == 0) {
        arr = arguments[i];
      }
      return arr;
    }
    function getKeywordPos(typ, txt, func) {
      var words,
        i,
        pos,
        rpos = -1,
        rpos2 = -1,
        patt;
      if (typ == 'js') {
        words = [
          'abstract',
          'arguments',
          'boolean',
          'break',
          'byte',
          'case',
          'catch',
          'char',
          'class',
          'const',
          'continue',
          'debugger',
          'default',
          'delete',
          'do',
          'double',
          'else',
          'enum',
          'eval',
          'export',
          'extends',
          'false',
          'final',
          'finally',
          'float',
          'for',
          'function',
          'goto',
          'if',
          'implements',
          'import',
          'in',
          'instanceof',
          'int',
          'interface',
          'let',
          'long',
          'NaN',
          'native',
          'new',
          'null',
          'package',
          'private',
          'protected',
          'public',
          'return',
          'short',
          'static',
          'super',
          'switch',
          'synchronized',
          'this',
          'throw',
          'throws',
          'transient',
          'true',
          'try',
          'typeof',
          'var',
          'void',
          'volatile',
          'while',
          'with',
          'yield',
        ];
      }
      for (i = 0; i < words.length; i++) {
        pos = txt.indexOf(words[i]);
        if (pos > -1) {
          patt = /\W/g;
          if (
            txt.substr(pos + words[i].length, 1).match(patt) &&
            txt.substr(pos - 1, 1).match(patt)
          ) {
            if (pos > -1 && (rpos == -1 || pos < rpos)) {
              rpos = pos;
              rpos2 = rpos + words[i].length;
            }
          }
        }
      }
      return [rpos, rpos2, func];
    }
    function getPos(txt, start, end, func) {
      var s, e;
      s = txt.search(start);
      e = txt.indexOf(end, s + end.length);
      if (e == -1) {
        e = txt.length;
      }
      return [s, e + end.length, func];
    }
    function getNumPos(txt, func) {
      var arr = [
          '<br>',
          ' ',
          ';',
          '(',
          '+',
          ')',
          '[',
          ']',
          ',',
          '&',
          ':',
          '{',
          '}',
          '/',
          '-',
          '*',
          '|',
          '%',
          '=',
        ],
        i,
        j,
        c,
        startpos = 0,
        endpos,
        word;
      for (i = 0; i < txt.length; i++) {
        for (j = 0; j < arr.length; j++) {
          c = txt.substr(i, arr[j].length);
          if (c == arr[j]) {
            if (
              c == '-' &&
              (txt.substr(i - 1, 1) == 'e' ||
                txt.substr(i - 1, 1) == 'E')
            ) {
              continue;
            }
            endpos = i;
            if (startpos < endpos) {
              word = txt.substring(startpos, endpos);
              if (!isNaN(word)) {
                return [startpos, endpos, func];
              }
            }
            i += arr[j].length;
            startpos = i;
            i -= 1;
            break;
          }
        }
      }
      return [-1, -1, func];
    }
  };
  highlightel(el, mode, colors);
  return el.innerHTML;
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
export let camelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
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
export let scrambleString = (str) => {
  var a = str.split(''),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
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
export let hashString = (str, seed = 0) => {
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
export let editDistance = (a, b) => {
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
export let byteSize = (str) => new Blob([str]).size;

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
export let replaceMultiple = (text, replace) => {
  var re = new RegExp(Object.keys(replace).join('|'), 'gi');
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
export let urlQuery = (query, url = window.location.href) => {
  query = query.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp(`[?&]${query}(=([^&#]*)|&|#|$)`),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
  html,
  tags = undefined,
  attributes = undefined,
) => {
  node();
  var attributes = attributes || [
    { attribute: 'src', tags: '*', regex: /^(?:https|http|\/\/):/ },
    { attribute: 'href', tags: '*', regex: /^(?:https|http|\/\/):/ },
    { attribute: 'width', tags: '*', regex: /^[0-9]+$/ },
    { attribute: 'height', tags: '*', regex: /^[0-9]+$/ },
    { attribute: 'id', tags: '*', regex: /^[a-zA-Z]+$/ },
    { attribute: 'class', tags: '*', regex: /^[a-zA-Z ]+$/ },
    {
      attribute: 'value',
      tags: ['INPUT', 'TEXTAREA'],
      regex: /^.+$/,
    },
    {
      attribute: 'checked',
      tags: ['INPUT'],
      regex: /^(?:true|false)+$/,
    },
    {
      attribute: 'placeholder',
      tags: ['INPUT', 'TEXTAREA'],
      regex: /^.+$/,
    },
    {
      attribute: 'alt',
      tags: ['IMG', 'AREA', 'INPUT'],
      //"^" and "$" match beggining and end
      regex: /^[0-9a-zA-Z]+$/,
    },
    {
      attribute: 'autofocus',
      tags: ['INPUT'],
      regex: /^(?:true|false)+$/,
    },
    {
      attribute: 'for',
      tags: ['LABEL', 'OUTPUT'],
      regex: /^[a-zA-Z0-9]+$/,
    },
  ];
  var tags = tags || [
    'I',
    'P',
    'B',
    'BODY',
    'HTML',
    'DEL',
    'INS',
    'STRONG',
    'SMALL',
    'A',
    'IMG',
    'CITE',
    'FIGCAPTION',
    'ASIDE',
    'ARTICLE',
    'SUMMARY',
    'DETAILS',
    'NAV',
    'TD',
    'TH',
    'TABLE',
    'THEAD',
    'TBODY',
    'NAV',
    'SPAN',
    'BR',
    'CODE',
    'PRE',
    'BLOCKQUOTE',
    'EM',
    'HR',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'DIV',
    'MAIN',
    'HEADER',
    'FOOTER',
    'SELECT',
    'COL',
    'AREA',
    'ADDRESS',
    'ABBR',
    'BDI',
    'BDO',
  ];

  attributes = attributes.map((el) => {
    if (typeof el === 'string') {
      return { attribute: el, tags: '*', regex: /^.+$/ };
    }
    let output = el;
    if (!el.hasOwnProperty('tags')) {
      output.tags = '*';
    }
    if (!el.hasOwnProperty('regex')) {
      output.regex = /^.+$/;
    }
    return output;
  });
  var el = new DOMParser().parseFromString(html, 'text/html');
  var elements = el.querySelectorAll('*');
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
        (attr.tags === '*' || attr.tags.includes(element.tagName)) &&
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
export let markdownToHTML = (src) => {
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
    return '<' + tag + '>' + content + '</' + tag + '>';
  }

  function blockquote(src) {
    return src.replace(rx_blockquote, function (all, content) {
      return element(
        'blockquote',
        blockquote(highlight(content.replace(/^ *&gt; */gm, ''))),
      );
    });
  }

  function list(src) {
    return src.replace(
      rx_list,
      function (all, ind, ol, num, low, content) {
        var entry = element(
          'li',
          highlight(
            content
              .split(
                RegExp(
                  '\n ?' +
                    ind +
                    '(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +',
                  'g',
                ),
              )
              .map(list)
              .join('</li><li>'),
          ),
        );

        return (
          '\n' +
          (ol
            ? '<ol start="' +
              (num
                ? ol + '">'
                : parseInt(ol, 36) -
                  9 +
                  '" style="list-style-type:' +
                  (low ? 'low' : 'upp') +
                  'er-alpha">') +
              entry +
              '</ol>'
            : element('ul', entry))
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
                ? 'strong'
                : 'em'
              : sub
              ? p2
                ? 's'
                : 'sub'
              : sup
              ? 'sup'
              : small
              ? 'small'
              : big
              ? 'big'
              : 'code',
            highlight(content),
          )
        );
      },
    );
  }

  function unesc(str) {
    return str.replace(rx_escape, '$1');
  }

  var stash = [];
  var si = 0;

  src = '\n' + src + '\n';

  replace(rx_lt, '&lt;');
  replace(rx_gt, '&gt;');
  replace(rx_space, '  ');

  // blockquote
  src = blockquote(src);

  // horizontal rule
  replace(rx_hr, '<hr/>');

  // list
  src = list(src);
  replace(rx_listjoin, '');

  // code
  replace(rx_code, function (all, p1, p2, p3, p4) {
    stash[--si] = element(
      'pre',
      element('code', p3 || p4.replace(/^ {4}/gm, '')),
    );
    return si + '\uf8ff';
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
        '</a>'
      : p1;
    return si + '\uf8ff';
  });

  // table
  replace(rx_table, function (all, table) {
    var sep = table.match(rx_thead)[1];
    return (
      '\n' +
      element(
        'table',
        table.replace(rx_row, function (row, ri) {
          return row == sep
            ? ''
            : element(
                'tr',
                row.replace(rx_cell, function (all, cell, ci) {
                  return ci
                    ? element(
                        sep && !ri ? 'th' : 'td',
                        unesc(highlight(cell || '')),
                      )
                    : '';
                }),
              );
        }),
      )
    );
  });

  // heading
  replace(rx_heading, function (all, _, p1, p2) {
    return _ + element('h' + p1.length, unesc(highlight(p2)));
  });

  // paragraph
  replace(rx_para, function (all, content) {
    return element('p', unesc(highlight(content)));
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
export let syllables = (word) => {
  word = word.toLowerCase();
  var t_some = 0;
  if (word.length > 3) {
    if (word.substring(0, 4) == 'some') {
      word = word.replace('some', '');
      t_some++;
    }
  }
  word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  var syl = word.match(/[aeiouy]{1,2}/g);
  console.log(syl);
  if (syl) {
    return syl.length + t_some;
  }
};
/**
 * Capitalizes the first letter of the string
 * @memberOf string
 * @function
 * @param {String} str The string to capitalize.
 * @example
 * console.log(_$.capitalize("hello world")); // "Hello world"
 * @returns {String} The capitalized string.
 */
export let capitalize = (str) => {
  if (!str) throw new TypeError("Missing Param 'Str'.");
  return str
    .split('')
    .map(
      (section) =>
        String.fromCodePoint(section.codePointAt(0)).toUpperCase() +
        section.slice(section.codePointAt(0) > 0xffff ? 2 : 1),
    )
    .join('');
};
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
export let replaceBetween = (string, start, end, what) =>
  string.substring(0, start) + what + string.substring(end);
/**
 * Escapes a string of HTML
 * @function
 * @memberOf string
 * @param {String} str The string of HTML to escape.
 * @example
 * console.log(_$.escapeHTML("<div>")); // "&lt;div&gt;"
 * @returns {String} The escaped HTML.
 */
export let escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
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
export let unescapeHTML = (str) =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    (tag) =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"',
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
