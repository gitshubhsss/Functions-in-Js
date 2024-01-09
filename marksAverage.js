// 1)for a given array with marks of student -> [85,97,44,37,76,60] find the average marks of the entire class //reduce fuction.

let marksArr = [85, 97, 44, 37, 76, 60]; //66.5

let avgMarks = marksArr.reduce((prev, curent) => {
  return prev + curent;
});
console.log(avgMarks / marksArr.length);
