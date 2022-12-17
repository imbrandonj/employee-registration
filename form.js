"use strict";
/* 
*   Employee Registration App
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
const form = document.getElementById("register");

// Form input fields that are validated via js
// Remainder input fields are validated within html
const firstNameField = document.getElementById("firstNameForm");
const lastNameField = document.getElementById("lastNameForm");
const middleNameField = document.getElementById("middleNameForm");
const socialField = document.getElementById("socialForm");
const streetField = document.getElementById("streetForm");
const cityField = document.getElementById("cityForm");
const zipcodeField = document.getElementById("zipcodeForm");
const homePhoneField = document.getElementById("homePhoneForm");
const workPhoneField = document.getElementById("workPhoneForm");
const cellPhoneField = document.getElementById("cellPhoneForm");


// Submit button events
const subButton = document.getElementById("submit");
subButton.addEventListener("click", validateNames);  // test correct name character input
subButton.addEventListener("click", validateStreet);  // test correct street character input
subButton.addEventListener("click", validateTele);  // custom phone validity message
subButton.addEventListener("click", validateZip);  // custom ZIP code message
subButton.addEventListener("click", validateSocial);  // custom social security validity message


// Validate name strings - only letters, hypens, white space, and apostrophes
// Provide custom validity messages
function validateNames() {
    
    // Regex - only letters, & 1 instance of each: apostrophes, hyphens, white space
    const nameRegx = /[^a-zA-Z\s'-]|[\s'-]{2}/g;

    // Tested field values:
    let firstName = firstNameField.value;
    let middleName = middleNameField.value;
    let lastName = lastNameField.value;
    let cityName = cityField.value;

    // First name test
    if ( nameRegx.test(firstName) )
        firstNameField.setCustomValidity("Enter letters and only one instance of a hyphen or apostrophe");
    else 
        firstNameField.setCustomValidity("");

    // Middle name test
    if ( nameRegx.test(middleName) )
        middleNameField.setCustomValidity("Enter letters and only one instance of a hyphen or apostrophe");
    else 
        middleNameField.setCustomValidity("");

    // Last name test
    if ( nameRegx.test(lastName) )
        lastNameField.setCustomValidity("Enter letters and only one instance of a hyphen or apostrophe");
    else 
        lastNameField.setCustomValidity("");

    // City name test
    if ( nameRegx.test(cityName) )
        cityField.setCustomValidity("Enter letters and only one instance of a hyphen or apostrophe");
    else 
        cityField.setCustomValidity("");
}


// Validate street - only digits, letters, hyphens, or apostrophes
function validateStreet() {

    // Regex - only digits and letters, & 1 instance of each: apostrophes, hyphens, white space
    const streetRegx = /[^\da-zA-Z\s'-]|[\s'-]{2}/g;

    // Street value
    let street = streetField.value;

    // Street test vs regex; custom validity messages
    if ( streetRegx.test(street) )
        streetField.setCustomValidity("Enter digits, letters, and only one instance of a hyphen or apostrophe");
    else 
        streetField.setCustomValidity("");

}


// Show custom validity message for Phone numbers
// Pattern type given in index.html
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


// Show custom validity message for social security
function validateSocial() {

    if ( socialField.validity.patternMismatch || socialField.validity.valueMissing )
        socialField.setCustomValidity("Enter in xxx-xx-xxxx format");
    else
        socialField.setCustomValidity("");
}


// Form submit event
form.addEventListener("submit", (event) => {

    event.preventDefault();
    
    // Retrieve form values:
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

    // Store new Employee in localStorage for immediate review ( function located in employee.js )
    pushToLocal(newEmployee);

    // Reset form for new Employee to be registered
    document.forms.register.reset();

    // Display the Employee details upon form submission ( located in display.js )
    display(employeeContent);

    // This function ( located in employee.js ) fills the Employee detail card
    fillEmployeeCard();

});
