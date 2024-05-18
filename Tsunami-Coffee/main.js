const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu-item");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 550 && nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});

// let bars = document.getElementById("bars");
// bars.addEventListener("click", () => {
//   if (bars.className === "fa fa-bars") {
//     bars.className = "fa fa-close";
//   } else {
//     bars.className = "fa fa-bars";
//   }
// });
