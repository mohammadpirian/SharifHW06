"use strict";

const massage = document.querySelector(".massage");
function shownNotification(item) {
  const styleTop = item.top;
  massage.style.top = `${styleTop}px`;
  massage.style.right = `${styleTop}px`;
  massage.innerHTML = item.html;
  massage.classList.add = item.className;
  console.log(massage.classList);
}

shownNotification({
  top: +prompt("top"),
  right: +prompt("right"),
  html: prompt("write sth"),
  className: "welcome",
});
