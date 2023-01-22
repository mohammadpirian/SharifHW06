let stepCounter = {
    counter: 0,
    increase: function () {
      this.counter++;
      return this;
    },
    decrease: function () {
      this.counter--;
      return this;
    },
    reset: function () {
      this.counter = 0;
      return this;
    },
    read: function () {
      console.log(this.counter);
      return this;
    },
  };


// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const readBtn = document.getElementById("read");

// let stepCounter = {
//   counter: 0,
// };
// function increase(counter) {
//   counter = ++counter;
// }
// function decrease(counter) {
//   counter = --counter;
// }
// function reset(counter) {
//   counter = 0;
// }
// function read(counter) {}
// increaseBtn.addEventListener("click", increase(stepCounter.counter));
// decreaseBtn.addEventListener("click", decrease(stepCounter.counter));
// resetBtn.addEventListener("click", reset(stepCounter.counter));
// readBtn.addEventListener("click", read(){

// });