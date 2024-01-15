let socket = io();

async function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;

  try {
    socket.emit("sendMessage", { message }); 
    displaySentMessage(message); 
  } catch (error) {
    console.error("Error:", error);
  }

  messageInput.value = "";
}

function displaySentMessage(message) {
  const responseContainer = document.getElementById("responseContainer");
  const newMessage = document.createElement("p");
  newMessage.textContent = `Sent: ${message}`;
  responseContainer.appendChild(newMessage);
}

socket.on("messageSentConfirmation", (responseData) => {
  displayResponse(responseData.response);
});

document.addEventListener("DOMContentLoaded", () => {
  const sendMessageButton = document.getElementById("sendMessageButton");
  sendMessageButton.addEventListener("click", sendMessage);
});


function displayResponse(response) {
  const responseContainer = document.getElementById("responseContainer");
  const newResponse = document.createElement("p");
  newResponse.textContent = response;
  responseContainer.appendChild(newResponse);
}
