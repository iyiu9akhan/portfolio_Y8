// header menu drop-down after scroll || ends here
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const banner = document.querySelector("#banner");
  const bannerBottom = banner.offsetTop + banner.offsetHeight / 2;

  if (window.scrollY >= bannerBottom) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
// header menu drop-down after scroll || starts here
