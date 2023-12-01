let mAray: number[] = [91, 62, 43, 34, 25];

console.log("Original mArray:", mAray);

// push is use to add so adding 16,74
mAray.push(16, 74);
console.log("mArray after push:", mAray);

// pop use to remove last elements
mAray.pop();
console.log("mArray after pop:", mAray);

// remove 1st element 
mAray.shift();
console.log("mmArray after shift:", mAray);

// add new in start
mAray.unshift(100);
console.log("mArray after unshift:", mAray);


// create subarray by remove element
const removedElements: number[] = mAray.splice(1, 5); 
console.log("mArray after splice:", mAray);
console.log("Removed Elements:", removedElements);

// Reset the mArray
mAray = [91, 32,53, 34, 15];

// create subarray from 1 -3
const subArray: number[] = mAray.slice(1, 4); 
console.log("Original mArray:", mAray);
console.log("SubmArray created with slice:", subArray);
