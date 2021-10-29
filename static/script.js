// NAV
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// ANIMATION
AOS.init();

// VIDEO
const play = document.querySelector(".video-demo-btn");
const closeBtn = document.querySelector(".close");
const video = document.querySelector(".video-demo");
const auto = document.querySelector(".fitness-video");

play.onclick = () => {
  video.classList.add("active");
  auto.play();
}

closeBtn.onclick = () => {
  video.classList.remove("active");
  auto.pause();
}