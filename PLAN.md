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
