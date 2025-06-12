// Show the greeting card when the page loads
window.onload = function() {
  var card = document.getElementById('greeting-card');
  if (card) {
    card.style.display = 'flex';
  }
}

// Hide the greeting card when the button is clicked
function closeGreeting() {
  var card = document.getElementById('greeting-card');
  if (card) {
    card.style.display = 'none';
  }
}
