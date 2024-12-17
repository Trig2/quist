// const openMobileNav = document.querySelector(".open-mobile-menu");
// const closeMobileNav = document.querySelector(".close-nav");
// openMobileNav.addEventListener("click", () => {
//   document.getElementById("nav-links").classList.add("active");
// });
// closeMobileNav.addEventListener("click", () => {
//   document.getElementById("nav-links").classList.remove("active");
// });

const bannerElement = document.querySelector(".banner");
const position = [];
function circleFactory() {
  const circleContainer = document.createElement("div");
  circleContainer.className = "sty";
  bannerElement.appendChild(circleContainer);
}
for (let i = 0; i < 50; i++) {
  circleFactory();
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  position.push({
    x: randomX,
    y: randomY,
  });
}
function drawCircles() {
  const circles = document.querySelectorAll(".sty");
  circles.forEach((circle, index) => {
    const newPosition = position[index];
    circle.style = `left:${newPosition.x}px;top:${newPosition.y}px`;
  });
}
drawCircles();
