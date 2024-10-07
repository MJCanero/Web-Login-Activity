document.getElementById('signup').addEventListener('submit', function(event) {
    var isValid = sign_up(event);
        if (!isValid) {
            event.preventDefault();
        }
    });

    function sign_up() {

        var email = document.getElementById('address').value;
        var password = document.getElementById('passkey').value.trim();
        var con_pass = document.getElementById('confirm').value.trim();
        var error = document.getElementById('error');
        var minlength = 8;
        var maxlength = 24;

        const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>_]/;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|biz|info)$/;

        if (!emailPattern.test(email)) {
            error.style.display = 'block';
            error.textContent = 'Please enter a valid E-mail address (e.g., example@domain.com).';
            return false;
        } else {
            error.style.display = 'none';
        }

        if (!specialCharacterPattern.test(password)) {
            error.style.display = 'block';
            error.textContent = 'Password should contain at least one special character';
            return false;
        }

        if (password.trim() == '') {
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

        if (password.replace(/\s/g, '') !== con_pass.replace(/\s/g, '')) {
            error.style.display = 'block';
            error.textContent = 'Passwords do not match. Please try again.';
            return false;
        }

        error.style.display = 'none';
        alert('Congratulations! You have successfully Signed-up.');
        document.getElementById('signup').reset();
        return true;
        }

    function check() {
        var passInput = document.getElementById('passkey');
        var toggle = document.querySelector('.toggle');

        if (passInput.type === 'password') {
            passInput.type = 'text';
            toggle.textContent = 'Hide';
        } else {
            passInput.type = 'password';
            toggle.textContent = 'Show Password';
        }
    }
        