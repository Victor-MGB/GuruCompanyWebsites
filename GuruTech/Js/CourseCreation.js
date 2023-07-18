// const courseContainers = document.querySelectorAll(".course");

// courseContainers.forEach((container) => {
//   const descriptionElement = container.querySelector(".course-description");

//   const initialDescription = descriptionElement.textContent;

//   container.addEventListener("mouseenter", () => {
//     descriptionElement.textContent =
//       initialDescription + " More information about the course.";
//   });

//   container.addEventListener("mouseleave", () => {
//     descriptionElement.textContent = initialDescription;
//   });
// });


function handleEnroll(courseId, amount) {
  var handler = PaystackPop.setup({
    key: "pk_live_55669608b8d64cd3fc6f582806fb9af5bfc2a3ac",
    email: "user@example.com", // Replace with the user's email
    amount: amount * 100, // Convert amount to the smallest currency unit (e.g., kobo)
    currency: "NGN", // Replace with the appropriate currency code
    metadata: {
      custom_fields: [
        {
          display_name: "Course ID",
          variable_name: "course_id",
          value: courseId,
        },
      ],
    },
    callback: function (response) {
      if (response.status === "success") {
        // Payment is successful, finalize the transaction and provide course access
        console.log("User enrolled in course: " + courseId);
        alert("Congratulations! You now have access to the course.");

        // You can customize the action here, such as redirecting to the course page or displaying a success message
      } else {
        // Payment failed or not completed, display an error message
        console.log("Payment failed for course: " + courseId);
        alert("Payment failed. Please try again or contact support.");

        // You can customize the action here, such as displaying an error message or resetting the enrollment button
      }
    },
    onClose: function () {
      // Handle the case when the user closes the Paystack payment modal
      console.log("Payment modal closed without completing the transaction.");
      alert("Payment canceled. Please try again or contact support.");

      // You can customize the action here, such as displaying a message or resetting the enrollment button
    },
  });

  handler.openIframe();
}
