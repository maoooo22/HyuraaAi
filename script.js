const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("Kamu", message, "user");
  userInput.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  appendMessage("Hyuraa", data.reply || "Error", "bot");
}

function appendMessage(sender, text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
