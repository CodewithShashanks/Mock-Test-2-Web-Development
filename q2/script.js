var textInput = document.getElementById("textInput");
var submitButton = document.getElementById("submitButton");
var textList = document.getElementById("textList");

submitButton.addEventListener("click", function() {
  var text = textInput.value;
  if (text.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    textList.appendChild(listItem);
    textInput.value = "";
  }
});

textInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // Enter key
    submitButton.click();
    event.preventDefault();
  }
});
