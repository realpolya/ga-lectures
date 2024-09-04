const nums = [3, 10, 7, 50, 100]

let sum = 0;

nums.forEach((num, index) => {
    sum += nums[index];
})

console.log(sum);

// at() looking at the end of the array, added in 2022
console.log(nums.at(-2));

/* continue and break not available in forEach loop
continue skips the rest of the loop
break breaks out of the entire loop
continue breaks out of this iteration of the lopp (but not whole loop) */


/* by value VS by reference:
    arrays are found by reference in the memory
    equaling one array to another will end up
    pointing to the other array.

    simple variables can be copied without reference.
    memory is allocated for simple variables
*/