let step = 1;

const quickSort = arr => {
    // base case
    if (arr.length <= 1) return arr;

    // recursive case
    let pivot = arr.pop();

    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x >= pivot);

    console.log("Step ", step, ": Left is ", left, ". Right is ", right, ". Pivot is ", pivot);

    step++;

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([4, 8, 11, 90, 21, 2, 1, 9, 3]));