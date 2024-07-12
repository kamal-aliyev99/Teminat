const openMobNavBtn = document.getElementById("openMobNav");
const mobileNavbar = document.getElementById("mobileNav");

function openMobileNav() {
  mobileNavbar.classList.toggle("active-mobile-nav");
}

openMobNavBtn.onclick = openMobileNav;
