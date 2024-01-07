//define an array and print the squares of each elments in the array
let arr = [1, 2, 3, 4];
arr.forEach((value) => {
  console.log(value * value); //couldent return value *value we need to use console.log(value*value);
});
//using this am gettint the square of elements but not in the form of array
//to get the elemets in the form of array will use map funtion

let newArr = arr.map((value) => {
  return value * value;
});
console.log(newArr);
