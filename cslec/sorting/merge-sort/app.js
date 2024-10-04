// merge is helper function that compares 2 sorted arrays

// colors for terminal
const red = '\x1b[31m';
const reset = '\x1b[0m';
const green = '\x1b[32m';

const merge = (arr1, arr2) => {

    const result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        
        if (arr1[i] < arr2[j]) {
           result.push(arr1[i]);
           i++;
        } else {
            result.push(arr2[j]);
            j++;
        }

    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;

};

let step = 1;

const mergeSort = arr => {
    
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    console.log(`Step ${step}: Left is ${green}${left}${reset}, right is ${red}${right}${reset}`);

    step++;

    return merge(left, right);

};

console.log(mergeSort([5, 1, 352, 69, 102, 77, 15]));
