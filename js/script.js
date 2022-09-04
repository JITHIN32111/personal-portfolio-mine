let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error')

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        nameError.style.color='red';
        return false;
    }
    if (name.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
        nameError.innerHTML = 'special charectord not allowed';
        nameError.style.color='red';
        return false;
    }
    if (name.match(/[1234567890]/)) {
        nameError.innerHTML = 'numbers not allowed';
        nameError.style.color='red';
        return false;
    }
  

    nameError.innerHTML = 'valid';

        nameError.style.color = "green";
    
    
    return true;
    }


function validatePhone() {
    var phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML ='phone number is required';
        phoneError.style.color='red';
        return false;
    }
    if (phone.length !==10) {
        phoneError.innerHTML ="phone number should be 10 digits";
        phoneError.style.color='red';
        return false;
    }

   if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits please';
        phoneError.style.color='red';
        return false;
       
    }

    phoneError.innerHTML = 'valid';
    phoneError.style.color = 'green';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'email id is required';
        emailError.style.color = 'red';
        return false;
    }

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ 
        emailError.innerHTML='email invalid';
        emailError.style.color = 'red';
    return false; 
    } 

    emailError.innerHTML = 'valid';
    emailError.style.color = 'green';
    return true;


}

function validateMessage() {
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        messageError.style.color = 'red';
        return false;
    }

    messageError.innerHTML = 'valid';
    messageError.style.color = 'green';
    return true;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix the error to submit';
        submitError.style.color='red';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false
    }
}





