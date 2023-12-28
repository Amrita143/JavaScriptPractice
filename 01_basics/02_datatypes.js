let str = "Amrit"
let age = 22


console.log(typeof(str));
console.log(typeof(age));
console.log(typeof(null)); // typeof(null) --> object
console.log(null);
console.log(typeof(undefined));  // typeof(undefined) --> undefined
console.log(undefined)

// Convert one datatype to others 
console.log(typeof(String(age)));
let strnum = "24"
console.log(typeof(Number(strnum)));
console.log(typeof(Number("12ab")));
console.log(Number("12ab"));
console.log(typeof(NaN));  // typeof(NaN) --> number , NaN means 'Not a number'