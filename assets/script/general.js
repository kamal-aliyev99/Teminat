const openMobNavBtn = document.getElementById("openMobNav");
const mobileNavbar = document.getElementById("mobileNav");

function openMobileNav() {
  mobileNavbar.classList.toggle("active_mobile_nav");
}

openMobNavBtn.onclick = openMobileNav;
