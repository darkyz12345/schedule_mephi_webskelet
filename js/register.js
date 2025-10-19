document.getElementById("confirmEmailBtn").addEventListener('click', function () {
    const emailField = document.getElementById("email");
    const hiddenDiv = document.getElementById("hiddenItem");
    if (emailField.value.trim() !== "") {
        hiddenDiv.classList.remove("hidden");
        this.textContent = "Код отправлен";
        this.disabled = true;
    }
});

document.getElementById("confirmCodeBtn").addEventListener('click', () => {
    const confirmEmailBtn = document.getElementById('confirmEmailBtn');
    const codeField = document.getElementById("codeField");
    const hiddenDiv = document.getElementById("hiddenItem");

    const codeNumber = +codeField.value.trim();

    if (!isNaN(codeNumber) && codeNumber >= 100000 && codeNumber <= 999999) {
        hiddenDiv.classList.add('hidden');
        confirmEmailBtn.textContent = 'Почта подтверждена';
        confirmEmailBtn.disabled = true;
    } else {
        alert("Введите корректный шестизначный код!");
    }
});

document.getElementById("showPass1").addEventListener('click', function() {
    const inputPassword = document.getElementById('password1');
    if (inputPassword.type == 'password')
    {
        inputPassword.type = "text";
        this.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
        this.title = 'Скрыть пароль';
    }
    else 
    {
        inputPassword.type = "password";
        this.innerHTML = '<i class="fa-regular fa-eye"></i>';
        this.title = 'Показать пароль';
    }
});

document.getElementById("showPass2").addEventListener('click', function() {
    const inputPassword = document.getElementById('password2');
    if (inputPassword.type == 'password')
    {
        inputPassword.type = "text";
        this.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
        this.title = 'Скрыть пароль';
    }
    else 
    {
        inputPassword.type = "password";
        this.innerHTML = '<i class="fa-regular fa-eye"></i>';
        this.title = 'Показать пароль';
    }
});

const hint = document.getElementById("password1Hint");
const password1 = document.getElementById('password1');

document.getElementById("password1").addEventListener('focus', () => {
    hint.classList.add('show');
    updateHint(password1.value);
});
password1.addEventListener('blur', () => {
    const hasLength = password1.value.length >= 8;
    const hasUpper = /[A-ZА-Я]/.test(password1.value);
    const hasDigit = /\d/.test(password1.value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password1.value);

    if (hasLength && hasUpper && hasDigit && hasSpecial)
        hint.classList.remove('show');
});

password1.addEventListener('input', () => {
    updateHint(password1.value);
});

function updateHint(value) {
    const hasLength = value.length >= 8;
    const hasUpper = /[A-ZА-Я]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const getMark = ok => ok ? "✅" : "❌";

    hint.textContent =
        `${getMark(hasLength)} не менее 8 символов\n` +
        `${getMark(hasUpper)} хотя бы одна заглавная буква\n` +
        `${getMark(hasDigit)} хотя бы одна цифра\n` +
        `${getMark(hasSpecial)} хотя бы один спецсимвол (!@#$%^&*)`;
}

const hint2 = document.getElementById('password2Hint');
const password2 = document.getElementById('password2');

password2.addEventListener('focus', () => {
    hint2.classList.add('show');
    updateHint2(password2.value, password1.value);
});

password2.addEventListener('blur', () => {
    if (password2.value.trim() === "")
    {
        hint2.classList.remove('show');
    }
});

password2.addEventListener('input', () => {
    updateHint2(password2.value, password1.value);
})

function updateHint2(val1, val2) {
    const isEqual = val1 === val2;
    const getMark = ok => ok ? "✅" : "❌";
    if (isEqual)
    {
        hint2.textContent = `${getMark(isEqual)} пароли совпадают`;
    }
    else
    {
        hint2.textContent = `${getMark(isEqual)} пароли не совпадают`;
    }
};