/* 
*   form.js
*   author: Brandon Jenkins
*   date: 11/13/2022 
*
*   The purpose of this file is to validate the form.html form
*   Save the values into an employee object,
*   Store a collection of employee objects,
*   And to store employee details into localStorage
*/

// Employee Class
// This is all the necessary employee information
function Employee(firstName, lastName, middleName, dob, social, street, city, state, zipcode, hireDate, jobPosition, department, homePhone, workPhone, cellPhone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.dob = dob;
    this.social = social;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.hireDate = hireDate;
    this.jobPosition = jobPosition;
    this.department = department;
    this.homePhone = homePhone;
    this.workPhone = workPhone;
    this.cellPhone = cellPhone;
    this.email = email;
}

let employeeArray = [];

// Form on register.html
let form = document.getElementById("registerEmployee");

// Form submit event
form.addEventListener("submit", (event) => {

    event.preventDefault();

    // Retrieve form values from register.html
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

    // Create a new employee based off form values
    let newEmployee = new Employee(firstName, lastName, middleName, dob, social, street, city, state, zipcode, hireDate, jobPosition, department, homePhone, workPhone, cellPhone, email);

    // Append the new employee object to our array of employee objects.
    employeeArray.push(newEmployee);

});