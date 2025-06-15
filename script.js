function toggleMenu() {
  const navList = document.querySelector('nav ul');
  const toggleButton = document.querySelector('.menu-toggle');

  navList.classList.toggle('active');

  if (navList.classList.contains('active')) {
    toggleButton.style.display = 'none';
  } else {
    toggleButton.style.display = 'block';
  }
}
