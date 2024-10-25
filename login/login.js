// Handle login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    // Check if the user exists in localStorage
    let storedUser = localStorage.getItem(username);

    if (storedUser) {
        let user = JSON.parse(storedUser);
        
        // Check if the password matches
        if (user.password === password) {
            document.getElementById('login-message').textContent = 'Login successful!';
            document.getElementById('login-message').style.color = 'green';

            // Redirect to the home page after successful login
            setTimeout(() => {
                window.location.href = 'index.html';  // Redirect to home page
            }, 1000); // Wait for 1 second before redirecting

        } else {
            document.getElementById('login-message').textContent = 'Incorrect password.';
        }
    } else {
        document.getElementById('login-message').textContent = 'User does not exist. Please register first.';
    }
});
