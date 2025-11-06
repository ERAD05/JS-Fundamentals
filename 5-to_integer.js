function printMyNumber(arg) {
  const num = parseInt(arg); // Attempt to convert the argument to an integer

  // Check if the conversion resulted in a valid number (not NaN)
  if (!isNaN(num)) {
    console.log(`My number: ${num}`);
  }else {
console.log(parseInt("hello"));
  }
}

// Example usage:
printMyNumber("erad");  // No output (NaN)   
printMyNumber("89");  // Output: My number: 89
printMyNumber("89");    // Output: My number: 89
printMyNumber("89");    // Output: My number: 89
printMyNumber("px");    // No output (NaN)
printMyNumber(null);     // No output (NaN)
printMyNumber(undefined); // No output (NaN)