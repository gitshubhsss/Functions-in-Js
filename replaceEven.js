/*6)Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8. 
	using map funtion */

let user_num = parseInt(prompt("Enter a number"));

let result = (numbers) => {
  numstring = user_num.toString().split("");
  let insert_dashes = numstring
    .map((num, index) => {
      if (num % 2 === 0) {
        return num + "-";
      }
      return num;
    })
    .join("");
  return insert_dashes;
};

alert(result(user_num));
