const form = document.getElementById('contactForm');
const result = document.getElementById('result');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showResult('Please complete all fields before submitting.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showResult('Enter a valid email address.', 'error');
    return;
  }

  const data = {
    name,
    email,
    message,
    submittedAt: new Date().toLocaleString(),
  };

  console.log('Form submitted:', data);
  showResult(`Thanks, ${name}! Your message has been submitted.`, 'success');
  form.reset();
});

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showResult(message, type) {
  result.textContent = message;
  result.className = `result ${type}`;
}
