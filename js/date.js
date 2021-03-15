//#region Date
/**
 * Returns the name of the weekday from the Date object specified.
 * @function
 * @memberOf date
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
 * @memberOf date
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
/**
 * Adds a certain number of minutes to a date object.
 * @memberof date
 * @example
 * _$.addMinutesToDate(new Date(), 4);//Create a date 4 minutes from now.
 * @param {Date} date The date to add minutes to.
 * @param {Number} n How many minutes to add to the date.
 * @returns {Date} The date with minutes added.
 */
export let addMinutesToDate = (date, n) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 60000);
  return d.toISOString().split('.')[0].replace('T', ' ');
};
/**
 * Validates a date from a string.
 * @memberOf date
 * @example
 *  _$.isDateValid('December 17, 1995 03:24:00'); // true
    _$.isDateValid('1995-12-17T03:24:00'); // true
    _$.isDateValid('1995-12-17 T03:24:00'); // false
    _$.isDateValid('Duck'); // false
    _$.isDateValid(1995, 11, 17); // true
    _$.isDateValid(1995, 11, 17, 'Duck'); // false
    _$.isDateValid({}); // false
 * @param  {...any} val The arguments of the date to validate.
 * @returns {Boolean} Returns if the date is valid or not.
 */
export let isDateValid = (...val) =>
  !Number.isNaN(new Date(...val).valueOf());
/**
 * Adds a specified number of days to a date.
 * @memberOf date
 * @param {Date} date The date to add days to
 * @param {Number} n How many days to add to the date.
 * @returns {Date} The date with the specified number of days added.
 */
export let addDaysToDate = (date, n) => {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
};
//#endregion Date
