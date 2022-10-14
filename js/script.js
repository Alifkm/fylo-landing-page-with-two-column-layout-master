const section1Button = document.getElementById("first-section-button");
const section3Button = document.getElementById("third-section-button");
const errorMsg = document.getElementsByClassName("error-message");
const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

section1Button.addEventListener("click", function() {
  const section1Input = document.getElementById("first-section-email");
  
  section1Input.classList.remove('error-input');
  errorMsg[0].classList.remove('error-message-active');
  errorMsg[0].innerHTML = "";

  if(section1Input.value === "") {
    errorMsg[0].classList.add('error-message-active');
    errorMsg[0].innerHTML = "This field should not be empty";
    section1Input.classList.add('error-input');
  }else if(!section1Input.value.match(emailRgx)) {
    errorMsg[0].classList.add('error-message-active');
    errorMsg[0].innerHTML = "Please check your email";
    section1Input.classList.add('error-input');
  }
});

section3Button.addEventListener("click", function() {
  const section3Input = document.getElementById("third-section-email");
  
  section3Input.classList.remove('error-input');
  errorMsg[1].classList.remove('error-message-active');
  errorMsg[1].innerHTML = "";

  if(section3Input.value === "") {
    errorMsg[1].classList.add('error-message-active');
    errorMsg[1].innerHTML = "This field should not be empty";
    section3Input.classList.add('error-input');
  }else if(!section3Input.value.match(emailRgx)) {
    errorMsg[1].classList.add('error-message-active');
    errorMsg[1].innerHTML = "Please check your email";
    section3Input.classList.add('error-input');
  }
});