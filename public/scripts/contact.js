document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Validate form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all fields.';
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
      formMessage.textContent = 'Sending message...';
      formMessage.style.color = 'black';
  
      // Here you would normally submit the form data to the server
      // Using fetch, AJAX, or any other method.
      fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => {
      if (response.ok) { // Check if the status code is 200-299
        return response.json();
      } else {
        throw new Error('Failed to send message');
      }
    })
    .then(data => {
      formMessage.textContent = 'Message sent successfully!';
      formMessage.style.color = 'green';
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      formMessage.textContent = 'An error occurred. Please try again later.';
      formMessage.style.color = 'red';
    });
  });
});