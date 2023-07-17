const form = document.getElementById("form");
const senderName = document.getElementById("name");
const senderEmail = document.getElementById("email");
const senderSubject = document.getElementById("subject");
const senderMessage = document.getElementById("messages");


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {

  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');

}


const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase);
}

const setSucess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
}

const validateInputs = () => {
  const nameValue = senderName.value.trim();
  const emailValue = senderEmail.value.trim();
  const subjectValue = senderSubject.value.trim();
  const messageValue = senderMessage.value.trim();

  if (nameValue === '') {
    setError(senderName, "Name is Required");
  } else {
    setSucess(nameValue)
  }


  if (emailValue === '') {
    setError(senderEmail, "Email is Required");
  } else if(!isValidEmail(emailValue)) {
    setError(senderEmail, "Provide a valid Email adress");
  } else{
    setSucess(senderEmail);
  }

  if (subjectValue === '') {
     setError(senderSubject, "Subject Required ");
  } else {
    setSucess(senderSubject);
  }

  if (messageValue === '') {
    setError(senderMessage, 'Send some message');
    
  }else{
    setSucess(senderMessage);
  }
}

