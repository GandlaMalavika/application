let username = "";
   
   function openRegistrationForm() {
       document.getElementById("registration-form").style.display = "block";
   }

   function registerUser() {
       username = document.getElementById("username").value;
       let email= document.getElementById("email").value;
       localStorage.setItem("username", username);
       localStorage.setItem("email", email);
       document.getElementById("message-input").disabled = false;
       document.getElementById("registration-form").style.display = "none";
       document.getElementById("login-btn").disabled=true;
       document.getElementById("sendbtn").removeAttribute("disabled");
   }

   function sendMessage() {
       let message = document.getElementById("message-input").value;
       let storedUsername = localStorage.getItem("username");
       let storedemail = localStorage.getItem("email");
       document.getElementById("message-area").innerHTML += `<p>${storedUsername}: ${message}</p>`;
       var messageText=document.getElementById("message-input").value = ""; // Clear the input field after sending
      
    var chatArea = document.getElementById("message-area");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = messageText;
    messageDiv.classList.add("message", "sent");
    chatArea.appendChild(messageDiv);
  
    // Clear input field
    document.getElementById("message-input").value = "";
  
    // Scroll to bottom
    chatArea.scrollTop = chatArea.scrollHeight;
   }