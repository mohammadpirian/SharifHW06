"use strict";

const divNotif = document.querySelector(".massage");
function shownNotification(item) {
  const styleTop = item.top;
  divNotif.style.top = `${styleTop}px`;
  divNotif.style.right = `${styleTop}px`;
  divNotif.innerHTML = item.html;
  divNotif.classList.add = item.className;
  console.log(divNotif.classList);
}

shownNotification({
  top: +prompt("top"),
  right: +prompt("right"),
  html: prompt("write sth"),
  className: "welcome",
});
