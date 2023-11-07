const mobileNav = document.querySelector(".mobile-nav");
const openMobileNav = document.querySelector(".bars-icon");
const closeMobileNav = document.querySelector(".x-icon");
const overlayElement = document.querySelector(".overlay");

closeMobileNav.addEventListener("click", () => {
  handleClassNone(mobileNav, overlayElement);
});

openMobileNav.addEventListener("click", () => {
  handleClassBlock(mobileNav, overlayElement);
});

overlayElement.addEventListener("click", () => {
  handleClassNone(mobileNav, overlayElement);
});

function handleClassBlock(element, overlay) {
  element.style.display = "block";
  overlay.style.display = "block";
}

function handleClassNone(element, overlay) {
  element.style.display = "none";
  overlay.style.display = "none";
}
