// Access the form and result element
var calculatorForm = document.getElementById("calculatorForm");
var resultElement = document.getElementById("result");

// Add click event listener to the Multiply button
document
  .getElementById("multiplyButton")
  .addEventListener("click", function () {
    calculate("multiply");
  });

// Add click event listener to the Divide button
document.getElementById("divideButton").addEventListener("click", function () {
  calculate("divide");
});

// Function to perform the calculation
function calculate(operation) {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Check if both numbers are valid
  if (!isNaN(num1) && !isNaN(num2)) {
    var result;

    // Perform the selected operation
    if (operation === "multiply") {
      result = num1 * num2;
    } else if (operation === "divide") {
      result = num1 / num2;
    }

    // Display the result
    resultElement.textContent = "The Result is: " + result;
  } else {
    // Display an error message if the input is invalid
    resultElement.textContent = "Please enter valid numbers.";
  }
}
