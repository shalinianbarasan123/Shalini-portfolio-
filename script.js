// Mobile menu toggle

function toggleMenu() {

  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("active");

}

// Contact form simple submit action

document.querySelector(".contact-form").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

});