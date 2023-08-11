import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let formData;

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const currentLocalData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(currentLocalData){
    form.email.value = currentLocalData.email;
    form.message.value = currentLocalData.message;
    formData = {
        email: form.email.value,
        message: form.message.value,
    };
};

function onInput () {
    formData = {
   email: form.email.value,
   messageValue: form.message.value,
};
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};
 
function onSubmit(event){
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
          form.reset();
          console.log(formData);  
};