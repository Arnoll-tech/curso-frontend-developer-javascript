const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIconMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
carritoIconMenu.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
   const isDestoktopMenu = menuEmail.classList.contains('inactive');

   if (!isDestoktopMenu) {
      aside.classList.add('inactive');
   }
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed) {
      aside.classList.add('inactive');
   }
   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
   }else{
      desktopMenu.classList.add('inactive');
   }
   aside.classList.toggle('inactive');
}