const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('.input-email');
const messageInputEl = document.querySelector('.input-message');

const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storedData) {
  emailInputEl.value = storedData.email || '';
  messageInputEl.value = storedData.message || '';
}

formEl.addEventListener('input', () => {
  const currentData = {
    email: emailInputEl.value.trim(),
    message: messageInputEl.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const email = emailInputEl.value.trim();
  const message = messageInputEl.value.trim();

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem('feedback-form-state');

    emailInputEl.value = '';
    messageInputEl.value = '';
  }
});
