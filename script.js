const nav = document.querySelector(".navigation");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    navToggle.classList.remove("active");
  } else {
    nav.style.display = "flex";
    navToggle.classList.add("active");
  }
});

const navItems = document.querySelectorAll(".navigation ul li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.style.display = "none";
    navToggle.classList.remove("active");
  });
});
