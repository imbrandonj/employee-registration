"use strict";
/*
*   Employee Registration App
*   employee.js
*   author: Brandon Jenkins
*   date: 11/25/2022
*
*   This file handles the Employee class,
*   Employee object array,
*   LocalStorage,
*   and filling out the Employee detail document
*/

// Employee Class
// This is the necessary employee information for an Employee object
class Employee {
    constructor(firstName, lastName, middleName, dob, social, street, city, state, zipcode, hireDate, jobPosition, department, homePhone, workPhone, cellPhone, email) {
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
}

// Array of Employee objects
let employeeArray = [];

// This function stores an Employee object to localStorage
const pushToLocal = (employeeObj) => localStorage.setItem("employeeObj", JSON.stringify(employeeObj));


// Fill the employee detail card with the properties from the given Employee object stored in localStorage
function fillEmployeeCard() {

    // Obtain document nodes to be filled with employee text content
    // These nodes are located in employee.html
    const firstNameDetail = document.getElementById("firstName");
    const lastNameDetail = document.getElementById("lastName");
    const middleNameDetail = document.getElementById("middleName");
    const dobDetail = document.getElementById("dob");
    const socialDetail = document.getElementById("social");
    const streetDetail = document.getElementById("streetName");
    const cityDetail = document.getElementById("city");
    const stateDetail = document.getElementById("state");
    const zipcodeDetail = document.getElementById("zipcode");
    const hireDateDetail = document.getElementById("hireDate");
    const jobPositionDetail = document.getElementById("jobPosition");
    const departmentDetail = document.getElementById("department");
    const homePhoneDetail = document.getElementById("homePhone");
    const workPhoneDetail = document.getElementById("workPhone");
    const cellPhoneDetail = document.getElementById("cellPhone");
    const emailDetail = document.getElementById("emailName");

    // Retrieve Employee from localStorage
    let employeeObj = localStorage.getItem("employeeObj");
    employeeObj = JSON.parse(employeeObj);

    // Display Employee detail provided by employeeObj stored in localStorage
    firstNameDetail.textContent = employeeObj["firstName"];
    lastNameDetail.textContent = employeeObj["lastName"];
    middleNameDetail.textContent = employeeObj["middleName"];
    dobDetail.textContent = employeeObj["dob"];
    socialDetail.textContent = employeeObj["social"];
    streetDetail.textContent = employeeObj["street"];
    cityDetail.textContent = employeeObj["city"];
    stateDetail.textContent = employeeObj["state"];
    zipcodeDetail.textContent = employeeObj["zipcode"];
    hireDateDetail.textContent = employeeObj["hireDate"];
    jobPositionDetail.textContent = employeeObj["jobPosition"];
    departmentDetail.textContent = employeeObj["department"];
    homePhoneDetail.textContent = employeeObj["homePhone"];
    workPhoneDetail.textContent = employeeObj["workPhone"];
    cellPhoneDetail.textContent = employeeObj["cellPhone"];
    emailDetail.textContent = employeeObj["email"];
};


// Delete Employee button event
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", () => {

    if ( confirm("Are you sure you wish to delete this employee?") ) {
        
        // Retrieve Employee from localStorage
        let employeeObj = localStorage.getItem("employeeObj");

        // Search through employeeArray[] for employeeObj match
        let indexOf = -1;
        for ( let employee of employeeArray ) {
            if ( employeeObj == JSON.stringify(employee) ) {
                indexOf = employeeArray.indexOf(employee);
            }
        }

        // Delete Employee from the employeeArray[]
        employeeArray.splice(indexOf, 1);

        // Redirect user to Employee list display
        display(listContent);
    }
});