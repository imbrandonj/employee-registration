/*
*   main.js
*   author: Brandon Jenkins
*   date: 11/25/2022
*
*   This file handles the Employee class,
*   Employee object array,
*   LocalStorage,
*   and filling out the employee detail document
*/

// Employee Class
// This is the necessary employee information for an Employee object
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

// Array of Employee objects
let employeeArray = [];


// This function stores an employee to local storage
function pushToLocal(employeeObj) {

    localStorage.setItem("firstName", employeeObj.firstName);
    localStorage.setItem("lastName", employeeObj.lastName);
    localStorage.setItem("middleName", employeeObj.middleName);
    localStorage.setItem("dob", employeeObj.dob);
    localStorage.setItem("social", employeeObj.social);
    localStorage.setItem("street", employeeObj.street);
    localStorage.setItem("city", employeeObj.city);
    localStorage.setItem("state", employeeObj.state);
    localStorage.setItem("zipcode", employeeObj.zipcode);
    localStorage.setItem("hireDate", employeeObj.hireDate);
    localStorage.setItem("jobPosition", employeeObj.jobPosition);
    localStorage.setItem("department", employeeObj.department);
    localStorage.setItem("homePhone", employeeObj.homePhone);
    localStorage.setItem("workPhone", employeeObj.workPhone);
    localStorage.setItem("cellPhone", employeeObj.cellPhone);
    localStorage.setItem("email", employeeObj.email);
};


// Fill the employee detail card with the properties from the given employee object stored in local storage
function fillEmployeeCard() {

    // Obtain document nodes to be filled with employee text content
    // These nodes are located in employee.html
    let firstNameDetail = document.getElementById("firstName");
    let lastNameDetail = document.getElementById("lastName");
    let middleNameDetail = document.getElementById("middleName");
    let dobDetail = document.getElementById("dob");
    let socialDetail = document.getElementById("social");
    let streetDetail = document.getElementById("streetName");
    let cityDetail = document.getElementById("city");
    let stateDetail = document.getElementById("state");
    let zipcodeDetail = document.getElementById("zipcode");
    let hireDateDetail = document.getElementById("hireDate");
    let jobPositionDetail = document.getElementById("jobPosition");
    let departmentDetail = document.getElementById("department");
    let homePhoneDetail = document.getElementById("homePhone");
    let workPhoneDetail = document.getElementById("workPhone");
    let cellPhoneDetail = document.getElementById("cellPhone");
    let emailDetail = document.getElementById("emailName");

    // Display employee detail provided by local storage
    firstNameDetail.textContent = localStorage.getItem("firstName");
    lastNameDetail.textContent = localStorage.getItem("lastName");
    middleNameDetail.textContent = localStorage.getItem("middleName");
    dobDetail.textContent = localStorage.getItem("dob");
    socialDetail.textContent = localStorage.getItem("social");
    streetDetail.textContent = localStorage.getItem("street");
    cityDetail.textContent = localStorage.getItem("city");
    stateDetail.textContent = localStorage.getItem("state");
    zipcodeDetail.textContent = localStorage.getItem("zipcode");
    hireDateDetail.textContent = localStorage.getItem("hireDate");
    jobPositionDetail.textContent = localStorage.getItem("jobPosition");
    departmentDetail.textContent = localStorage.getItem("department");
    homePhoneDetail.textContent = localStorage.getItem("homePhone");
    workPhoneDetail.textContent = localStorage.getItem("workPhone");
    cellPhoneDetail.textContent = localStorage.getItem("cellPhone");
    emailDetail.textContent = localStorage.getItem("email");
};
