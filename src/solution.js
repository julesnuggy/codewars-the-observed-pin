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

function storeAdjacentNumber(numRowIndex, valueIndex, adjacentNums) {
  keypad[numRowIndex] // Check prev numRow exists
    && keypad[numRowIndex][valueIndex] // Check value is not undefined
    && adjacentNums.push(keypad[numRowIndex][valueIndex]);
}

const res = [];
const rowsCurrIdx = [];

const loop = (arrayToLoop, currentIndex = 0) => {
  // Start at index 0 of the original array (allPossibleNumbers) and loop through it
  arrayToLoop[currentIndex].forEach((_, numRowsIndex) => {
    // Store the current index location for the current array we're looping through
    rowsCurrIdx[currentIndex] = numRowsIndex;

    // If there is another array in the next index, then call this function to create
    // a nested loop (i.e. recursion)
    if (arrayToLoop[currentIndex + 1]) {
      loop(arrayToLoop, currentIndex + 1);
    } else {
      // Otherwise, if we are at the last numRows array, then allow the loop to iterate through
      // and get use the stored index locations to get the number combination
      const value = rowsCurrIdx.map((num, idx) => arrayToLoop[idx][num]).join('');
      // Store the value in a global variable
      res.push(value);
    } });
};

const getPINs = (observed) => {
  // Convert string argument to array of strings
  // e.g. '123' --> ['1', '2', '3']
  const numbers = observed.split('');
  const allPossibleNumbers = [];

  // 1. Iterate through the numbers and store the index locations of the numRow and its value:
  // a. For each number...
  numbers.forEach(number => {
    const possibleNumbers = [number];
    const [numRowIndex, valueIndex] = findNumberLocation(number);

    // 2. Get the number of the next numRow with the same index
    storeAdjacentNumber(numRowIndex + 1, valueIndex, possibleNumbers);

    // 3. Get the number of the previous numRow with the same index
    storeAdjacentNumber(numRowIndex - 1, valueIndex, possibleNumbers);

    // 4. Find the next index number in the same numRow
    storeAdjacentNumber(numRowIndex, valueIndex + 1, possibleNumbers);

    // 5. Find the previous index number in the same numRow
    storeAdjacentNumber(numRowIndex, valueIndex - 1, possibleNumbers);

    allPossibleNumbers.push(possibleNumbers);
  });

  console.log(allPossibleNumbers)
}

getPINs('11')
