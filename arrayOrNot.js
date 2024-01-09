/*4)Write a JavaScript function to check whether an `input` is an array or not
  console.log(is_array('shubham ranajne'));
 console.log(is_array([1, 2, 4, 0])); */
 let arr=[1,4,5,7];
 let isNotArr="shubham ranjane";
let is_array=(input)=>{
  return  Array.isArray(input)
}
console.log(is_array(arr));
console.log(is_array(isNotArr));

