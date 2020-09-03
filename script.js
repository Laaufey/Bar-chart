"use strict";
// window.addEventListener("load", init);
// function init() {}
// const bars = document.querySelectorAll(".bar");
// console.log(bars);
// function getNumberOfCustomers() {
//   return Math.floor(Math.random() * 32);
// }
// // const queueSize = getNumberOfCustomers();
// function setBarHeight() {
//   bars.forEach((bar) => {
//     console.log(bar, "try");
//     const queueSize = getNumberOfCustomers();
//     console.log(queueSize, "test");
//     bar.style.height = queueSize + "px";
//     // bar.style.height = queueSize;
//   });
// }
// setBarHeight();

window.addEventListener("load", start);

// for (let i = 0; i < 40; i++) {
//   bar[i].style.height = model[i] + "px";
// }
let allBars = document.querySelectorAll(".bar");
let array = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));

console.log(array);

function start() {
  console.log(start);
  const queueSize = getNumberOfCustomers();
  function getNumberOfCustomers() {
    // FAKE: gives a completely random number
    return Math.floor(Math.random() * 32);
  }
  setTimeout(start, 1000);
  array.shift();
  array.push(queueSize);

  for (let i = 0; i < 40; i++) {
    allBars[i].style.height = array[i] + "vw";
  }
}
