const courseContainers = document.querySelectorAll(".course");

courseContainers.forEach((container) => {
  const descriptionElement = container.querySelector(".course-description");

  const initialDescription = descriptionElement.textContent;

  container.addEventListener("mouseenter", () => {
    descriptionElement.textContent =
      initialDescription + " More information about the course.";
  });

  container.addEventListener("mouseleave", () => {
    descriptionElement.textContent = initialDescription;
  });
});
