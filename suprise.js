let enteredPassword = "";
const correctPassword = "1234";  // Change this to your actual password

function enterDigit(digit) {
    if (enteredPassword.length < 4) {
        enteredPassword += digit;
        updatePasswordDisplay();
    }
}

function clearPassword() {
    enteredPassword = "";
    updatePasswordDisplay();
}

function updatePasswordDisplay() {
    let display = document.getElementById("password-display");
    display.textContent = enteredPassword.padEnd(4, "•"); // Mask password input
}

function checkPassword() {
    if (enteredPassword === correctPassword) {
        document.getElementById("page1").classList.add("hidden");
        document.getElementById("page2").classList.remove("hidden");
    } else {
        alert("Wrong password! Try again.");
        clearPassword();
    }
}

function goToPage3() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}
