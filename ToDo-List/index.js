// Function to create a new list item
function newItem() {
    // Get the input value and trim any whitespace
  const inputValue = document.getElementById("userInput").value.trim();

  // If the input value is empty, displays an alert and exits the function
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  // Get a reference to the unordered list
  const ul = document.getElementById("list");
  // Create a new list item and set its text to the input value
  const li = document.createElement("li");
  li.textContent = inputValue;

  // Create a close button and append it to the list item
  const close = document.createElement("span");
  close.textContent = "\u00D7";
  close.className = "close";
  // Add event listener to the "close" button to remove the list item when clicked
  close.onclick = function () {
    ul.removeChild(li);
  };

  // Append the "close" button to the list item
  li.appendChild(close);
  // Append the list item to the unordered list
  ul.appendChild(li);

  // Clear input field
  document.getElementById("userInput").value = "";
}

// Event listener for marking items as checked
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Initial list items
const initialItems = [
  "Read a book",
  "Have a snack",
  "Take a walk",
  "Drink coffee",
];
const ul = document.getElementById("list");
// Add the intital list items to the unordered list
initialItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
