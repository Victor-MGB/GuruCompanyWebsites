document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const images = document.querySelectorAll(".image");
  let currentIndex = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  function showImage(index) {
    images.forEach((image) => image.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");
  }

  // Show the initial image and dot
  showImage(currentIndex);
});
