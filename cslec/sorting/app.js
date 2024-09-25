// bubble sort

const bubbleSort = (arr) => {

    for (let i = arr.length; i > 0; i--) {
        
        let noSwaps = true;

        for (let j = 0; j < i - 1; j++) {
            
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                
                noSwaps = false;
                let x = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = x;
    
            }

        }

        if (noSwaps) {
            break;
        }

    }

    return arr;

}

console.log(bubbleSort([3, 4, 10, 2, 5, 1, 250, 300, 233, 7, 18]))


// destructuring for an array
