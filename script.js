// window.onload = function percentageFinder() {
//   function move(id, percentage) {
//     var elem = document.getElementById(id);
//     var width = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= percentage) {
//         clearInterval(id);
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width  + "%";
//       }
//     }
//   }
//   move("myBar", 20);
// };

window.onload = function () {
  // Circular Progress Bars

  animateCircularProgress("circle-1", 100); // French: 100%
  animateCircularProgress("circle-2", 90); // English: 90%
  animateCircularProgress("circle-3", 70); // Spanish: 70%

  // Linear Progress Bars

  animateLinearProgress("linear-html", "label-html", 90);
  animateLinearProgress("linear-css", "label-css", 95);
  animateLinearProgress("linear-js", "label-js", 75);
  animateLinearProgress("linear-php", "label-php", 65);
  animateLinearProgress("linear-wp", "label-wp", 85);

  //counters progress bar

  animateCounter("YearsExperience", 10); // Years Experience
  animateCounter("CompletedProjects", 143); // Completed Projects
  animateCounter("HappyCustomers", 114); // Happy Customers
  animateCounter("HonorsandAwards", 20); // Honors and Awards
  rotateSpan();
};

function animateCounter(id, percentage) {
  const element = document.getElementById(id);
  let currentPercentage = 0;
  // todo: change function
  const interval = setInterval(() => {
    if (currentPercentage >= percentage) {
      clearInterval(interval);
    } else {
      currentPercentage++;
      element.textContent = currentPercentage;
    }
  }, 20); // change here for changing speed
}
function hide(objectId) {
  const element = document.getElementById(objectId); // Set its display property to 'none'
  element.style.display = "none";
}

// Animate All Counters
function animateLinearProgress(id, labelName, percentage) {
  const bar = document.getElementById(id);
  const span = document.getElementById(labelName);
  let width = 0;

  const interval = setInterval(() => {
    if (width >= percentage) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = `${width}%`;
      span.textContent = `${width}%`;
    }
  }, 10); // change here for changing speed
}

function animateCircularProgress(id, percentage) {
  const circle = document.getElementById(id);
  const span = circle.querySelector("span");
  let currentPercentage = 0;

  const interval = setInterval(() => {
    if (currentPercentage >= percentage) {
      clearInterval(interval);
    } else {
      currentPercentage++;
      circle.style.background = `conic-gradient(#ffc107 ${
        currentPercentage * 3.6
      }deg, #444 ${currentPercentage * 3.6}deg)`;
      span.textContent = `${currentPercentage}%`;
    }
  }, 20); // change here for changing speed
}

// rotate span for header of the site

function rotateSpan() {
  let elements = document.querySelectorAll(".rotate-span");
  elements.forEach(function (el) {
    let toRotate = JSON.parse(el.getAttribute("data-rotate"));
    let period = parseInt(el.getAttribute("data-period"), 10) || 2000;
    let loopNum = 0;
    let isDeleting = false;
    function tick() {
      let i = loopNum % toRotate.length;
      let fullTxt = toRotate[i];
      if (isDeleting) {
        el.querySelector(".wrap").textContent = fullTxt.substring(
          0,
          el.querySelector(".wrap").textContent.length - 1
        );
      } else {
        el.querySelector(".wrap").textContent = fullTxt.substring(
          0,
          el.querySelector(".wrap").textContent.length + 1
        );
      }
      let delta = 300 - Math.random() * 250;
      if (isDeleting) {
        delta /= 4;
      }
      if (!isDeleting && el.querySelector(".wrap").textContent === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && el.querySelector(".wrap").textContent === "") {
        isDeleting = false;
        loopNum++;
        delta = 10;
      }
      setTimeout(tick, delta);
    }
    tick();
  });
}
