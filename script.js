function firstWord(s) {
    // Step 1: Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Step 2: Check if the string is empty
    if (s.length === 0) {
        return ""; // return empty string
    }
    
    // Step 3: Find the index of the first space
    const spaceIndex = s.indexOf(' ');
    
    // Step 4: Extract and return the first word
    if (spaceIndex !== -1) {
        return s.substring(0, spaceIndex); // return substring before the first space
    } else {
        return s; // return the whole string if no space is found
    }
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));