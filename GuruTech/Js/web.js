const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// window.location.href = "about.html";

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlide();
  });
});

function showSlide() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
      dots[index].classList.add("active");
    } else {
      slide.style.display = "none";
      dots[index].classList.remove("active");
    }
  });
}

showSlide();

document.getElementById('menu-toggle').addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
});


var contactButton = document.getElementById("contactButton");
var loadingIndicator = document.getElementById("loadingIndicator");

contactButton.addEventListener("click", function () {
  loadingIndicator.style.display = "block";

  contactButton.disabled = true;

  setTimeout(function () {
    window.location.href = "/GuruTech/Html/contact.html";
  }, 3000);
});
