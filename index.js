/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const hour = parseInt(string.split(":")[0])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour < 17) {
    console.log("HOW???")
    console.log(hour)
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
} 
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const $greetingHeader = document.getElementById("greeting")
  $greetingHeader.textContent = string
}
