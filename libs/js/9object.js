//#region Object
/**
 * Flattens an object recursively into one. 
 * @memberOf bijou
 * @function
 * @example 
 * _$.flattenObj({
      hello: "world",
      another: {
          nested: "Value",
          anotherNestedValue: {
              "something": "A value"
          },
          "more Values!!": "lol"
      }
  }); //  { hello: "world", nested: "Value", something: "A value", more Values!!: "lol" }
* @param {Object} o The object to flatten
* @returns {Object} The flattened object.
 */
export let flattenObj = (o) => {
  return o !== Object(o) || Array.isArray(o)
    ? {}
    : Object.assign(
        {},
        ...(function leaves(o) {
          return [].concat.apply(
            [],
            Object.entries(o).map(([k, v]) => {
              return !v ||
                typeof v !== 'object' ||
                !Object.keys(v).some((key) =>
                  v.hasOwnProperty(key),
                ) ||
                Array.isArray(v)
                ? { [k]: v }
                : leaves(v);
            }),
          );
        })(o),
      );
};

/**
 * Deep clones an object
 * @function
 * @memberOf bijou
 * @param {Object} obj The object to clone.
 * @param {Function} [fn=() => true] The function to run to test if the value should be copied.
 * @returns {Object} The output cloned object.
 * @example
 * let obj = { hello: { puny: "earthlings" }};
 * let cloned = _$.clone(obj); // cloned can be operated on without changing obj
 */
export let clone = (obj, fn = () => true) => {
  if (null == obj || 'object' != typeof obj) return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      if (fn(obj[attr])) {
        copy[attr] = obj[attr];
      }
    }
  }
  return copy;
};
/**
 * @memberOf bijou
 * @function
 * @param {Object} obj The object to listen to.
 * @param {Function} [getCallback=()=>null] The callback function to run when a value is set, with the arguments, key (the key changed) and value (the new value of the key).
 * @param {Function} [setCallback=()=>null] The callback function to run when a value is gotten, with the arguments, key (the key got) and value (the value of the key).
 * @example
 * let obj = {something: "This is part of the object", anotherThing: "This is another!"};
 * obj = _$.listen(obj, (k, v) => console.log(`set ${k} to ${v}`), () => console.log("Gotten"));
 * obj.something; // Logs "Gotten" to the console!
 * obj.anotherThing = "Hello world!"; // Logs "Set abotherThing to Hello world!" to the console!
 * @returns {Proxy} A proxy object that behaves like any other object but listens to changes.
 */
export let listen = (
  obj,
  setCallback = () => null,
  getCallback = () => null,
) => {
  return new Proxy(obj, {
    set: function (target, key, value) {
      setCallback(key, value);
      target[key] = value;
      return target[key];
    },
    get: function (target, key, value) {
      getCallback(key, value);
      return obj[key];
    },
  });
};
/**
 * Merges two objects into one. Note that object 2 properties will overwrite those of object 2.
 * @memberOf bijou
 * @function
 * @param {Object} obj1 The 1st object to merge
 * @param {Object} obj2 The 2nd object to merge.
 * @returns {Object} The merged object.
 * @example
 * console.log(_$.merge({hello: "Hello!!"}, {world: " World", world: " Earthlings"})); // {hello: "Hello!!", world: " Earthlings"}
 */
export let merge = function MergeRecursive(obj1, obj2) {
  for (var p in obj2) {
    if (p in Object.prototype) continue;
    try {
      // Property in destination object set; update its value.
      if (obj2[p].constructor == Object) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch (e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
};
/**
 * Maps the keys of an object.
 * @function
 * @memberOf bijou
 * @param {Object} obj The object to map.
 * @param {Function} fn The function to run (passed the current key of the object) which returns the new value from that key.
 * @example
 * _$.mapObjectKeys({something: "A value", anotherThing: "Another value!"}, (key) => key.toUpperCase());
 * //Returns {SOMETHING: "A value", ANOTHERTHING: "Another value!"}
 * @returns {Object} The new Object.
 */
export let mapObjectKeys = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map((val) => _$.mapObjectKeys(val, fn))
    : typeof obj === 'object'
    ? Object.keys(obj).reduce((acc, current) => {
        const key = fn(current);
        const val = obj[current];
        acc[key] =
          val !== null && typeof val === 'object'
            ? _$.mapObjectKeys(val, fn)
            : val;
        return acc;
      }, {})
    : obj;
/**
 * Maps an object's values.
 * @memberOf bijou
 * @function
 * @param {Object} obj The object to map the values of.
 * @param {Function} fn The callback function to use.
 * @returns {Object} The mapped object.
 * @example
 * console.log(_$.mapObjectValues({ hello: "World", bijou: "is GREAT" }, val => val.toLowerCase())); // { hello: "world", bijou: "is great" }
 */
export let mapObjectValues = (obj, fn) => {
  Object.keys(obj).map(function (key, index) {
    obj[key] = fn(obj[key], index);
  });
  return obj;
};
/**
 * Converts a form to an Object.
 * @function
 * @memberOf bijou
 * @param {HTMLFormElement} form The form element.
 * @returns {Object} The object of form data (The keys are the "name" attributes of the form inputs and the values are the value attributes of the form data.)
 * @example
 * html:
 * ```
 * <form id="form">
 *   <input name"input" />
 *   <input name="input2" />
 * </form>
 * ```
 * js:
 * const form = document.getElementById("form");
 * console.log(_$.formToObject(form)); // e.g. { input: "hello", input2: "world" }
 */
export let formToObject = (form) => {
  node();
  return Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
  );
};
/**
 * Sorts an object alphabetically by its keys.
 * @function
 * @memberOf bijou
 * @param {Object} obj The object to sort.
 * @example
 * let object = _$.sortObj({testing: "A value", anotherThing: "Another value!"});
 * // The object is now {anotherThing: "Another value!", testing: "A value"}
 * @returns {Object} The sorted object.
 */
export let sortObj = (obj) => {
  return Object.keys(obj)
    .sort()
    .reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
};
//#endregion Object
