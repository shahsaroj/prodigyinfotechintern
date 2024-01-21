 // JavaScript to toggle a class for submenus
 document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.submenu');

    menuItems.forEach(function(item) {
      item.parentNode.addEventListener('click', function() {
        item.classList.toggle('active');
      });
    });
  });

  // JavaScript to highlight the active page
  document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.hash.substr(1);
    var currentMenuItem = document.getElementById(currentPage);

    if (currentMenuItem) {
      currentMenuItem.classList.add('active-item');
    }
  });