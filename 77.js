const myArray = [1, true, "Zhanett"]; //undefined

myArray; // (3) [1, true, 'Zhanett']

myArray.length; // 3

const myArray2 = [1, true, "Zhanett"]; //undefined

myArray2; // (3) [1, true, 'Zhanett']

myArray === myArray2; //false

const myArray3 = myArray; //undefined

myArray === myArray3; // true

const myArray4 = new Array(1, true, "Zhanett"); //undefined

myArray4 === myArray; //false
