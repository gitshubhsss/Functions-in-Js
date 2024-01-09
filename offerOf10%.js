/*2) For a given array with prices of 5 items ->[250,645,300,900,50] All items have an offer of 10% off on them . change teh array to store the final price after applying offer 
use map funtion to do the same task*/

let pricesArr = [250, 645, 300, 900, 50];

let offerArr = pricesArr.map((values) => {
  let discount_prices = values - (values * 10) / 100;
  return discount_prices;
});
console.log(offerArr);
