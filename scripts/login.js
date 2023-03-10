(function () {
    /**
     * Get the login button
     */
    var login = document.getElementById('login');

    /**
     * Listen for click event on the login button
     */
    login.addEventListener('click', sendForm);
})();

/**
 * Handle the click event by sending an asynchronous request to the server
 * @param {*} event
 */
function sendForm(event) {
    /**
     * Prevent the default behavior of the clicking the form submit button
     */
     event.preventDefault();

    /**
     * Get the values of the input fields
     */
    var userName = document.getElementById('user-name').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('remember-me').checked;

    /**
     * Create an object with the user's data
     */
    var user = {
        userName,
        password,
        remember: rememberMe
    };

    console.log(rememberMe);

    /**
     * Send POST request with user's data to api.php/login
     */
    sendRequest('src/login.php', { method: 'POST', data: `data=${JSON.stringify(user)}` }, load, handleError);
}

/**
 * Handle the received response from the server
 * If there were no errors found on validation, the index.php is loaded.
 * Else the errors are displayed to the user.
 * @param {*} response
 */
function load(response) {
    var errors = document.getElementById('errors');
    errors.innerHTML = '';
    errors.style.display = 'none';

    window.location = './index.php';
}

function handleError(error) {
    console.log(error)
    var errors = document.getElementById('errors');

    errors.style.display = 'block';
    errors.style.color = 'red';

    errors.innerHTML = error['message'];
}