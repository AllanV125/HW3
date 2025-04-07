/*
Name: Allan Vega
Date Created: 02/08/2024
Date Last Modified: 02/08/2024
Version: 1.1
Description: Homework 3 – Updated for matching HTML element IDs and improved validations.
*/


const d = new Date();
document.getElementById("today").innerHTML = d.toDateString();


let slider = document.getElementById("range"); 
let output = document.getElementById("range-slider"); 


slider.oninput = function() {
   output.innerHTML = this.value;
};

function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[A-Za-z'-]{1,30}$/;
    if (!fname.match(namePattern)) {
      document.getElementById("fnameError").innerHTML =
        "First name must be 1-30 characters: letters, apostrophes, and dashes only.";
      return false;
    } else {
      document.getElementById("fnameError").innerHTML = "";
      return true;
    }
  }
  function validateLname() {
    const lname = document.getElementById("lname").value.trim();
    const namePattern = /^[A-Za-z'-]{1,30}$/;
    if (!lname.match(namePattern)) {
      document.getElementById("lnameError").innerHTML =
        "Last name must be 1-30 characters: letters, apostrophes, and dashes only.";
      return false;
    } else {
      document.getElementById("lnameError").innerHTML = "";
      return true;
    }
  }  
function validateMiddleInitial() {
   const middleInitial = document.getElementById("minital").value;
   if (!middleInitial) {
       document.getElementById("minitalError").innerHTML = "Middle initial cannot be blank";
       return false;
   } else if (middleInitial.length > 1) {
       document.getElementById("minitalError").innerHTML = "Middle initial must be a single character";
       return false;
   } else {
       document.getElementById("minitalError").innerHTML = "";
       return true;
   }
}

function validateDob() {
    const dobInput = document.getElementById("DOB");
    const dob = new Date(dobInput.value);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);
    
    if (dob > today) {
        document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be in the future.";
        return false;
    } else if (dob < minDate) {
        document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be more than 120 years ago.";
        return false;
    } else {
        document.getElementById("DOB-Error").innerHTML = "";
        return true;
    }
 }
 


function validateSsn() {
   const ssn = document.getElementById("ssn").value;
   const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
   if (ssnPattern.test(ssn)) {
       document.getElementById("ssn-error").innerHTML = "";
       return true;
   } else {
       document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
       return false;
   }
}


function validateZcode() {
   let zcode = document.getElementById("zipcode").value;
   let zip = zcode.replace(/[^0-9]/g, "");
   if (!zip) {
       document.getElementById("zipcodeError").innerHTML = "Zip code cannot be blank";
       return false;
   }
   if (zcode.length > 5) {
       zcode = zcode.substring(0, 5) + "-" + zcode.slice(5, 9);
   } else {
       zcode = zcode.slice(0, 5);
   }
   document.getElementById("zipcode").value = zcode;
   document.getElementById("zipcodeError").innerHTML = "";
   return true;
}


function validateEmail() {
   const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const emailInput = document.getElementById("email");
   let email = emailInput.value;
   if (!email) {
       document.getElementById("email-addressError").innerHTML = "Email cannot be blank";
       return false;
   }
   if (!emailR.test(email)) {
       document.getElementById("email-addressError").innerHTML = "Please enter a valid email";
       return false;
   } else {
       document.getElementById("email-addressError").innerHTML = "";
       return true;
   }
}


function validatePhone() {
   let phone = document.getElementById("phone-number").value;
   if (!phone) {
       document.getElementById("phone-numberError").innerHTML = "Phone cannot be blank";
       return false;
   }
   phone = phone.replace(/[^0-9]/g, "");
   if (phone.length === 10) {
       phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
       document.getElementById("phone-numberError").innerHTML = "";
   } else {
       document.getElementById("phone-numberError").innerHTML = "Please enter a valid phone number";
       return false;
   }
   return true;
}


function validateUid() {
   const uid = document.getElementById("uid").value.toLowerCase();
   document.getElementById("uid").value = uid;
   if (uid.length === 0) {
       document.getElementById("uid-error").innerHTML = "User ID must be at least 6 characters";
       return false;
   }
   if (!isNaN(uid.charAt(0))) {
       document.getElementById("uid-error").innerHTML = "User ID must start with a letter";
       return false;
   }
   let regex = /^[a-z0-9]+$/;
   if (!regex.test(uid)) {
       document.getElementById("uid-error").innerHTML = "User ID must contain only letters and numbers";
       return false;
   } else if (uid.length < 5) {
       document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
       return false;
   } else if (uid.length > 30) {
       document.getElementById("uid-error").innerHTML = "User ID cannot be more than 30 characters";
       return false;
   } else {
       document.getElementById("uid-error").innerHTML = "";
       return true;
   }
}


function validatePassword(uid, pword) {
   let errorMessage = [];
   if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
   if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
   if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
   if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
   if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");
   return errorMessage;
}
function validatePassword() {
    let uid = document.getElementById("uid").value.toLowerCase();
    let pword = document.getElementById("password").value;
    let errors = [];
    
    if (pword.length < 8 || pword.length > 30) {
        errors.push("Password must be 8-30 characters long.");
    }
    if (!pword.match(/[a-z]/)) {
        errors.push("Must contain at least one lowercase letter.");
    }
    if (!pword.match(/[A-Z]/)) {
        errors.push("Must contain at least one uppercase letter.");
    }
    if (!pword.match(/[0-9]/)) {
        errors.push("Must contain at least one digit.");
    }
    if (!pword.match(/[!\@#\$%\^&*\(\)\-_+=\\\/><.,`~]/)) {
        errors.push("Must contain at least one special character.");
    }
    if (pword.includes(uid)) {
        errors.push("Password cannot contain the User ID.");
    }
    
    if (errors.length > 0) {
        document.getElementById("passwordError").innerHTML = errors.join("<br>");
        return false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
        return true;
    }
}

function validatePwordMatch() {
    let pword1 = document.getElementById("password").value;
    let pword2 = document.getElementById("rpword").value;
    if (pword1 !== pword2) {
        document.getElementById("pword-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pword-error").innerHTML = "";
        return true;
    }
}

function reviewInput() {
   var formcontent = document.getElementById("signup-form");
   var output = '<h3>Please review your information:</h3><table>';
   for (let i = 0; i < formcontent.elements.length; i++) {
       if (formcontent.elements[i].value !== "Review") {
           switch (formcontent.elements[i].type) {
               case "checkbox":
                   if (formcontent.elements[i].checked) {
                       output += '<tr><td align="right">' + formcontent.elements[i].name + '</td><td>Yes</td></tr>';
                   }
                   break;
               case "radio":
                   if (formcontent.elements[i].checked) {
                       output += '<tr><td align="right">' + formcontent.elements[i].name + '</td><td>' + formcontent.elements[i].value + '</td></tr>';
                   }
                   break;
               default:
                   output += '<tr><td align="right">' + formcontent.elements[i].name + '</td><td>' + formcontent.elements[i].value + '</td></tr>';
           }
       }
   }
   output += '</table>';
   document.getElementById("review-output").innerHTML = output;
}
function Reset() {
   console.log("Reset function triggered");
   alert("Reset function triggered");
   document.getElementById("signup-form").reset();
   validatePhone();
   validateZcode();
   alert("Form has been reset successfully!");
   document.getElementById("fnameError").innerHTML = "";
   document.getElementById("Lname-error").innerHTML = "";
   document.getElementById("minitalError").innerHTML = "";
   document.getElementById("DOB-Error").innerHTML = "";
   document.getElementById("ssn-error").innerHTML = "";
   document.getElementById("zipcodeError").innerHTML = "";
   document.getElementById("phone-numberError").innerHTML = "";
   document.getElementById("email-addressError").innerHTML = "";
   document.getElementById("uid-error").innerHTML = "";
   document.getElementById("pword-error").innerHTML = "";
   document.getElementById("review-output").innerHTML = "";
}
function validateEverything() {
    let valid = true;
    
    if (!validateFname()) valid = false;
    if (!validateMiddleInitial()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    let addr2 = document.getElementById("address2").value.trim();
    if (addr2 !== "" && !validateAddress2()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateState()) valid = false;
    if (!validateZcode()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUid()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validatePwordMatch()) valid = false;
    if (!validateRadio()) valid = false;
    
    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}

function validateCity() {
   city = document.getElementById("city").value.trim();


   if (!city) {
       document.getElementById("city-error").innerHTML = "City can't be blank";
       return false;
   } else {
       document.getElementById("city-error").innerHTML = "";
       return true;
   }
}
function validateAddress() {
    let valid1 = validateAddress1();
    let address2 = document.getElementById("address2").value.trim();
    let valid2 = (address2 === "" || validateAddress2());
    return valid1 && valid2;
}

function validateAddress1() {
    let address1 = document.getElementById("address1").value.trim();
    if (address1 === "") {
        document.getElementById("address1Error").innerHTML = "Address Line 1 cannot be blank";
        return false;
    } else {
        document.getElementById("address1Error").innerHTML = "";
        return true;
    }
}

function validateAddress2() {
    let address2 = document.getElementById("address2").value.trim();
    if (address2 !== "" && (address2.length < 2 || address2.length > 30)) {
        document.getElementById("address2-error").innerHTML =
          "Address Line 2 must be 2-30 characters if provided";
        return false;
    } else {
        document.getElementById("address2-error").innerHTML = "";
        return true;
    }
}
function validateState() {
   let state = document.getElementById("state").value;
   if (!state) {
       document.getElementById("state-error").innerHTML = "State cannot be blank";
       return false;
   } else {
       document.getElementById("state-error").innerHTML = "";
       return true;
   }
}
function validateCheckbox() {
   let checkbox = document.getElementById("checkbox").checked;
   if (!checkbox) {
       document.getElementById("checkbox-error").innerHTML = "You must agree to the terms";
       return false;
   } else {
       document.getElementById("checkbox-error").innerHTML = "";
       return true;
   }
}
function validateRadio() {
    let radios = document.getElementsByName("pgender");
    let checked = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        document.getElementById("radio-error").innerHTML = "Please select a gender.";
        return false;
    } else {
        document.getElementById("radio-error").innerHTML = "";
        return true;
    }
}

function validateTerms() {
   let terms = document.getElementById("terms").checked;
   if (!terms) {
       document.getElementById("terms-error").innerHTML = "You must agree to the terms";
       return false;
   } else {
       document.getElementById("terms-error").innerHTML = "";
       return true;
   }
}
function showAlert() {
   const alertBox = document.getElementById("alert-box");
   alertBox.style.display = "block";
   const closeButton = document.getElementById("close-alert");
   closeButton.addEventListener("click", function() {
       alertBox.style.display = "none";
   });
}



