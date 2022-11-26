/*
*   main.js
*   author: Brandon Jenkins
*   date: 11/25/2022
*
*   This file 
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