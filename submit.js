// Function to open the popup
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  // Function to close the popup
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  // Listen for form submission
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    openPopup(); // Open the popup
  });
  