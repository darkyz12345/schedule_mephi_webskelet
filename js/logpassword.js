document.getElementById("showPass").addEventListener('click', () => {
    const inputPassword = document.getElementById('password');
    const icon = document.getElementById('showPass');
    if (inputPassword.type == 'password')
    {
        inputPassword.type = "text";
        icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }
    else 
    {
        inputPassword.type = "password";
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
})