/*3) create an array to store companies -> ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
   a)Remove the first company from the array
   b)remove the uber and add OLA in its place
   c)add amazon at the end */

let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
arr.shift();
arr.splice(1, 1, "ola");
arr.push("Amazon");
console.log(arr);
