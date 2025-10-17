const inputPassword = document.getElementById('password');
const icon = document.getElementById('showPass');

document.getElementById("showPass").addEventListener('click', () => {
    if (inputPassword.type == 'password')
    {
        inputPassword.type = "text";
        icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
        icon.title = 'Скрыть пароль';
    }
    else 
    {
        inputPassword.type = "password";
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>';
        icon.title = 'Показать пароль';
    }
})