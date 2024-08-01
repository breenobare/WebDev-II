// Function to display the submitted data
function displaySubmittedData(event) {
  event.preventDefault(); // Prevent form submission

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const dataOutput = document.getElementById('dataOutput');
  dataOutput.innerHTML = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
  `;

  document.getElementById('form').reset(); // Reset the form after submission
}

// Event listener for the form submission
document.getElementById('form').addEventListener('submit', displaySubmittedData);

// Event listener for the cancel button in the feedback form
document.getElementById('cancelButton').addEventListener('click', function() {
  document.getElementById('form').reset();
});
