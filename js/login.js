const email = '';
const password = '';
document.getElementById("login-btn").addEventListener('click', function() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email == 'admin@admin.com' && password == 'admin') {
        window.location.href = "banking.html";
    }

})