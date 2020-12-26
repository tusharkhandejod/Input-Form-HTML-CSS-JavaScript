
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
