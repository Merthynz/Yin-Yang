// Get values from the user. We need to get the yin and the yang value.
// Starts or controller function
function getValues() {

    // Get the user values from the page
    let yinValue = document.getElementById("yinValue").value;
    let yangValue = document.getElementById("yangValue").value;

    // We neet to validate our input
    // Parse into Integers
    yinValue = parseInt(yinValue);
    yangValue = parseInt(yangValue);

    // Check that the numbers are integers
    if(Number.isInteger(yinValue) && Number.isInteger(yangValue)) {

        // We call yinyang
        let yyArray = yinYangC(yinValue, yangValue);

        //  Call displayData and write the values to the screen
        displayData(yyArray);

    } else {
        alert("You must enter integers");
    }
}

// Do Yin Yang
// Generate numbers from yinValue to the yangValue
// Logic Functions

// Solution using if/else statement
function yinYang(yinValue, yangValue) {

    //init the return array
    let returnArray = [];

    // Loop from 1 to 100
    for (let index = 1; index <= 100; index++) {
        
        // Check to see if divisible by both (3 and 5)
        // Check to see if divisible by yin value (3)
        // Check to see if divisible by yang value (5)
        if(index % yinValue == 0 && index % yangValue == 0) {
            returnArray.push("YinYang");
        } else if (index % yinValue == 0){
            returnArray.push("Yin");
        } else if (index % yangValue == 0){
            returnArray.push("Yang");
        } else {
            returnArray.push(index);
        }
    }
    return returnArray;
}

// Solution using Boolean variables to check them upfront and then check the boolean variables using switch statement
function yinYangB(yinValue, yangValue){

    let returnArray = [];
    let Yin = false;
    let Yang = false;

    for (let i = 1; i <= 100; i++){

        Yin = i % yinValue == 0;
        Yang = i % yangValue == 0;

        switch(true)
        {
            case Yin && Yang:{
                returnArray.push("YinYang");
                break;
            }
            case Yin: {
                returnArray.push("Yin");
                break;
            }
            case Yang: {
                returnArray.push("Yang");
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

// Solution using ternary operator (?)
function yinYangC(yinValue, yangValue){
    
    let returnArray = [];

    for (let i = 1; i <= 100; i++){

        let value = ((i % yinValue == 0 ? "Yin" : "") + (i % yangValue == 0 ? "Yang" : "") || i);
        returnArray.push(value);
    }

    return returnArray;
}

// Display the numbers from start to end. Mark Yin, Yang and Yin Yang.
// Loop over the array and create a tablerow for each item.
function displayData(yyArray) {

    // Get the table body element from the page
    let tableBody = document.getElementById("results");

    // Get the template row
    let templateRow = document.getElementById("yyTemplate");

    // Clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < yyArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true)

        // Grab just the td and put them into an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(yyArray[index]);
        rowCols[0].textContent = yyArray[index];

        rowCols[1].classList.add(yyArray[index + 1]);
        rowCols[1].textContent = yyArray[index+1];

        rowCols[2].classList.add(yyArray[index + 2]);
        rowCols[2].textContent = yyArray[index+2];

        rowCols[3].classList.add(yyArray[index + 3]);
        rowCols[3].textContent = yyArray[index + 3];

        rowCols[4].classList.add(yyArray[index + 4]);
        rowCols[4].textContent = yyArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}