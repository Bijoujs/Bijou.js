//#region Color
/**
 * Converts a rgb(a) color to hex.
 * @memberOf bijou
 * @function
 * @example
 * console.log(_$.rgbToHex("rgb(255,255,255)")); // "#ffffff"
 * @param {String} rgb The string of RGB colors.
 * @returns {String} The hex color.
 */
export let rgbToHex = (rgb) => {
  let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  rgb = rgb.substr(4).split(')')[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + r + g + b;
};
/**
 * Converts a hex code to a RGB color.
 * @function
 * @memberOf bijou
 * @param {String} hex The hex code to convert.
 * @example
 * console.log(_$.rgbToHex("#ffffff")); // "rgb(255,255,255)"
 * @returns {String} The RGB color converted from the hex code.
 */
export let hexToRGB = (hex) => {
  if (
    ((hex.length - 1 === 6 ||
      hex.length - 1 === 8 ||
      hex.length - 1 === 4 ||
      hex.length - 1 === 3) &&
      hex.startsWith('#')) ||
    ((hex.length === 6 ||
      hex.length === 8 ||
      hex.length === 4 ||
      hex.length === 3) &&
      !hex.startsWith('#'))
  ) {
  } else {
    throw new Error('Invalid hex');
  }
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map((x) => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};
/**
 * Blends two colors through additive blending by a percentage.
 * @function
 * @memberOf bijou
 * @param {String} color1 The hex code of the first color to be blended
 * @param {String} color2 The hex code of the second color to be blended.
 * @param {Number} [percent=50] A number between 0 and 100 of the percentage to blend the two colors, 0 being completely the first color and 100 being completely the second color.
 * @example
 * console.log(_$.blendColors("#ffffff", "#000000", 80)); // #333333
 * @returns {String} The blended color (A hex code).
 */
export let blendColors = (color1, color2, percent = 50) => {
  const generateHex = (r, g, b) => {
    let R = r.toString(16);
    let G = g.toString(16);
    let B = b.toString(16);

    while (R.length < 2) {
      R = `0${R}`;
    }
    while (G.length < 2) {
      G = `0${G}`;
    }
    while (B.length < 2) {
      B = `0${B}`;
    }

    return `#${R}${G}${B}`;
  };

  const mix = (start, end, percent) =>
    start + (percent / 100) * (end - start);

  const red1 = parseInt(`${color1[1]}${color1[2]}`, 16);
  const green1 = parseInt(`${color1[3]}${color1[4]}`, 16);
  const blue1 = parseInt(`${color1[5]}${color1[6]}`, 16);

  const red2 = parseInt(`${color2[1]}${color2[2]}`, 16);
  const green2 = parseInt(`${color2[3]}${color2[4]}`, 16);
  const blue2 = parseInt(`${color2[5]}${color2[6]}`, 16);

  const red = Math.round(mix(red1, red2, percent));
  const green = Math.round(mix(green1, green2, percent));
  const blue = Math.round(mix(blue1, blue2, percent));

  return generateHex(red, green, blue);
};
/**
 * Generates a random hex color.
 * @function
 * @memberOf bijou
 * @example
 * console.log(_$.randomColor()); // e.g. #5bf462
 * @returns {String} A random Hex color
 */
export let randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
/**
 * Lighten or darken a color by a certain amount
 * @function
 * @memberOf bijou
 * @param {String} color The color to lighten/darken
 * @param {Number} amt The amount to lighten the color (out of 255).
 * @example
 * _$.lightenColor("#000000", 50); // #323232
 * @returns {String} The color lightened.
 */
export let lightenColor = (col, amt) => {
  var usePound = false;

  if (col[0] == '#') {
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

  return (
    (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
  );
};
/**
  * Tests if a color is light or dark and returns an object representation.
  * @function
  * @memberOf bijou
  * @param {string} color The hex color to test.
  * @example
  * if (_$.lightOrDark("#333333").lightOrDark === 'dark'){
    document.querySelector("DIV").style.color = "white";
  } else {
      document.querySelector("DIV").style.color = "black";
  }
  * @returns {Object} An object that represents if the color is light or dark and how much. The object key "hsp" represents a value out of 255 of how light the color is and the object's key "lightOrDark" is a string (Either "light" or "dark") of whether the color is light or dark.
  */
export let lightOrDark = (color) => {
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
      '0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&')
    );

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  hsp = Math.sqrt(
    0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b),
  );
  if (hsp > 127.5) {
    return { lightOrDark: 'light', hsp: hsp };
  } else {
    return { lightOrDark: 'dark', hsp: hsp };
  }
};
//#endregion Color
