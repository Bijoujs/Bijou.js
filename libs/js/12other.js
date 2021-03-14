/**
 * Lets you use a for loop in template literals.
 * @function
 * @memberOf bijou
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

//#endregion Bijou
