// bubble sort

const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            
            if (arr[j] > arr[j + 1]) {
            
                let x = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = x;
    
            }

        }

    }

    return arr;

}

console.log(bubbleSort([3, 4, 10, 2, 5, 1, 250, 300, 233]))