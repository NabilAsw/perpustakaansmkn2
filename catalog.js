const themeToggle = document.getElementById('theme-toggle');

// Function to toggle between light and dark mode
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
});

// Set initial theme based on the saved preference or default to light mode
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  document.body.classList.add(savedTheme);
  if (savedTheme === 'dark-mode') {
    themeToggle.checked = true;
  }
});

// Save theme preference to localStorage
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', 'light-mode');
  }
});

function toggleDropdown() { 
  var dropdownContent = document.getElementById("dropdown-content"); 
  if (dropdownContent.style.display === "block") { 
    dropdownContent.style.display = "none"; 
  } else { 
    dropdownContent.style.display = "block"; 
  } 
} 

window.onclick = function(event) { 
  if (!event.target.closest('.dropdown')) { //Checks if the click was outside the dropdown 
    var dropdowns = document.getElementsByClassName("dropdown-content"); 
    for (var i = 0; i < dropdowns.length; i++) { 
      var openDropdown = dropdowns[i]; 
      if (openDropdown.style.display === "block") { 
        openDropdown.style.display = "none"; 
      } 
    } 
  } 
}