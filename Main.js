function toggleMenu() {
    document.querySelector('.menu-icon').classList.toggle('active');
}
// Get the logout button
const logoutLink = document.getElementById('log-out');

// Get the confirmation modal
const modal = document.getElementById('confirmation-modal');

// Get the confirm and cancel links inside the modal
const confirmLink = document.getElementById('confirm-logout');
const cancelLink = document.getElementById('cancel-logout');

// Function to display the confirmation modal
function displayConfirmationModal(event) {
    event.preventDefault();
    modal.style.display = 'block';
}

// Function to hide the confirmation modal
function hideConfirmationModal(event) {
    event.preventDefault();
    modal.style.display = 'none';
}

// Event listener for the logout link click
logoutLink.addEventListener('click', displayConfirmationModal);

// Event listener for the `Yes` click
confirmLink.addEventListener('click', (event) => {
    event.preventDefault();

// Perform the action
    window.location.href = "LogInForm.html";
    hideConfirmationModal(event);
});

// Event listener for the `No` click
cancelLink.addEventListener('click', hideConfirmationModal);