
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const card = document.querySelector('.card');
const popupSuccess = document.querySelector('.popupsuccess');
const dismissBtn = document.querySelector('.btn');
const invalidEmailMsg = document.querySelector('#invalidEmail');
const successEmailSpan = document.querySelector('.popupsuccess span');

// Function to validate email format
// This checks if the email follows a basic email pattern (text@text.text)
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to show error message when email is invalid
function showError() {
  invalidEmailMsg.style.display = 'block';
  emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
  emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.49)'; 
}

// Function to clear error message when email is valid
function clearError() {
  invalidEmailMsg.style.display = 'none';
  emailInput.style.borderColor = 'hsl(0, 0%, 58%)';
  emailInput.style.backgroundColor = 'transparent';
}

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the email value from the input and remove extra spaces
  const emailValue = emailInput.value.trim();
  
  // Check if email field is empty
  if (emailValue === '') {
    showError();
    return;
  }
  
  // Check if email format is valid using our validation function
  if (!isValidEmail(emailValue)) {
    showError();
    return;
  }
  
  // If we reach here, email is valid!
  clearError(); // Clear any previous error messages
  
  // Update the success message to show the user's email
  successEmailSpan.textContent = emailValue;
  
  // Hide the card and show the success popup
  card.style.display = 'none';
  popupSuccess.style.display = 'flex';
  document.body.classList.add('popup-open');

});

// Handle dismiss button click to go back to the form
dismissBtn.addEventListener('click', function() {
  card.style.display = 'flex';
  popupSuccess.style.display = 'none';
  emailInput.value = '';
  clearError();
    document.body.classList.remove('popup-open');
});