document.getElementById('resetpass').addEventListener('submit', function(event) {
    var isValid = reset(event);
    if (!isValid) {
        event.preventDefault();
    }
});

function reset() {
    var email = document.getElementById('mail').value;
    var error = document.getElementById('error');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|biz|info)$/;

    if (!emailPattern.test(email)) {
        error.style.display = 'block';
        error.textContent = 'Please enter a valid E-mail address (e.g., example@domain.com).';
        return false;
    } else {
        error.style.display = 'none';
        alert('E-mail is valid and sent to our server for verification.');
        return true;
    }
}

function navigate() {
    window.location.href = 'login.html';
}