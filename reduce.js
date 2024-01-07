//if we want single value in return
//reduces performs some operations & reduces the array to a single value.it returns that value
let arr = [1, 2, 3, 4, 5, 45, 1];
const largest = arr.reduce((prev, current) => {
  return prev > current ? prev : current;
});
console.log(largest);
