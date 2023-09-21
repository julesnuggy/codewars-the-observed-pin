const und = undefined;
const keypad = [
  ['1', '2', '3'], // numRow 0
  ['4', '5', '6'], // numRow 1
  ['7', '8', '9'], // numRow 2
  [und, '0', und], // numRow 3
];

const findNumberLocation = (number) => {
  let numRowIndex, valueIndex;

  // b. find the subarray index it belongs to...
  keypad.forEach((numRow, numRowIdx) => {
    if(numRow.includes(number)) {
      // c. and track the index of the numRow
      numRowIndex = numRowIdx;
      // d. and find the index of the number in the numRow
      valueIndex = numRow.indexOf(number);
    }
  });

  return [numRowIndex, valueIndex];
}

const getPINs = (observed) => {
  // Convert string argument to array of strings
  // e.g. '123' --> ['1', '2', '3']
  const numbers = observed.split('');

  // Iterate through numbers to:
  // 1. Find same-index values of adjacent numRows:
  // a. For each number...
  numbers.forEach(number => {
    const adjacentNums = [];
    const [numRowIndex, valueIndex] = findNumberLocation(number);

    // e. Get the number of the previous numRow with the same index
    keypad[numRowIndex - 1] // Check prev numRow exists
      && keypad[numRowIndex - 1][valueIndex] // Check value is not undefined
      && adjacentNums.push(keypad[numRowIndex - 1][valueIndex]);

    // f. Get the number of the next numRow with the same index
    keypad[numRowIndex + 1] // Check next numRow exists
      && keypad[numRowIndex + 1][valueIndex] // Check value is not undefined
      && adjacentNums.push(keypad[numRowIndex + 1][valueIndex])

    // 2. Find the next index number in the same numRow
    keypad[numRowIndex][valueIndex + 1] // Check value is not undefined
      && adjacentNums.push(keypad[numRowIndex][valueIndex + 1])

    // 3. Find the previous index number in the same numRow
    keypad[numRowIndex][valueIndex - 1] // Check value is not undefined
      && adjacentNums.push(keypad[numRowIndex][valueIndex - 1])
  });
}
