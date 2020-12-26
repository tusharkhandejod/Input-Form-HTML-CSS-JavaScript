
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

//UC1-Validating user first name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "First Name is incorrect";
    }
});

//Validating user last name
const text2 = document.querySelector('#text2');
const text2Error = document.querySelector('.text2-error');
text2.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text2.value)) {
        text2Error.textContent = "";
    } else {
        text2Error.textContent = "Last Name is incorrect";
    }
});

//UC2 -Validating Email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp("^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Email is not Valid";
    }
});

//UC3-Validating mobile number
const mobileNumber = document.querySelector('#number');
const mobileNumberError = document.querySelector('.number-error');
mobileNumber.addEventListener('input', function() {
    let mobileNumberRegex = RegExp('^[0-9]{10}$');
    if (mobileNumberRegex.test(mobileNumber.value)) {
        mobileNumberError.textContent = "";
    } else {
        mobileNumberError.textContent = "telephone number is not Valid";
    }
});

//UC4-Validating password min 8 characters
//UC5-Atleast 1 special character , atleast one capital letter and small letter and atleast one numeric number
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function() {
    let pwdRegex = RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[^0-9a-zA-Z])(?!.*[^0-9a-zA-Z].*[^0-9a-zA-Z]).{8,}$');
    if (pwdRegex.test(pwd.value)) {
        pwdError.textContent = "";
    } else {
        pwdError.textContent = "password is not Valid";
    }
});
