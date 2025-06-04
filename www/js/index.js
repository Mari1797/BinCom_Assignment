("use strict");

function initApp() {
  const words = [
    "a Developer",
    "an Engineer",
    "a Problem Solver",
    "Reliable",
    "Efficient",
    "a Goal Getter",
  ];
  let index = 0;

  setInterval(() => {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    document.getElementById("moving-word").innerHTML = words[index];
  }, 2000);

  // form validation

  const form = document.getElementById("form");
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let allowSubmit = true;

    if (name === "") {
      errorName.innerHTML = "Name must not be empty";
      allowSubmit = false;
    } else {
      errorName.innerHTML = "";
    }

    if (email === "" || !email.includes("@")) {
      errorEmail.innerHTML = "Please provide a valid email";
      allowSubmit = false;
    } else {
      errorEmail.innerHTML = "";
    }

    if (message === "") {
      errorMessage.innerHTML = "Message must not be empty";
      allowSubmit = false;
    } else {
      errorMessage.innerHTML = "";
    }

    if (allowSubmit) {
      const phoneNumber = "2348085587358";
      const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const encodedMessage = encodeURIComponent(fullMessage);

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        "_blank"
      );
    }
  });

  const hamburger = document.getElementById("ham");
  const closebtn = document.getElementById("close");
  const icon1 = document.querySelector(".icon1");
  const icon2 = document.querySelector(".icon2");
  const nav_menu = document.querySelector("#mobile_menu");

  hamburger.addEventListener("click", () => {
    icon1.style.display = "none";
    icon2.style.display = "block";
    nav_menu.style.display = "block";
  });

  closebtn.addEventListener("click", () => {
    icon1.style.display = "block";
    icon2.style.display = "none";
    nav_menu.style.display = "none";
  });

  // Typing Effect
  const typing_name = document.getElementById("name_typing");
  const displayName = " Marian.";

  function typingEffect(element, text, i = 0) {
    if (i === 0) element.textContent = "";
    element.textContent += text[i];

    if (i < text.length - 1) {
      setTimeout(() => typingEffect(element, text, i + 1), 150);
    } else {
      setTimeout(() => typingEffect(element, text, 0), 1000);
    }
  }

  typingEffect(typing_name, displayName);
}

// Run app initialization when ready
if (window.cordova) {
  document.addEventListener("deviceready", initApp);
} else {
  document.addEventListener("DOMContentLoaded", initApp);
}
