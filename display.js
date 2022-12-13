/*
*   display.js
*   author: Brandon Jenkins
*   date: 11/25/2022
*
*   Display
*   The purpose of this file is the selection of which content to display
*   In the single-page Employee Registration app
*/

// Main content display elements
let indexContent = document.getElementById("index");
let formContent = document.getElementById("form");
let employeeContent = document.getElementById("employeeDetails");
let listContent = document.getElementById("employeeList");

// Footer display elements
let footHome = document.getElementById("footHome");
let footList = document.getElementById("footList");
let footForm = document.getElementById("footForm");

// Index redirect buttons
let indexListButton = document.getElementById("indexListButton");
let indexRegisterButton = document.getElementById("indexRegisterButton");

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

// Display employee list provided by employeeArray[] 
// employeeArray[] is declared and initialized in employee.js file
function displayList(employeeObjArray) {

    // div holding li to be created
    let list = document.getElementById("list");

    // No employees yet entered
    if ( employeeObjArray.length === 0 ) {
        let noEmployees = document.createElement("p");
        noEmployees.textContent = "No employees yet entered.";
        list.append(noEmployees);
    }

    // Create a list of employee objects to be displayed
    else {

        // Clear previous list contents
        while ( list.firstChild ) {
            list.removeChild(list.firstChild);
        }

        // List creation of employee objects
        for ( let employee of employeeArray ) {
            let listItem = document.createElement("li");
            let anchor = document.createElement("a");
            anchor.textContent = employee.lastName + ", " + employee.firstName;
            listItem.append(anchor);
            list.append(listItem);
        }
    }
}