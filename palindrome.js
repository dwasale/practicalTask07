// Ask uer to input a string
let word = prompt("Please enter a word: ");
// Declaring the function to check wether the given sting is palindrome or not
function isPalindrome(string){
    let left = 0;   // Declaring two pointers to traverse the string
    let right = string.length -1;
    // Loop that will do our logic inside
    while(left <= right){ // If left ever becomes greater than right that means 
        //we have reacehd the middle of the string and shouldn't continue the loop
        if(string[left] !== string[right]) return false; // If the left character doesn't match the right than immediately result is false
        left++; // If it match we increment the left pointer and decrement the right pointer as check if they are equal/ similar 
        right--;
    }
    // True value is outside the loop because we have completed the loop without returning the false value that means the string is palindrome
    return true;  
}
// Displaying the message as required 
if(isPalindrome(word) == true){
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is not a palindrome")
}