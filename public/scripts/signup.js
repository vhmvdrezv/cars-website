document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const formMessage = document.getElementById('signupMessage');
    const goToLoginButton = document.getElementById('goToLogin');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Validate form inputs
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
      if (!username || !email || !password || !confirmPassword) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
      }
  
      if (password !== confirmPassword) {
        formMessage.textContent = 'Passwords do not match.';
        formMessage.style.color = 'red';
        return;
      }
  
      // Basic email format validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
      }
  
      // Simulate form submission
      formMessage.textContent = 'Creating account...';
      formMessage.style.color = 'black';
  
      // Submit the form data to the server
      fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
      .then(response => {
        if (response.ok) { // Check if the status code is 200-299
          return response.json();
        } else {
          throw new Error('Failed to create account');
        }
      })
      .then(data => {
        formMessage.textContent = 'Account created successfully!';
        formMessage.style.color = 'green';
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        formMessage.textContent = 'An error occurred. Please try again later.';
        formMessage.style.color = 'red';
      });
    });
  
    // Redirect to the login page
    goToLoginButton.addEventListener('click', () => {
      window.location.href = '/loginpage';
    });
  });