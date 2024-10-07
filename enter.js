document.getElementById('login').addEventListener('submit', function(event) {
    var isValid = login(event);
    if (!isValid) {
        event.preventDefault();
    }
});
    function login() {
        var password = document.getElementById('pass').value.trim().replace(/\s/g, ''); //still needs tinkering in this part if something happened...P.S Zen
        var error = document.getElementById('invalid');
        var minlength = 8;
        var maxlength = 24;
        
        const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>_]/;

        if (password == '') {
            error.style.display = 'block';
            error.textContent = 'Password does not allow only whitespaces... Try again';
            return false;
        }

        if (password.length < minlength) {
            error.style.display = 'block';
            error.textContent = 'Password should contain at least 8 characters long. No whitespaces included.'
            return false;
        } else if (password.length > maxlength) {
            error.style.display = 'block';
            error.textContent = 'Password can only contain of a maximum of 24 characters. No whitespaces included.'
            return false;
        }

        if (!specialCharacterPattern.test(password)) {
            document.getElementById('pass').value = '';
            error.style.display = 'block';
            error.textContent = 'Your Password Contained Special Characters... Try Again';
            return false;
        }

        error.style.display = 'none';
        document.getElementById('login').reset(); 
        return true;
    }

function check() {
    var passInput = document.getElementById('pass');
    var toggle = document.querySelector('.toggle');

    if (passInput.type === 'password') {
        passInput.type = 'text';
        toggle.textContent = 'Hide';
    } else {
        passInput.type = 'password';
        toggle.textContent = 'Show Password';
    }
}

function navigate(event) {

    event.preventDefault();

    const targetID = event.target.id;

    if (targetID === 'forgot' ){
        window.location.href = 'forgot-password.html';
    }else if (targetID === 'new'){
        window.location.href = 'signup.html';
    }
}