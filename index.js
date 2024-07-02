// Formula //
// cels (5°C × 9/5) + 32 = 41°F
// farn (20°F − 32) × 5/9 = -6.667°C

// var cels = parseFloat(prompt("Enter Celsius : "));
// var farn = cels * (9 / 5) + 32;
// console.log("Fahrenheit = " + farn);

// var farn = parseFloat(prompt("Enter Fahrenheit : "));
// var cels = ((farn - 32) * 5) / 9;
// var rounded = Math.round(cels * 10) / 10;
// console.log("Celsius = " + rounded);

function submitResult() {
  var drop = document.getElementById("dropDown").value;
  var input = document.getElementById("inputValue").value;
  var resultId = document.getElementById("result");
  if (!input) {
    resultId.innerText = "Please Put Numaric Value";
    return false;
  }

  if (drop === "farnToCels") {
    var cels = ((input - 32) * 5) / 9;
    var rounded = Math.round(cels * 10) / 10;
    resultId.innerText = "Celsius " + rounded;
  } else if (drop === "celsToFarn") {
    var farn = input * (9 / 5) + 32;
    resultId.innerText = "Fahrenheit " + farn;
  } else {
    resultId.innerText = "Please select Convert Method!!";
  }
}

function submitAll(e) {
  e.preventDefault();

  var num1 = parseInt(document.getElementById("noA").value);
  var num2 = parseInt(document.getElementById("noB").value);
  var num3 = parseInt(document.getElementById("noC").value);
  var large = document.getElementById("result");

  if (num1 > num2) {
    large.innerText = num1;
  } else if (num2 > num3) {
    large.innerText = num2;
  } else {
    large.innerText = num3;
  }
}
