// This is a simple chatbot that displays messages in the chat-box
let chatBox = document.getElementById("chat-box");

function appendMessage(content, fromUser = true) {
  let messageDiv = document.createElement("div");
  messageDiv.classList.add(fromUser ? "user-message" : "bot-message");
  messageDiv.textContent = content;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

function sendMessage() {
  let userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  // Display user's message
  appendMessage(userInput);

  // Simulate bot response (this can be replaced with actual API or backend)
  setTimeout(() => {
    let botResponse = "You said: " + userInput;
    appendMessage(botResponse, false);
  }, 1000);

  // Clear input field
  document.getElementById("user-input").value = "";
}
