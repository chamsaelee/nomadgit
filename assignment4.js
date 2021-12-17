const title = document.querySelector("h1");
const colors = ["#0066CC", "#6600CC", "#336600", "#00FFCC"];

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The Mouse is HERE!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "The Mouse is GONE!";
    title.style.color = colors[1];
  },
  handleMouseRight: function () {
    title.innerText = "That was a RIGHT click!";
    title.style.color = colors[2];
  },
  handleWindowResize: function () {
    title.innerText = "Window is RESIZED!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
title.addEventListener("contextmenu", superEventHandler.handleMouseRight);
window.addEventListener("resize", superEventHandler.handleWindowResize);
