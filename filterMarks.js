// We have given the array of marks of student . filter out the marks of students that scored 90+
let marks_arr = [78, 89, 45, 58, 79, 115, 100, 98, 95, 120];

let newArr = marks_arr.filter((value) => {
  //if we use map over here it will give the output in the bulean form
  return value > 90;
});
console.log(newArr);
