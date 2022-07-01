document.getElementById('login-button').addEventListener('click', function() {
    // email input value 
    const inputEmail = document.getElementById('input-email');
    const valueOfEmail = inputEmail.value;

    // input password value 
    const inputPassword = document.getElementById('input-password');
    const valueOfPassword = inputPassword.value;

    if (valueOfEmail == 'admin@me.com' && valueOfPassword == 'admin') {
        window.location.href = 'banking.html';
    }

})