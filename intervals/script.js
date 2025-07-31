let seconds = 0;

// Update counter every second
const timer = setInterval(() => {
  seconds++;
  console.log(`Time on page: ${seconds} seconds`);
}, 1000);

// Detect when the user is leaving the page
window.addEventListener("beforeunload", () => {
  console.log(`User stayed on the page for ${seconds} seconds`);
});

