const und = undefined;
const keypad = [
  ['1', '2', '3'], // numRow 0
  ['4', '5', '6'], // numRow 1
  ['7', '8', '9'], // numRow 2
  [und, '0', und], // numRow 3
];

const getPINs = (observed) => {
  // Convert string argument to array of strings
  // e.g. '123' --> ['1', '2', '3']
  const numbers = observed.split('');

  // Iterate through numbers to:
  // 1. Find same-index values of adjacent numRows:
  // a. For each number...
  numbers.forEach(number => {
    let currentRow, currentIndex;

    // b. find the subarray index it belongs to...
    keypad.forEach((numRow, numRowIdx) => {
      if(numRow.includes(number)) {
        // c. and track the index of the numRow
        currentRow = numRowIdx;
        // d. and find the index of the number in the numRow
        currentIndex = numRow.indexOf(number);
      }
    });
  });
}