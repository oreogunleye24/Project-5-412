document.addEventListener("DOMContentLoaded", (event) => {
  const contactInfo = "Reach me at ore2484@tamu.edu";
  let index = 0;
  const typingSpeed = 100;

  function typeText() {
    if (index < contactInfo.length) {
      document.getElementById("contact-info").innerHTML +=
        contactInfo.charAt(index);
      index++;
      setTimeout(typeText, typingSpeed);
    }
  }

  if (document.body.classList.contains("contact")) {
    typeText();
  }
});
