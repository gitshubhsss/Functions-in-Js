/*5)Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"]; */

let arr_to_string =(arr) =>{

   return arr.join("")
}
let arr=["Red", "Green", "White", "Black"];
console.log(arr_to_string(arr));