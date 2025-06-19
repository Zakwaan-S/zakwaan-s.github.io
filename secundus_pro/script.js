function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('.mode-toggle i');
  if (document.body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  const arrow = button.querySelector('.arrow');
  const allDropdowns = document.querySelectorAll('.dropdown-list');
  const allArrows = document.querySelectorAll('.arrow');

  // Close other dropdowns
  allDropdowns.forEach(dl => {
    if (dl !== dropdown) dl.style.display = 'none';
  });
  allArrows.forEach(arw => {
    if (arw !== arrow) arw.classList.remove('rotate');
  });

  // Toggle clicked dropdown
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    arrow.classList.remove('rotate');
  } else {
    dropdown.style.display = 'block';
    arrow.classList.add('rotate');
  }
}
