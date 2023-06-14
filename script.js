var mail = document.querySelector("input");
var _valid = document.querySelector(".valid");
var sign_up = document.querySelector(".sign_up");
var success_message = document.querySelector(".success_message");

function submit() {
  var regx = /^([a-zA-Z0-9\.-]+)@gmail.com/;
  if (mail.value != "") {
    if (regx.test(mail.value)) {
      _valid.innerHTML = "";
      document.querySelector("input").classList.remove("error");
      sign_up.style.display = "none";
      success_message.style.display = "block";
      mail.value="";
    } else {
      _valid.innerHTML = "valid email required";
      _valid.style.color = "hsl(4, 100%, 67%)";
      mail.classList.add("error");
    }
  } else {
    _valid.innerHTML = "Please enter your email";
    _valid.style.color = "hsl(4, 100%, 67%)";
    mail.classList.add("error");
  }
}

function reset() {
  success_message.style.display = "none";
  sign_up.style.display = "flex";
}

