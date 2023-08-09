"use script";

const subscribe = document.querySelector(".subscribe");
let inputText = document.querySelector(".inputtext");
const form = document.querySelector(".form");
const invalidEmail = document.querySelector(".invalid_email");
const success = document.querySelector(".success");
const newsletter = document.querySelector(".newsletter");
const email = document.querySelector("strong");
const dismiss = document.querySelector('.dismiss');


function validation() {
  let mail = inputText.value;
  const regx =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (mail.match(regx)) {
    success.classList.toggle("hidden");
    newsletter.classList.toggle("hidden");
    inputText.style.borderColor = 'black';
    inputText.style.backgroundColor = "#FFFFFF";
    return true;
  } else {
    inputText.style.borderColor = "red";
    inputText.style.backgroundColor = "#ff00001a";
    return false;
  }
}
subscribe.addEventListener("click", function (e) {
  e.preventDefault;
  validation();
});

///^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
inputText.addEventListener("keydown", function (e) {
  e.preventDefault;

  let mail = inputText.value;
  const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (mail.match(regx)) {
    invalidEmail.classList.toggle("hidden");
    this.style.borderColor = "#000000";
    this.style.backgroundColor = "#FFFFFF";
    return true;
  } else {
    invalidEmail.classList.toggle("hidden");
    this.style.backgroundColor = "#ff00001a";
    return false;
  }
});

//email.textContent = console.log(inputText.value);
dismiss.addEventListener('click', function () {
  newsletter.classList.remove('hidden');
  success.classList.add('hidden');
  invalidEmail.textContent = '';
  inputText.value = '';
  inputText.style.backgroundColor = '';
  inputText.style.borderColor = '';
})