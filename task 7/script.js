function getUserInfo() {
    var login = prompt("Enter your login:");
    var email = prompt("Enter your email:");
    var password = prompt("Enter your password:");

    var userInfo = "Dear User, your email is " + email + ", your password is " + password;
    document.getElementById("userInfo").textContent = userInfo;
}
