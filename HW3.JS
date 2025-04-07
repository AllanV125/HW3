/*
Name: Allan Vega
Date Created: 02/08/2024
Date Last Modified: 04/08/2024
Version: 2.3
Description: Fixed duplicate/mismatched functions and removed undefined function calls.
*/

const d = new Date();
document.getElementById("today").innerHTML = d.toDateString();

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
if (slider && output) {
    slider.oninput = function() {
       output.innerHTML = this.value;
    };
}

function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    const pattern = /^[A-Za-z'-]{1,30}$/;
    if (!pattern.test(fname)) {
        document.getElementById("fnameError").innerHTML = "First name must be 1–30 letters, apostrophes, or dashes.";
        return false;
    }
    document.getElementById("fnameError").innerHTML = "";
    return true;
}

function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    const pattern = /^[A-Za-z'-]{1,30}$/;
    if (!pattern.test(lname)) {
        document.getElementById("Lname-error").innerHTML = "Last name must be 1–30 letters, apostrophes, or dashes.";
        return false;
    }
    document.getElementById("Lname-error").innerHTML = "";
    return true;
}

function validateMiddleInitial() {
    const mid = document.getElementById("minital").value.trim();
    if (mid === "") {
        document.getElementById("minitalError").innerHTML = "";
        return true;
    }
    if (mid.length > 1) {
        document.getElementById("minitalError").innerHTML = "Middle initial must be a single character.";
        return false;
    }
    document.getElementById("minitalError").innerHTML = "";
    return true;
}

function validateDob() {
    const dobInput = document.getElementById("DOB");
    const dob = new Date(dobInput.value);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 110);
    if (dob > today) {
       document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be in the future.";
       dobInput.value = "";
       return false;
    } else if (dob < minDate) {
       document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be more than 110 years ago.";
       dobInput.value = "";
       return false;
    }
    document.getElementById("DOB-Error").innerHTML = "";
    return true;
}

function validateSsn() {
    const ssn = document.getElementById("ssn").value.trim();
    const pattern = /^\d{3}-\d{2}-\d{4}$/;
    if (!pattern.test(ssn)) {
       document.getElementById("ssn-error").innerHTML = "Enter a valid SSN (e.g., 123-45-6789).";
       return false;
    }
    document.getElementById("ssn-error").innerHTML = "";
    return true;
}

function validateZcode() {
    let zcode = document.getElementById("zipcode").value.trim();
    const pattern = /^\d{5}$/;
    if (!pattern.test(zcode)) {
       document.getElementById("zipcodeError").innerHTML = "Enter a 5-digit zip code.";
       return false;
    }
    document.getElementById("zipcodeError").innerHTML = "";
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
       document.getElementById("email-addressError").innerHTML = "Email cannot be blank.";
       return false;
    }
    if (!emailR.test(email)) {
       document.getElementById("email-addressError").innerHTML = "Enter a valid email address.";
       return false;
    }
    document.getElementById("email-addressError").innerHTML = "";
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone-number").value.trim();
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone) {
       document.getElementById("phone-numberError").innerHTML = "Phone cannot be blank.";
       return false;
    }
    phone = phone.replace(/[^0-9]/g, "");
    if (phone.length === 10) {
       phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
       document.getElementById("phone-numberError").innerHTML = "";
    } else {
       document.getElementById("phone-numberError").innerHTML = "Enter a valid phone number.";
       return false;
    }
    return true;
}

function validateUid() {
    const uidInput = document.getElementById("uid");
    let uid = uidInput.value.trim();
    uid = uid.toLowerCase();
    uidInput.value = uid;
    if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters.";
        return false;
    }
    if (uid.length > 20) {
        document.getElementById("uid-error").innerHTML = "User ID cannot be more than 20 characters.";
        return false;
    }
    if (!/^[a-z]/.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID must start with a letter.";
        return false;
    }
    if (!/^[a-z0-9-_]+$/.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID can only contain letters, numbers, dashes, and underscores.";
        return false;
    }
    document.getElementById("uid-error").innerHTML = "";
    return true;
}

function validatePassword() {
    const uid = document.getElementById("uid").value.trim();
    const password = document.getElementById("password").value;
    const rpword = document.getElementById("rpword").value;
    
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must include at least one uppercase letter.";
        return false;
    }
    if (!/[a-z]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must include at least one lowercase letter.";
        return false;
    }
    if (!/\d/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must include at least one digit.";
        return false;
    }
    if (password === uid) {
        document.getElementById("passwordError").innerHTML = "Password cannot be the same as the User ID.";
        return false;
    }
    if (password !== rpword) {
        document.getElementById("pword-error").innerHTML = "Passwords do not match.";
        return false;
    }
    
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("pword-error").innerHTML = "";
    return true;
}


function validateAddress1() {
    let address1 = document.getElementById("address1").value.trim();
    if (!address1) {
       document.getElementById("address1-error").innerHTML = "Address 1 cannot be blank.";
       return false;
    }
    document.getElementById("address1-error").innerHTML = "";
    return true;
}

function validateAddress2() {
    let address2 = document.getElementById("address2").value.trim();
    document.getElementById("address2-error").innerHTML = "";
    return true;
}

function validateCity() {
    let city = document.getElementById("city").value.trim();
    if (!city) {
       document.getElementById("city-error").innerHTML = "City cannot be blank.";
       return false;
    }
    document.getElementById("city-error").innerHTML = "";
    return true;
}

function validateState() {
    let state = document.getElementById("state").value;
    if (!state || state === "Please Select One") {
       document.getElementById("state-error").innerHTML = "Please select a state.";
       return false;
    }
    document.getElementById("state-error").innerHTML = "";
    return true;
}

function validateEverything() {
    let valid = true;
    if (!validateFname()) valid = false;
    if (!validateMiddleInitial()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateState()) valid = false;
    if (!validateZcode()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUid()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateAddress2()) valid = false;
    
    document.getElementById("submit").disabled = !valid;
    
    if (!valid) {
        showAlert();
    }
    return valid;
}


function showAlert() {
    const alertBox = document.getElementById("alert-box");
    if (alertBox) {
        alertBox.style.display = "block";
        const closeButton = document.getElementById("close-alert");
        closeButton.replaceWith(closeButton.cloneNode(true));
        document.getElementById("close-alert").addEventListener("click", function() {
            alertBox.style.display = "none";
        });
    } else {
        alert("Please fill out all required fields.");
    }
}
function Reset() {
    document.getElementById("signup-form").reset();
    
    const errors = document.querySelectorAll(".error");
    errors.forEach(function(span) {
        span.innerHTML = "";
    });
    
    document.getElementById("review-output").innerHTML = "";
}
