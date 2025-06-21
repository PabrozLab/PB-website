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


  // SEARCH FUNCTIONALITY
const searchInput = document.querySelector('.search-bar');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(searchText) ? "block" : "none";
    });
  });
}

// BUY BUTTON FEEDBACK (snackbar)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        showSnackbar("Redirecting to Order Form...");
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 1000);
    });
});

// SNACKBAR UI
function showSnackbar(message) {
    let snackbar = document.createElement('div');
    snackbar.textContent = message;
    snackbar.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: #fff;
        padding: 12px 24px;
        border-radius: 5px;
        z-index: 999;
        opacity: 0.9;
        font-family: Quicksand, sans-serif;
    `;
    document.body.appendChild(snackbar);
    setTimeout(() => snackbar.remove(), 3000);
}

// Init cart if not already there
if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}

// Add product to cart
document.querySelectorAll(".btn-add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));

        showSnackbar(`${name} added to cart`);
    });
});


// study materials 

  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});

//  filter 
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.card');

  if (filterButtons.length && courseCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        courseCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  } else {
    console.warn("Filter buttons or course cards not found in the DOM.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Expand course content
  document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;

      if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = "🔍 View Details";
      } else {
        details.style.display = 'block';
        button.textContent = "🔽 Hide Details";
      }
    });
  });
});

