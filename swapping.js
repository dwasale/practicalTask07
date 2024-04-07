let value = false; // Initializing to run the condition
// Condition to check if user has enter 3 digits number
while(!value){
    // Asking user input
    let num = prompt("Enter any 3 digit number.");
    // Initializing the empty value to be swapped
    let swapped = "";
    // Checking is the user input value is more than equal to 3 digits
    if (num.length >= 3){
        // For loop
        for(let i = 0; i < num.length; i++){
            // Store and replace the second digit with last digit
            if(i === 1) swapped += num.slice(-1);
            // Replace the last digit with second digit
            else if(i === num.length - 1) {
                swapped += num[1];
            }
            else swapped += num[i];
        }
        // If the condition is true the value is changed
        value = true;
        // Printing out the original and swapped user input number
        console.log("Original Number: " + num);
        console.log("Swapped Number: " + swapped);
    }
    // If the condition which is minimum 3 digits number is false 
    else alert("Enter valid number"); 
}