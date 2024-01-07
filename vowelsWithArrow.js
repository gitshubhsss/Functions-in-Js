//1)Create a arrow funtion that takes a String as an arguments and returns the numebers of vowels in the string
const countVowels = (str) => {
  let count = 0;
  for (const value of str) {
    if (
      value === "a" ||
      value === "e" ||
      value === "i" ||
      value === "o" ||
      value === "u"
    ) {
      count++;
    }
  }
  return count;
};
let string = "shubham is software engineer at google";
let result = countVowels(string);
console.log(result);
