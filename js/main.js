$(window).on("load", function () {
   //vide.js - video background

   $("#header").vide("./video/header/hacker", {
      bgColor: "#64947b",
   });
});

var audio = document.querySelector(".audio");
audio.autoplay;

const title = document.querySelector(".header-title");

window.addEventListener("click", () => {
   audio.play();
});

window.addEventListener("scroll", () => {
   audio.play();
});

audio.volume = 0.4;
