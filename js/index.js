// Get necessary DOM elements
const ratings = document.querySelectorAll('.ratings button');
const submitBtn = document.getElementById('submit-btn');
const feedbackForm = document.getElementById('feedback-form');
const thankYouScreen = document.getElementById('thank-you-screen');
const selectedRatingText = document.getElementById('selected-rating');

let selectedRating = null;

// Add event listener for each rating button
ratings.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'selected' class from other buttons
        ratings.forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        this.classList.add('selected');
        
        // Update selected rating
        selectedRating = this.getAttribute('data-rating');
    });
});

// Add event listener to the Submit button
submitBtn.addEventListener('click', function() {
    if (selectedRating) {
        // Update the selected rating text in the Thank You screen
        selectedRatingText.textContent = selectedRating;

        // Hide the feedback form and show the thank you screen
        feedbackForm.style.display = 'none';
        thankYouScreen.style.display = 'block';
    } else {
        alert('Please select a rating before submitting!');
    }
});
