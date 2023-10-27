//prompt
const userInput = prompt("Enter your name:");
console.log("You entered: " + userInput);




//HTML forms

{/* <form id="myForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById("name").value;
    console.log("Name: " + name);
  });
</script> */}


// using readline in node.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (name) {
  console.log("You entered: " + name);
  rl.close();
});



// Using HTML input elements

{/* <input type="text" id="userInput">
<button onclick="getUserInput()">Get Input</button>

<script>
  function getUserInput() {
    const userInput = document.getElementById("userInput").value;
    console.log("You entered: " + userInput);
  }
</script> */}


