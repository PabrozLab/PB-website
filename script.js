//  fetch('header.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('header').innerHTML = data;
//       bindHeaderEvents(); // re-attach events after loading
//     });

// function toggleMenu() {
//   const navList = document.querySelector('nav ul');
//   const toggleButton = document.querySelector('.menu-toggle');

//   navList.classList.toggle('active');

//   if (navList.classList.contains('active')) {
//     toggleButton.style.display = 'none';
//   } else {
//     toggleButton.style.display = 'block';
//   }
// }

 const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  });
