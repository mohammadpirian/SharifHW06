"use strict";

const massage = document.querySelector(".massage");
function shownNotification(item) {
  const styleTop = item.top;
  const styleRight = item.right;
  massage.style.top = `${styleTop}px`;
  massage.style.right = `${styleRight}px`;
  massage.innerHTML = item.html;
  massage.classList.add = item.className;
  console.log(massage.classList);
}

shownNotification({
  top: +prompt("top"),
  right: +prompt("right"),
  html: prompt("write sth"),
  className: prompt("Class"),
});
