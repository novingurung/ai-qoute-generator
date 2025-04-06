// List of AI or dev-related quotes
const quotes = [
  "Nothing changes if Nothing Changes.",
  "The Magic you are looking for is in the work you are avoiding.",
  "One step at a time.",
  "There is no Tomorrow.",
  "Why not you?"
];

// Function to pick and display a random quote
function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
