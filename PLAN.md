A number's possible adjacent numbers are:
1. Those in another sub-array of the same index
   - e.g. 4 is in index 0 of subarray 1, the numbers in subarrays 0 and 2 of index 0 are adjacent,
   i.e. 1 and 7

2. Those in the next index of the same sub-array
   - e.g. 5 is in index 1 of subarray 1, so the number in index 2 of subarray 1 is adjacent, i.e. 6

3. Those in the previous index of the same sub-array
   - e.g. 5 is in index 1 of subarray 1, so the number in index 0 of subarray 1 is adjacent, i.e. 4

For each number in the `observed` argument, we can find the adjacent numbers using each of these
searches. If we try to access an index or subarray that does not exist, we get undefined,
which is fine, as we then know there is nothing there.

We store all possible numbers for each digit observed in a top-level array, so it will be an array of arrays.
e.g. An input of "123" will give: `[ [ '1', '2', '4' ], [ '2', '1', '3', '5' ], [ '3', '2', '6' ] ]`

The possible combinations are:
- For 1 array in `allPossibleNumbers`, it is just that array.
- For more than 1 array:
  - I need a recursive loop, so that we navigate through the arrays in a logical and non-repeating order
  - We start with the array in index 0, and create a loop
  - The first thing to do is to check if there's an array in the next index
    - If there is, then we move to that array and create a nested loop for that one
    - We keep checking and creating nested loops until we reach the final array of the `allPossibleNumbers` parent array
  - Once we reach the final array, we can loop through all of those elements
  - To keep track of the values, I need to create an array which is the same size as the parent array.
    - This array will track the current index location of each array with the values 
    - It will start off with all values being at 0
    - Within each for loop that we create, we update the current index location for that array
    - Only when we reach the deepest array do we check the current index location array, look up the corresponding 
      array values, join them into one string, and push these values to a "global" result variable (array)
