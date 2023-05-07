import throttle from "lodash.throttle";

const LOCAL_KEY = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

const formInput = document.querySelector(".feedback-form");

formInput.addEventListener("input", throttle(storageFormData, 500));
formInput.addEventListener("submit", onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget;
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}

function reloadPage() {
  console.log(formData);
  if (formData) {
    let { email, message } = formInput.elements;
    email.value = formData.email || "";
    message.value = formData.message || "";
  }
}
