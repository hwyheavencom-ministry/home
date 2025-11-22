function joinCommunity() {
  alert("Thank you for joining our Hwy-Heaven community! We'll be in touch soon.");
}

function sendMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been received:\n"${message}"`);
  return false; // Prevent actual form submission
}
