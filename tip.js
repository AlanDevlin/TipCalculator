//Hide the tip amount on load
document.getElementById("displayTip").style.display = "none";
document.getElementById("each").style.display = "none";

function calculate() {
  let billTotal = document.getElementById("billTotal").value;
  const TIP_PERCENTAGE = document.getElementById("tipAmount").value;
  let numberOfPeople = document.getElementById("noPeople").value;


  //validate input
  if (billTotal === "" || TIP_PERCENTAGE == 0) {
    alert("Please enter all values");
    return;
  }
  if(billTotal <= 0) {
    alert("Please enter a positive number for your bill");
    document.getElementById("tipForm").reset();
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let totalTip = (billTotal * TIP_PERCENTAGE) / numberOfPeople;
  //round to two decimal places
  totalTip = Math.round(totalTip * 100) / 100;
  document.getElementById("tip").innerHTML = totalTip;
  //Standardizes having two decimal places (e.g. 0.50 instead of 0.5)
  totalTip = totalTip.toFixed(2);
  //Display the tip
  document.getElementById("displayTip").style.display = "block";
  document.getElementById("tip").innerHTML = totalTip;
}

//click to call function
document.getElementById("calculate").onclick = function() {
  calculate();
};

//click to clear tip amount when reset button is pressed
document.getElementById("resetButton").onclick = function() {
  document.getElementById("displayTip").style.display = "none";
}
