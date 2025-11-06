function printFirstArgument(arg1, ...args) {
  console.log(arg1);
}

// Example usage:
printFirstArgument("Hello", "World", 123); // Prints "Hello"
printFirstArgument(42);                  // Prints 42
printFirstArgument();                    // Prints undefined (if no arguments are passed)