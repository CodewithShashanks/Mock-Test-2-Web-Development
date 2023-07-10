var loader = document.getElementById("loader");
var dataList = document.getElementById("dataList");

// Display the skeleton loader
function showLoader() {
  loader.style.display = "block";
}

// Hide the skeleton loader
function hideLoader() {
  loader.style.display = "none";
}

// Display the fetched data
function displayData(data) {
  hideLoader();
  data.forEach(function(item) {
    var listItem = document.createElement("li");
    listItem.textContent = item.title;
    dataList.appendChild(listItem);
  });
}

// Fetch data from the API
function fetchData() {
  showLoader();
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayData(data);
    })
    .catch(function(error) {
      console.log("Error:", error);
      hideLoader();
    });
}

// Call the fetchData function to fetch and display data
fetchData();
