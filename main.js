//------------------------ progress in skills -------------------
let spans = document.querySelectorAll(".progress span");
let skillsSecion = document.querySelector(".skills");

//------------------------counting--------------------

let nums = document.querySelectorAll(".awesome .number");
let awesomeSection = document.querySelector(".awesome");
let started = false;

function counter(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

//------------------OnScroll function -----------------
window.onscroll = function () {
  // -----------------=> counting <=------------------
  if (window.scrollY >= awesomeSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => counter(num));
    }
    started = true;
  }

  // -----------------=> Change width <=------------------

  if (window.scrollY >= skillsSecion.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
