const klik = document.getElementById('click');
const email = document.getElementById('email');
const errorMsg = document.querySelector('.active-state');
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

klik.addEventListener('click', () => {
  if (email.value.length === 0 || !email.value.match(emailValidation)) {
    errorMsg.style.display = 'inline-block';
  } else {
    errorMsg.style.display = 'none';
  }
});
