document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here, you'd typically make an AJAX request to your server to validate the credentials
    // For simplicity, let's assume the username is "admin" and password is "password"
    if (username === 'admin' && password === 'password') {
      document.getElementById('loginMessage').innerText = 'Login successful!';
      // Redirect to dashboard or any other page
      // window.location.href = 'dashboard.html';
    } else {
      document.getElementById('loginMessage').innerText = 'Invalid username or password';
    }
  });
  