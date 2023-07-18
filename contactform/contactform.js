const form = document.getElementById("form");
const senderName = document.getElementById("name");
const senderEmail = document.getElementById("email");
const senderSubject = document.getElementById("subject");
const senderMessage = document.getElementById("messages");

form.addEventListener("submit", e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = senderName.value.trim();
  const emailValue = senderEmail.value.trim();
  const subjectValue = senderSubject.value.trim();
  const messageValue = senderMessage.value.trim();

  if (nameValue === '') {
    setError(senderName, "Name is required");
  } else {
    setSuccess(senderName);
  }

  if (emailValue === '') {
    setError(senderEmail, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(senderEmail, "Provide a valid email address");
  } else {
    setSuccess(senderEmail);
  }

  if (subjectValue === '') {
    setError(senderSubject, "Subject is required");
  } else {
    setSuccess(senderSubject);
  }

  if (messageValue === '') {
    setError(senderMessage, 'Please enter a message');
  } else {
    setSuccess(senderMessage);
  }
};
