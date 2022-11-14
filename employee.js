/*
*   employee.js
*   author: Brandon Jenkins
*   date: 11/13/2022
*
*   This js file fills out the html document based upon which employee is selected
*/


// Fill the employee detail card with the properties from the given employee object 
function fillEmployeeCard(employeeObject) {

    // Obtain document nodes to be filled with employee text content
    // These nodes are located in employee.html
    let firstNameDetail = document.getElementById("firstName");
    let lastNameDetail = document.getElementById("lastName");
    let middleNameDetail = document.getElementById("middleName");
    let dobDetail = document.getElementById("dob");
    let socialDetail = document.getElementById("social");
    let streetDetail = document.getElementById("street");
    let cityDetail = document.getElementById("city");
    let stateDetail = document.getElementById("state");
    let zipcodeDetail = document.getElementById("zipcode");
    let hireDateDetail = document.getElementById("hireDate");
    let jobPositionDetail = document.getElementById("jobPosition");
    let departmentDetail = document.getElementById("department");
    let homePhoneDetail = document.getElementById("homePhone");
    let workPhoneDetail = document.getElementById("workPhone");
    let cellPhoneDetail = document.getElementById("cellPhone");
    let emailDetail = document.getElementById("email");

    // Display employee detail provided by employee object
    firstNameDetail.textContent = employeeObject.firstName;
    lastNameDetail.textContent = employeeObject.lastName;
    middleNameDetail.textContent = employeeObject.middleName;
    dobDetail.textContent = employeeObject.dob;
    socialDetail.textContent = employeeObject.social;
    streetDetail.textContent = employeeObject.street;
    cityDetail.textContent = employeeObject.city;
    stateDetail.textContent = employeeObject.state;
    zipcodeDetail.textContent = employeeObject.zipcode;
    hireDateDetail.textContent = employeeObject.hireDate;
    jobPositionDetail.textContent = employeeObject.jobPosition;
    departmentDetail.textContent = employeeObject.department;
    homePhoneDetail.textContent = employeeObject.homePhone;
    workPhoneDetail.textContent = employeeObject.workPhone;
    cellPhoneDetail.textContent = employeeObject.cellPhone;
    emailDetail.textContent = employeeObject.email;
}