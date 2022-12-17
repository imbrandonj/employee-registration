"use strict";
/*
*   Employee Registration App
*   display.js
*   author: Brandon Jenkins
*   date: 11/25/2022
*
*   Display
*   The purpose of this file is the selection of which content to display
*   In the single-page Employee Registration app
*
*   Major div labels: index, form, employee content, and list are used for display
*   These divs are inactive via CSS, with only one of them being active at a time
*
*   display.js also performs employee list display via the Employee object array 
*/

// Main content display elements
const indexContent = document.getElementById("index");
const formContent = document.getElementById("form");
const employeeContent = document.getElementById("employeeDetails");
const listContent = document.getElementById("employeeList");

// Footer display elements
const footHome = document.getElementById("footHome");
const footList = document.getElementById("footList");
const footForm = document.getElementById("footForm");

// Index redirect buttons
const indexListButton = document.getElementById("indexListButton");
const indexRegisterButton = document.getElementById("indexRegisterButton");

// Click events for content to be displayed
indexListButton.addEventListener("click", () => {
    display(listContent);
});

indexRegisterButton.addEventListener("click", () => {
    display(formContent);
});

footHome.addEventListener("click", () => {
    display(indexContent);
});

footList.addEventListener("click", () => {
    display(listContent);
});

footForm.addEventListener("click", () => {
    display(formContent);
});

// Content that is currently displayed
// On load, it is "index"
// Can be "index", "form", "list", or "employee"
let currentDisplay = "index";

// Main display content function
// parameter "content" can be "listContent", "formContent", "indexContent", or "employeeContent"
function display(content) {

    // Check current display conditions
    // And change display to "none"
    if ( currentDisplay === "index" ) 
        indexContent.style.display = "none";

    else if ( currentDisplay == "form" ) 
        formContent.style.display = "none";

    else if ( currentDisplay == "list" )
        listContent.style.display = "none";

    else if ( currentDisplay == "employee")
        employeeContent.style.display = "none";

    // Display content passed to parameter
    content.style.display = "block";

    // Change to employee list content
    if ( content == listContent ) {
        currentDisplay = "list";
        displayList(employeeArray);
        footHome.style.display = "block";
        footForm.style.display = "block";
        footList.style.display = "none";
    }
    // Change to employee form registration content
    else if ( content == formContent ) {
        currentDisplay = "form";
        footHome.style.display = "block";
        footList.style.display = "block";
        footForm.style.display = "none";
    }
    // Change to home content
    else if ( content == indexContent ) {
        currentDisplay = "index";
        footHome.style.display = "none";
        footList.style.display = "none";
        footForm.style.display = "none";
    }
    // Change to employee details content
    else if ( content == employeeContent ) {
        currentDisplay = "employee";
        footHome.style.display = "block";
        footList.style.display = "block";
        footForm.style.display = "block";
    }
}

/*
* Displays Employee list, provided by employeeArray[] 
* ( employeeArray[] is declared and initialized in employee.js file )
* Each li will have an event listener, that, when clicked
* Displays the clicked Employee content in employeeDetails div card
*/
function displayList(employeeObjArray) {

    // div holding li to be created
    let list = document.getElementById("list");

    // Clear previous list contents
    while ( list.firstChild ) {
        list.removeChild(list.firstChild);
    }

    // No employees yet entered
    if ( employeeObjArray.length === 0 ) {
        let noEmployees = document.createElement("p");
        noEmployees.textContent = "No employees yet entered.";
        list.append(noEmployees);
    }

    // Create a list of employee objects to be displayed
    else {

        // Sort employeeArray alphabetically by last name
        employeeObjArray.sort( (a, b) => a.lastName.localeCompare(b.lastName) );

        // List creation of Employee objects
        for ( let employee of employeeObjArray ) {
            let listItem = document.createElement("li");
            let anchor = document.createElement("a");
            anchor.textContent = employee.lastName + ", " + employee.firstName;

            // Event listener for each anchor, when triggered, displays Employee contents
            anchor.addEventListener("click", () => {

                // Search through array to find the clicked Employee object
                for ( let employee of employeeObjArray ) {

                    if ( employee.lastName + ", " + employee.firstName === anchor.textContent ) {
                        // Push Employee clicked to localStorage
                        pushToLocal(employee);

                        // Display the Employee details card
                        display(employeeContent);

                        // This function (located in employee.js) fills the Employee detail card
                        fillEmployeeCard();
                    }
                }
            });

            // Append new Employee element to the list
            listItem.append(anchor);
            list.append(listItem);
        }
    }
}