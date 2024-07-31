document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const formMessage = document.getElementById('loginMessage');
    const goToSignupButton = document.getElementById('goToSignup');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Validate form inputs
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (!username || !password) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
      }
  
      // Simulate form submission
      formMessage.textContent = 'Logging in...';
      formMessage.style.color = 'black';
  
      // Submit the form data to the server
      fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.ok) { // Check if the status code is 200-299
          return response.json();
        } else {
          throw new Error('Failed to log in');
        }
      })
      .then(data => {
        formMessage.textContent = 'Login successful!';
        formMessage.style.color = 'green';
        // Optionally, redirect the user or perform other actions
      })
      .catch(error => {
        console.error('Error:', error);
        formMessage.textContent = 'Invalid credentials. Please try again.';
        formMessage.style.color = 'red';
      });
    });
  
    // Redirect to the sign-up page
    goToSignupButton.addEventListener('click', () => {
      window.location.href = '/signuppage';
    });
  });