const toggle = document.getElementById("theme-toggle");

// Function to toggle dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");

  // Save current mode in localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Apply theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.checked = true; // Keep toggle switch in correct position
  }
});
