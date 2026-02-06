function validateForm() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    alert("Thank you for contacting me!");
    return true;
}
