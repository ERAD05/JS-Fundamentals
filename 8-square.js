const printSquare = (sizeArg) => {
  const size = parseInt(sizeArg);

  if (isNaN(size)) {
    console.log("Missing size");
    return;
  }

  if (size <= 0) {
    return; // No square to print for non-positive size
  }

  let rowCount = 0;
  while (rowCount < size) {
    let row = '';
    let colCount = 0;
    while (colCount < size) {
      row += 'X';
      colCount++;
    }
    console.log(row);
    rowCount++;
  }
};

// Example usage:
printSquare(2);
printSquare("6");
printSquare("hello");
printSquare(0);
printSquare(-2);