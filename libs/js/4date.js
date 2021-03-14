//#region Date
/**
 * Returns the name of the weekday from the Date object specified.
 * @function
 * @memberOf bijou
 * @param {Date} [date=new Date()] The date object to use.
 * @param {String} [locale=en-US] The locale to use.
 * @example
 * console.log(_$.dayName)); // e.g. "Friday"
 * @returns {String} The day name from the date.
 */
 export let dayName = (date = new Date(), locale = 'en-US') =>
 date.toLocaleDateString(locale, {
   weekday: 'long',
 });

/**
* Formats a number of milliseconds
* @function
* @memberOf bijou
* @param {Number|String} ms The number of milliseconds to format to a string.
* @example
* console.log(_$.formatMilliseconds(1324765128475)); // "1 century, 7 years, 2 days, 22 hours, 18 minutes, 48 seconds, 475 milliseconds"
* @returns {String} The string of formatted milliseconds.
*/
export let formatMilliseconds = (ms) => {
 ms = typeof ms === 'string' ? +ms : ms;
 if (ms < 0) ms = -ms;
 const time = {
   century: Math.floor(ms / 1144800000000),
   year: Math.floor(ms / 22896000000) % 50,
   day: Math.floor(ms / 86400000) % 365,
   hour: Math.floor(ms / 3600000) % 24,
   minute: Math.floor(ms / 60000) % 60,
   second: Math.floor(ms / 1000) % 60,
   millisecond: Math.floor(ms) % 1000,
 };
 return Object.entries(time)
   .filter((val) => val[1] !== 0)
   .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
   .join(', ');
};
//#endregion Date
