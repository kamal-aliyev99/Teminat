const openMobNavBtn = document.getElementById("openMobNav");
const mobileNavbar = document.getElementById("mobileNav");
const scroll_top = document.querySelector("#scroll_top");
const fileInput = document.querySelector("#file");
const fileLabel = document.querySelector(".custom_file_upload");

function openMobileNav() {
  mobileNavbar.classList.toggle("active_mobile_nav");
}

openMobNavBtn.onclick = openMobileNav;

window.addEventListener("scroll", () => {
  if (window.scrollY < 120) {
    scroll_top.style.display = "none";
  } else {
    scroll_top.style.display = "inline-block";
  }
});

scroll_top.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

fileInput.addEventListener("change", function () {
  const fileName = fileInput.value.split("\\").pop();
  fileLabel.textContent = fileName || "Faylı endir";
});
