"use strict";
const massage = document.querySelector(".massage");
function helloworld(item) {
  const styletop = item.top;
  massage.style.top = `${styletop}px`;
  massage.style.right = `${styletop}px`;
  massage.innerHTML = item.html;
  massage.classList.add = item.className;
  console.log(massage.classList);
}
helloworld({
  top: 500,
  right: 500,
  html: "Hello",
  className: "welcome",
});
