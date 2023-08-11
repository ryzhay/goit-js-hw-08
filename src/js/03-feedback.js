import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let email = '';
let message = '';

const formData = {
    email,
    message,
};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const currentLocalData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(currentLocalData){
    form.email.value = currentLocalData.email;
    form.message.value = currentLocalData.message;
};

function onInput () {
   email = form.email.value,
   message = form.message.value,
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onSubmit(event){
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
          form.reset();
            
}; 