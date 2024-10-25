document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    if (email) {
        document.getElementById('confirmationMessage').classList.remove('hidden');
        document.getElementById('subscribeForm').reset(); // Reset form
    }
});
