/*
Name: Allan Vega
Date Created: 02/08/2024
Date Last Modified: 02/08/2024
Version: 1.1
Description: Homework 3 – Updated for matching HTML element IDs and improved validations.
*/


const d = new Date();
document.getElementById("today").innerHTML = d;


let slider = document.getElementById("range"); 
let output = document.getElementById("range-slider"); 


slider.oninput = function() {
   output.innerHTML = this.value;
};


function validateName() {
   return true;
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


function validateAddress() {
   return true;
}


function validateDob() {
   const dobInput = document.getElementById("DOB");
   const dob = new Date(dobInput.value);
   const today = new Date();
   const minDate = new Date();
   minDate.setFullYear(today.getFullYear() - 110);


   if (dob > today) {
       document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be in the future";
       dobInput.value = "";
       return false;
   } else if (dob < minDate) {
       document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be more than 110 years ago";
       dobInput.value = "";
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
   } else if (uid.length < 6) {
       document.getElementById("uid-error").innerHTML = "User ID must be at least 6 characters";
       return false;
   } else if (uid.length > 12) {
       document.getElementById("uid-error").innerHTML = "User ID cannot be more than 12 characters";
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




function validatePword() {
   let pword1 = document.getElementById("password").value;
   let pword2 = document.getElementById("rpword").value;
   if (pword1 !== pword2) {
       document.getElementById("pword-error").innerHTML = "Passwords do not match";
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
<div id="alert-box">
<div id="alert-content">
   <h4>Please fill out all required fields or any other message you want</h4>
   <button id="close-alert">OK</button>
</div>
</div>
function validateEverything() {
   let valid = true;


   if (!validateFname()) valid = false;
   if (!validateMini()) valid = false;
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
   if (!validatePassword()) valid = false;
   if (!validateCheckbox()) valid = false;
   if (!validateRadio()) valid = false;
   if (!validateTerms()) valid = false;
   if (!validateAddress2()) valid = false;


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
function validateMini() {
   let mini = document.getElementById("mini").value;
   const namePattern = /^[A-Z]+$/;


   mini = mini.toUpperCase();
   document.getElementById("mini").value = mini;


   if (!mini.match(namePattern)) {
       document.getElementById("mini-error").innerHTML =
       "Middle initial must be a single uppercase letter";
       return false;
   } else {
       document.getElementById("mini-error").innerHTML = "";
       return true;
   }
}
function validateFname() {
   let fname = document.getElementById("fname").value;
   const namePattern = /^[A-Z]+$/;


   fname = fname.toUpperCase();
   document.getElementById("fname").value = fname;


   if (!fname.match(namePattern)) {
       document.getElementById("fname-error").innerHTML = "First name must be a single uppercase letter";
       return false;
   } else {
       document.getElementById("fname-error").innerHTML = "";
       return true;
   }
}
function validateLname() {
   let lname = document.getElementById("lname").value;
   const namePattern = /^[A-Z]+$/;


   lname = lname.toUpperCase();
   document.getElementById("lname").value = lname;


   if (!lname.match(namePattern)) {
       document.getElementById("lname-error").innerHTML = "Last name must be a single uppercase letter";
       return false;
   } else {
       document.getElementById("lname-error").innerHTML = "";
       return true;
   }
}
function validateAddress1() {
   let address1 = document.getElementById("address1").value;
   if (!address1) {
       document.getElementById("address1-error").innerHTML = "Address 1 cannot be blank";
       return false;
   } else {
       document.getElementById("address1-error").innerHTML = "";
       return true;
   }
}
function validateAddress2() {
   let address2 = document.getElementById("address2").value;
   if (!address2) {
       document.getElementById("address2-error").innerHTML = "Address 2 cannot be blank";
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
   let radio = document.getElementsByName("radio");
   let checked = false;
   for (let i = 0; i < radio.length; i++) {
       if (radio[i].checked) {
           checked = true;
           break;
       }
   }
   if (!checked) {
       document.getElementById("radio-error").innerHTML = "You must select an option";
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



