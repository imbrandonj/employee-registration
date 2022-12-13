"use strict";
/* 
*   form.js
*   author: Brandon Jenkins
*   date: 11/25/2022 
*
*   Form Event
*   The purpose of this file is to validate the form,
*   Store the values into a new Employee object,
*   And, upon submitting, displays the Employee detail card
*/

// Form ID
let form = document.getElementById("register");

// Form input elements
let firstNameField = document.getElementById("firstNameForm");
let lastNameField = document.getElementById("lastNameForm");
let middleNameField = document.getElementById("middleNameForm");
let dobField = document.getElementById("dobForm");
let socialField = document.getElementById("socialForm");
let streetField = document.getElementById("streetForm");
let cityField = document.getElementById("cityForm");
let stateField = document.getElementById("stateForm");
let zipcodeField = document.getElementById("zipcodeForm");
let hireDateField = document.getElementById("hireDateForm");
let jobPositionField = document.getElementById("jobPositionForm");
let departmentField = document.getElementById("departmentForm");
let homePhoneField = document.getElementById("homePhoneForm");
let workPhoneField = document.getElementById("workPhoneForm");
let cellPhoneField = document.getElementById("cellPhoneForm");
let emailField = document.getElementById("emailForm");


// Submit button events
let subButton = document.getElementById("submit");
subButton.addEventListener("click", validateName);  // correct name character input
subButton.addEventListener("click", validateTele);  // custom phone validity message
subButton.addEventListener("click", validateZip);  // custom ZIP code message


// Validate name characters - only letters and apostrophes
function validateName() {

    // First name

    // Last name

    // Middle name
}


// Show custom validity message for Phone numbers
function validateTele() {
   
    // Home Phone
    if ( homePhoneField.validity.patternMismatch || homePhoneField.validity.valueMissing ) 
        homePhoneField.setCustomValidity("Enter in xxx-xxx-xxxx format");
    else
        homePhoneField.setCustomValidity("");

    // Work Phone
    if ( workPhoneField.validity.patternMismatch || workPhoneField.validity.valueMissing )
        workPhoneField.setCustomValidity("Enter in xxx-xxx-xxxx format");
    else
        workPhoneField.setCustomValidity("");

    // Cell Phone
    if ( cellPhoneField.validity.patterMismatch || cellPhoneField.validity.valueMissing )
        cellPhoneField.setCustomValidity("Enter in xxx-xxx-xxxx format");
    else
        cellPhoneField.setCustomValidity("");
};


// Show custom validity message for Zip code
function validateZip() {

    if ( zipcodeField.validity.patternMismatch || zipcodeField.validity.valueMissing )
        zipcodeField.setCustomValidity("Enter a 5 digit ZIP code")
    else
        zipcodeField.setCustomValidity("");
}


// Form submit event
form.addEventListener("submit", (event) => {

    event.preventDefault();
    
    // Retrieve form values
    let firstName = document.getElementById("firstNameForm").value;
    let lastName = document.getElementById("lastNameForm").value;
    let middleName = document.getElementById("middleNameForm").value;
    let dob = document.getElementById("dobForm").value;
    let social = document.getElementById("socialForm").value;
    let street = document.getElementById("streetForm").value;
    let city = document.getElementById("cityForm").value;
    let state = document.getElementById("stateForm").value;
    let zipcode = document.getElementById("zipcodeForm").value;
    let hireDate = document.getElementById("hireDateForm").value;
    let jobPosition = document.getElementById("jobPositionForm").value;
    let department = document.getElementById("departmentForm").value;
    let homePhone = document.getElementById("homePhoneForm").value;
    let workPhone = document.getElementById("workPhoneForm").value;
    let cellPhone = document.getElementById("cellPhoneForm").value;
    let email = document.getElementById("emailForm").value;
    

    // Create a new Employee object based off form values
    let newEmployee = new Employee(firstName, lastName, middleName, dob, social, street, city, state, zipcode, hireDate, jobPosition, department, homePhone, workPhone, cellPhone, email);

    // Append the new Employee object to our array of Employee objects
    employeeArray.push(newEmployee);

    // Store new Employee in localStorage for immediate review
    pushToLocal(newEmployee);

    // Reset form for new Employee to be registered
    document.forms.register.reset();

    // Display the Employee details upon form submission (located in display.js)
    display(employeeContent);

    // This function (located in employee.js) fills the Employee detail card
    fillEmployeeCard();

});
