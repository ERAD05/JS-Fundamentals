const lines = [
  "c is fun.",
  "c is fun.",
  "c is fun.",
  "c is fun.",
  "c is fun.",
  "c is fun.",
  "c is fun.",
];

for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}
let x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  
}