// Get elements
const input = document.querySelector('input[type="text"]');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

// Connect to the server using Socket.IO
const socket = io();

// Function to append new messages to the chat
function appendMessage(msg, align = 'end') {
  const msgDiv = document.createElement('div');
  msgDiv.className = `flex justify-${align}`;
  msgDiv.innerHTML = `<div class="chat-bubble">${msg}</div>`;
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;  // Scroll to the latest message
}

// Handle sending messages when the send button is clicked
sendBtn.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    // Emit the message to the server
    socket.emit('chat message', input.value);
    appendMessage(input.value, 'end');  // Display message in chat
    input.value = '';  // Clear input field
  }
});

// Handle pressing 'Enter' to send a message
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendBtn.click();
  }
});

// Listen for messages from the server
socket.on('chat message', (msg) => {
  appendMessage(msg, 'start');  // Display incoming message in chat
});
