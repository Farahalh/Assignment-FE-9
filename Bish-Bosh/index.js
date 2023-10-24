// create array with integers between 1-100
// if divided by 3 output: 'Bish' instead of number
// if divided by 4 output: 'Bosh' instead of number
// if divided by both 3 & 4 output: 'Bish-Bosh' instead of number
// Exempel: 1, 2, Bish, Bosh, 5, Bish, 7, Bosh, Bish, 10, 11, Bish-Bosh, 13, 14, Bish [...]

function bishBosh() {
  // Values initialized
  let x = "Bish";
  let y = "Bosh";

  // Get user input values for Bish, Bosh, and loop length
  let bishValue = parseInt(document.getElementById("bish").value);
  let boshValue = parseInt(document.getElementById("bosh").value);
  let loopLength = parseInt(document.getElementById("loopLength").value);

  // Validate that the user input values are positive
  if (bishValue <= 0 || boshValue <= 0 || loopLength <= 0) {
    alert("Please enter positive values for Bish, Bosh, and Loop Length.");
    return;
  }

  // Creating for loop with num 1-100
  for (let num = 1; num <= loopLength; num++) {
    let message = "";

    // If num is dividable by 3 and 4 print xy = "Bish-Bosh"
    if (num % bishValue === 0 && num % boshValue === 0) {
      message = x + " " + y;
    }
    // If num is dividable by 4 print y = "Bosh"
    else if (num % boshValue === 0) {
      message = y;
      // If num is dividable by 3 print x = "Bish"
    } else if (num % bishValue === 0) {
      message = x;
      // If num is not dividable by 3 and 4 print num
    } else {
      message = num;
    }
    document.getElementById("JS-content").innerHTML += message + "<br>";
  }
}

bishBosh();