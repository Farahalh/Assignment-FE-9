// create array with integers between 1-100
// if divided by 3 output: 'Bish' instead of number
// if divided by 4 output: 'Bosh' instead of number
// if divided by both 3 & 4 output: 'Bish-Bosh' instead of number
// Exempel: 1, 2, Bish, Bosh, 5, Bish, 7, Bosh, Bish, 10, 11, Bish-Bosh, 13, 14, Bish [...]

// Values initialized
let x = "Bish";
let y = "Bosh";
let xy = "Bish-Bosh";

// Creating for loop with num 1-100
for (let num = 1; num <= 100; num++) {
  // If num is dividable by 3 and 4 print xy = "Bish-Bosh"
  if (num % 3 === 0 && num % 4 === 0) {
    console.log(num + " " + xy);
  }
  // If num is dividable by 4 print y = "Bosh"
  else if (num % 4 === 0) {
    console.log(num + " " + y);
    // If num is dividable by 3 print x = "Bish"
  } else if (num % 3 === 0) {
    console.log(num + " " + x);
    // If num is not dividable by 3 and 4 print num
  } else {
    console.log(num);
  }
}
