let mainNavigation = document.getElementById('the-links');
let toggleNav = document.getElementById('toggleNav');

toggleNav.addEventListener('click', function() {
  mainNavigation.classList.toggle('active');
});
