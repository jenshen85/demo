"use strict"

function addDiv(node, className, id, msg) {
  let el = document.createElement(node);
  el.className = className;
  el.id = id;
  el.textContent = msg;
  document.body.appendChild(el);
}

addDiv("div", "app", "app", "Hello!!!");
addDiv("span", "string", "app", "Hello!!!")