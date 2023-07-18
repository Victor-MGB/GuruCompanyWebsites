
// document
//   .getElementById("donation-button")
//   .addEventListener("click", function () {
//     var api_key = "pk_live_55669608b8d64cd3fc6f582806fb9af5bfc2a3ac";
//     var amountInput = document.getElementById("donation-amount");
//     var amount = amountInput.value;

//     if (amount === "") {
//       alert("Please enter a valid donation amount.");
//       return;
//     }

//     var paystackForm = PaystackPop.setup({
//       key: api_key,
//       email: "user@example.com",
//       amount: amount * 100,
//       currency: "NGN",
//       metadata: {
//         custom_fields: [
//           {
//             display_name: "Donor Name",
//             variable_name: "donor_name",
//             value: "John Doe",
//           },
//         ],
//       },
//       callback: function (response) {
//         console.log(response);
//         alert(" Donation Successfull: Thank you for your donation!");
//       },
//       onClose: function () {
//         console.log("Donation canceled");
//         alert(
//           "Donation canceled. check your or maybe connection problem."
//         );
//       },
//     });

//     paystackForm.openIframe();
//   });



  document
    .getElementById("donation-button")
    .addEventListener("click", function () {
      var api_key = "pk_live_55669608b8d64cd3fc6f582806fb9af5bfc2a3ac";
      var amountInput = document.getElementById("donation-amount");
      var amount = amountInput.value;

      // Validate the entered amount
      if (amount === "") {
        alert("Please enter a valid donation amount.");
        return;
      }

      var emailInput = document.getElementById("donation-email");
      var email = emailInput.value;

      var currencySelect = document.getElementById("donation-currency");
      var currency = currencySelect.value;

      var donorName = "John Doe";

      var paystackForm = PaystackPop.setup({
        key: api_key,
        email: email,
        amount: amount * 100,
        currency: currency,
        metadata: {
          custom_fields: [
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: donorName,
            },
          ],
        },
        callback: function (response) {
          console.log(response);
          // Perform actions after a successful donation
          alert("Thank you for your donation!");
          // Additional actions can be added here, such as displaying a thank you message or redirecting to a confirmation page
        },
        onClose: function () {
          console.log("Donation canceled");
          // Perform actions when the donation is canceled
          alert(
            "Donation canceled. If you have any questions, please contact us."
          );
          // Additional actions can be added here, such as displaying a message or resetting the donation form
        },
      });

      paystackForm.openIframe();
    });