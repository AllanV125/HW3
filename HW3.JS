/*
Name: Allan Vega
Date Created: 02/08/2024
Date Last Modified: 04/08/2024
Version: 2.3
Description: Fixed duplicate/mismatched functions and removed undefined function calls.
*/

// Display the current date
const d = new Date();
document.getElementById("today").innerHTML = d.toDateString();

// Update slider value
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
if (slider && output) {
    slider.oninput = function() {
       output.innerHTML = this.value;
    };
}

// Validate First Name (1-30 characters; letters, apostrophes, dashes allowed)
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

// Validate Last Name (1-30 characters; letters, apostrophes, dashes allowed)
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

// Validate Middle Initial (using id "minital"; optional, but if provided, must be exactly one letter)
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

// Validate Date of Birth (must not be in the future or more than 110 years ago)
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

// Validate SSN (format: xxx-xx-xxxx)
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

// Validate Zip Code (must be exactly 5 digits)
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

// Validate Email Address
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

// Validate Phone Number (format: xxx-xxx-xxxx)
function validatePhone() {
    let phone = document.getElementById("phone-number").value.trim();
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone) {
       document.getElementById("phone-numberError").innerHTML = "Phone cannot be blank.";
       return false;
    }
    // Remove non-numeric characters and reformat if valid
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

// Validate User ID (6–12 characters; must start with a letter; letters and numbers only)
function validateUid() {
    const uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;
    if (uid.length < 6) {
       document.getElementById("uid-error").innerHTML = "User ID must be at least 6 characters.";
       return false;
    }
    if (!isNaN(uid.charAt(0))) {
       document.getElementById("uid-error").innerHTML = "User ID must start with a letter.";
       return false;
    }
    const regex = /^[a-z0-9]+$/;
    if (!regex.test(uid)) {
       document.getElementById("uid-error").innerHTML = "User ID must contain only letters and numbers.";
       return false;
    }
    if (uid.length > 12) {
       document.getElementById("uid-error").innerHTML = "User ID cannot be more than 12 characters.";
       return false;
    }
    document.getElementById("uid-error").innerHTML = "";
    return true;
}

// Validate Password Matching (checks that both password fields match)
function validatePword() {
    let pword1 = document.getElementById("password").value;
    let pword2 = document.getElementById("rpword").value;
    if (pword1 !== pword2) {
       document.getElementById("pword-error").innerHTML = "Passwords do not match.";
       return false;
    }
    document.getElementById("pword-error").innerHTML = "";
    return true;
}

// Validate Address Line 1 (required)
function validateAddress1() {
    let address1 = document.getElementById("address1").value.trim();
    if (!address1) {
       document.getElementById("address1-error").innerHTML = "Address 1 cannot be blank.";
       return false;
    }
    document.getElementById("address1-error").innerHTML = "";
    return true;
}

// Validate Address Line 2 (optional)
function validateAddress2() {
    let address2 = document.getElementById("address2").value.trim();
    // Since Address 2 is optional, no error if blank.
    document.getElementById("address2-error").innerHTML = "";
    return true;
}

// Validate City (required)
function validateCity() {
    let city = document.getElementById("city").value.trim();
    if (!city) {
       document.getElementById("city-error").innerHTML = "City cannot be blank.";
       return false;
    }
    document.getElementById("city-error").innerHTML = "";
    return true;
}

// Validate State (required)
function validateState() {
    let state = document.getElementById("state").value;
    if (!state || state === "Please Select One") {
       document.getElementById("state-error").innerHTML = "Please select a state.";
       return false;
    }
    document.getElementById("state-error").innerHTML = "";
    return true;
}

// Overall validation: Only calls functions we’ve defined
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
    if (!validatePword()) valid = false;
    if (!validateAddress2()) valid = false;
    
    // Enable the submit button if everything is valid
    document.getElementById("submit").disabled = !valid;
    
    if (!valid) {
        showAlert();
    }
    return valid;
}

// Custom alert function to display a modal alert box
function showAlert() {
    const alertBox = document.getElementById("alert-box");
    if (alertBox) {
        alertBox.style.display = "block";
        const closeButton = document.getElementById("close-alert");
        // Remove previous listeners by cloning the button
        closeButton.replaceWith(closeButton.cloneNode(true));
        document.getElementById("close-alert").addEventListener("click", function() {
            alertBox.style.display = "none";
        });
    } else {
        alert("Please fill out all required fields.");
    }
}
