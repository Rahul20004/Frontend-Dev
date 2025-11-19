let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
let myArray = [1, 2, 3];
let myObject = { name: "Rahul", age: 20 };
let myNull = null;
let myUndefined;

console.table([
  { Label: "String", Value: myString, Type: typeof myString },
  { Label: "Number", Value: myNumber, Type: typeof myNumber },
  { Label: "Boolean", Value: myBoolean, Type: typeof myBoolean },
  { Label: "Array", Value: myArray, Type: Array.isArray(myArray) ? "array" : typeof myArray },
  { Label: "Object", Value: myObject, Type: typeof myObject },
  { Label: "Null", Value: myNull, Type: typeof myNull },
  { Label: "Undefined", Value: myUndefined, Type: typeof myUndefined }
]);
