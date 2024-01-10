/* 25)Write a arrow function to generate an array between two integers of 1 step length.
    console.log(rangeBetwee(4, 7));
    OUTPUT :[4, 5, 6, 7]
    console.log(rangeBetwee(-4, 7));
    OUTPUT :[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7] */
    let arr = [];
    let rangeBetween = (start, end) => {
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    };
    console.log(rangeBetween(4, 7));
    