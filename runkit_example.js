// Require Bijou.js!
const _$ = require("bijou.js");

// Let's get some unique id's!
console.log(_$.uuid("Cool seed!"));

// Now let's log a bunch of primes!
console.log(_$.primesTo(300)); // The prime numbers up to 300!

// Let's convert the keys for this object to uppercase!
console.log(
	_$.mapObjectKeys(
		{ test: "A value", anotherThing: "Another!" },
		(key) => key.toUpperCase(),
	),
);

// Let's lighten this color by 100:
console.log(_$.lightenColor("#00bbbb", 100));
