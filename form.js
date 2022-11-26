/* 
*   form.js
*   author: Brandon Jenkins
*   date: 11/25/2022 
*
*   Form Event
*   The purpose of this file is to validate the form
*   And to store the values into a new employee object
*/

// Form on register.html
let form = document.getElementById("register");

// Form submit event
form.addEventListener("submit", (event) => {

    //event.preventDefault();

    // Retrieve form values from form.html
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

    // Append the new Employee object to our array of employee objects
    employeeArray.push(newEmployee);

    // Store new Employee in localStorage for immediate review in employee.html
    pushToLocal(newEmployee);

});
