import throttle from 'lodash.throttle';

const STORAGE_KEY = `feedback-form-state`;
const formData = {};

const refs = {
    form: document.querySelector("form"),
    email: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

function onFormInput() {
    formData.email = refs.email.value;
    formData.message = refs.textarea.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
};

populateTextarea();
function populateTextarea() {
    const currentData = localStorage.getItem(STORAGE_KEY);
    const savedData = JSON.parse(currentData);
    
    if (currentData) {
        refs.email.value = savedData.email;
        refs.textarea.value = savedData.message;
    }
};
  
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    console.log(localStorage.getItem(STORAGE_KEY))
    localStorage.removeItem(STORAGE_KEY);
};