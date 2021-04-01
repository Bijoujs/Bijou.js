//#endregion bijou

/**
 *Converts most of the functions of Bijou.js to prototype functions.
 * Note that you have to call this function to add the prototypes.
 * @param {Object} options The options to use, supports overwrite (boolean of whether to overwrite existing prototypes), and try, (boolean for whether to wrap in a try..catch)
 */
export let prototype = (
	options = { overwrite: true, tryCatch: false },
) => {
	function proto(fn, thing, name) {
		let title = name || fn ? fn.name : undefined;
		title ||= "noNameLol";
		let overwrite = options.overwrite ?? true;
		if (!thing.prototype.hasOwnProperty(title) || overwrite) {
			Object.defineProperty(thing.prototype, title, {
				value: function (...args) {
					if (
						(options.try ||
							options.tryCatch ||
							options.catch ||
							options.catchErrors) === true
					) {
						try {
							let t = this;
							return fn(t, ...args);
						} catch (e) {
							return e;
						}
					} else {
						let t = this;
						return fn(t, ...args);
					}
				},
			});
		}
	}
	proto(_$.addDaysToDate, Date, "addDays");
	proto(_$.addEventListeners, Element);
	proto(_$.addMinutesToDate, Date, "addMinutes");
	proto(_$.addStyles, Element);
	proto(_$.animate, Number);
	proto(_$.arrayDiff, Array, "diff");
	proto(_$.arrayToCSV, Array, "toCSV");
	proto(_$.attributes, Element);
	proto(_$.averageBy, Array);
	proto(_$.blendColors, String);
	proto(_$.byteSize, String);
	proto(_$.camelCase, String);
	proto(_$.capitalize, String);
	proto(_$.clone, Object);
	proto(_$.compStyle, Element);
	proto(_$.composeFunction, Function, "compose");
	proto(_$.contains, Array);
	proto(_$.copy, String);
	proto(_$.count, Array);
	proto(_$.create, String);
	proto(_$.createElement, String);
	proto(_$.curryFunction, Function, "curry");
	proto(_$.dayName, Date);
	proto(_$.debounce, Function);
	proto(_$.deburr, String);
	proto(_$.disableRightClick, Element);
	proto(_$.dispatch, Object);
	proto(_$.drag, Element);
	proto(_$.each, Array);
	proto(_$.editDistance, String);
	proto(_$.elementContains, Element, "contains");
	proto(_$.equals, Date);
	proto(_$.equals, Object);
	proto(_$.escapeHTML, String);
	proto(_$.factorial, Number);
	proto(_$.fastestFunction, Array);
	proto(_$.flatten, Array);
	proto(_$.flattenObj, Object, "flatten");
	proto(_$.forTemplateLiteral, Array);
	proto(_$.formToObject, Element, "toObject");
	proto(_$.formatHTML, String);
	proto(_$.formatNumber, Number);
	proto(_$.fullScreen, Element);
	proto(_$.gcd, Array);
	proto(_$.hash, String);
	proto(_$.hashString, String);
	proto(_$.imageToData, String);
	proto(_$.inPartialView, Element);
	proto(_$.inView, Element);
	proto(_$.inlineCSS, Element);
	proto(_$.isAsync, Function);
	proto(_$.isDateValid, Date, "valid");
	proto(_$.isPrime, Number);
	proto(_$.jaroDistance, String);
	proto(_$.juxt, Function);
	proto(_$.lightOrDark, String);
	proto(_$.lightenColor, String);
	proto(_$.limitArgs, Function);
	proto(_$.listen, Object);
	proto(_$.luhnCheck, Number);
	proto(_$.mapObjectKeys, Object, "mapKeys");
	proto(_$.mapObjectValues, Object, "map");
	proto(_$.mapString, String, "map");
	proto(_$.markDownToHTML, String);
	proto(_$.memoize, Function);
	proto(_$.merge, Object);
	proto(_$.nFlatten, Array);
	proto(_$.observeMutations, Element, "observe");
	proto(_$.onOutsideClick, Element);
	proto(_$.onScrollStop, Element);
	proto(_$.parents, Element);
	proto(_$.parseHTML, String);
	proto(_$.playSection, Element);
	proto(_$.prefixCSS, String);
	proto(_$.preloadImage, String);
	proto(_$.primesTo, Number);
	proto(_$.querySelector, Element, "genQuerySelector");
	proto(_$.random, Number);
	proto(_$.range, Number);
	proto(_$.remove, Array);
	proto(_$.removeComments, String);
	proto(_$.removeTags, String);
	proto(_$.renderElement, Object);
	proto(_$.replaceBetween, String);
	proto(_$.replaceMultiple, Object);
	proto(_$.replaceText, Element);
	proto(_$.rgbToHex, String);
	proto(_$.runAsync, Function);
	proto(_$.sanitize, String);
	proto(_$.saveBlob, Blob);
	proto(_$.scrambleString, String, "scramble");
	proto(_$.seedRandom, String);
	proto(_$.serializeForm, Element, "serialize");
	proto(_$.shuffleArray, Array, "shuffle");
	proto(_$.sortObj, Object, "sort");
	proto(_$.sortTable, Element, "sort");
	proto(_$.sortTableBy, Element);
	proto(_$.speak, String);
	proto(_$.splice, String);
	proto(_$.spread, Function);
	proto(_$.syllables, String);
	proto(_$.textNodes, Element);
	proto(_$.throttle, Function);
	proto(_$.tilt, Element);
	proto(_$.timeFunction, Function);
	proto(_$.titleCase, String);
	proto(_$.unCamelCase, String);
	proto(_$.unescapeHTML, String);
	proto(_$.unionArrays, Array, "union");
	proto(_$.uniqueArray, Array, "unique");
	proto(_$.urlQuery, String);
	proto(_$.widows, String);
};
/**
 * Bijou.js source documentation. In the `Bijou` namespace you will find the documentation for all of the functions in Bijou.js, if you have any questions, suggestions or bug reports pleast make an issue (here)[https://github.com/bijou-js/bijou.js/issues/new/choose]. Best of luck! Thanks for using Bijou.js! --Explosion--
 * @type {Object}
 * @author Explosion-Scratch, GrahamSH-LLK, Bijou.js contributors
 */

let _temp = {
	addDaysToDate: addDaysToDate,
	addEventListeners: addEventListeners,
	addMinutesToDate: addMinutesToDate,
	addStyles: addStyles,
	animate: animate,
	arrayDiff: arrayDiff,
	arrayToCSV: arrayToCSV,
	attributes: attributes,
	averageBy: averageBy,
	blendColors: blendColors,
	browser: browser,
	byteSize: byteSize,
	camelCase: camelCase,
	capitalize: capitalize,
	clone: clone,
	compStyle: compStyle,
	composeFunction: composeFunction,
	contains: contains,
	context: context,
	cookies: cookies,
	copy: copy,
	count: count,
	create: create,
	createElement: createElement,
	curryFunction: curryFunction,
	dayName: dayName,
	debounce: debounce,
	deburr: deburr,
	diff: diff,
	disableRightClick: disableRightClick,
	dispatch: dispatch,
	drag: drag,
	each: each,
	ease: ease,
	editDistance: editDistance,
	elementContains: elementContains,
	elementReady: elementReady,
	elementSiblings: elementSiblings,
	equals: equals,
	escapeHTML: escapeHTML,
	factorial: factorial,
	fastestFunction: fastestFunction,
	flatten: flatten,
	flattenObj: flattenObj,
	forTemplateLiteral: forTemplateLiteral,
	formToObject: formToObject,
	formatHTML: formatHTML,
	formatMilliseconds: formatMilliseconds,
	formatNumber: formatNumber,
	fullScreen: fullScreen,
	gcd: gcd,
	getHTML: getHTML,
	getImages: getImages,
	getJSON: getJSON,
	hash: hash,
	hashString: hashString,
	hexToRGB: hexToRGB,
	hub: hub,
	imageToData: imageToData,
	inPartialView: inPartialView,
	inView: inView,
	injectCSS: injectCSS,
	inlineCSS: inlineCSS,
	isAsync: isAsync,
	isDateValid: isDateValid,
	isPrime: isPrime,
	jaroDistance: jaroDistance,
	jsonToCsv: jsonToCsv,
	juxt: juxt,
	lightOrDark: lightOrDark,
	lightenColor: lightenColor,
	limitArgs: limitArgs,
	listen: listen,
	loadScript: loadScript,
	luhnCheck: luhnCheck,
	mapObjectKeys: mapObjectKeys,
	mapObjectValues: mapObjectValues,
	mapString: mapString,
	markdownToHTML: markdownToHTML,
	memoize: memoize,
	merge: merge,
	mobileOrDesktop: mobileOrDesktop,
	nFlatten: nFlatten,
	notify: notify,
	observeMutations: observeMutations,
	onOutsideClick: onOutsideClick,
	onScrollStop: onScrollStop,
	parents: parents,
	parseCookie: parseCookie,
	parseHTML: parseHTML,
	playSection: playSection,
	prefixCSS: prefixCSS,
	preloadImage: preloadImage,
	previousPage: previousPage,
	primesTo: primesTo,
	prototype: prototype,
	querySelector: querySelector,
	race: race,
	random: random,
	randomColor: randomColor,
	range: range,
	regex: regex,
	remove: remove,
	removeComments: removeComments,
	removeTags: removeTags,
	renderElement: renderElement,
	replaceBetween: replaceBetween,
	replaceMultiple: replaceMultiple,
	replaceSelection: replaceSelection,
	replaceText: replaceText,
	requestInterval: requestInterval,
	rgbToHex: rgbToHex,
	runAsync: runAsync,
	sanitize: sanitize,
	saveBlob: saveBlob,
	scrambleString: scrambleString,
	seedRandom: seedRandom,
	serializeForm: serializeForm,
	shuffleArray: shuffleArray,
	sleep: sleep,
	sortObj: sortObj,
	sortTable: sortTable,
	sortTableBy: sortTableBy,
	soundex: soundex,
	speak: speak,
	splice: splice,
	spliceArrayBuffer: spliceArrayBuffer,
	spread: spread,
	syllables: syllables,
	syntaxHighlight: syntaxHighlight,
	textNodes: textNodes,
	throttle: throttle,
	tilt: tilt,
	timeFunction: timeFunction,
	titleCase: titleCase,
	typeOf: typeOf,
	unCamelCase: unCamelCase,
	unescapeHTML: unescapeHTML,
	unionArrays: unionArrays,
	uniqueArray: uniqueArray,
	urlQuery: urlQuery,
	uuid: uuid,
	waitUntil: waitUntil,
	widows: widows,
};
_temp = sortObj(_temp);
// Imports and exports
export default _temp;
//Export so that when people do <script src="bijou" type="module"></script>
if (!isNode) {
	window._$ = _temp;
}
//So that we can use bijou in the source code.
export const _$ = _temp;
if (isNode) {
	try {
		module.exports = _temp;
	} catch (err) {
		console.error(err);
	}
}
