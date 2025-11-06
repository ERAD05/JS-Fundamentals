// This function demonstrates how to handle arguments passed to a script.
// In a Node.js environment, arguments are accessed via process.argv.
// The first two elements of process.argv are 'node' and the script path,
// so actual user-provided arguments start from index 2.
function handleArguments() {
  const args = process.argv.slice(2); // Get user-provided arguments

  if (args.length === 0) {
    console.log("No argument");
  } else if (args.length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}

// Call the function to execute the logic
handleArguments();