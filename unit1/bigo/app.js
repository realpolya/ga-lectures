function wordOccurrence(word, phrase){
    let result = 0 // 0(1)
    const array  = phrase.split(' ') // 0(1)
    for(let i = 0; i < array.length; i++){
      if(word.toLowerCase() === array[i].toLowerCase()){
        result++;
      }
    } // 0(n)
    return result // O(1)
  }
  

  function bubble_sort(list){
    for(let i = 0; i < list.length - 1; i++){ // O(n)
      for(let j  = 0; j < list.length - 2; j++){ // O(n)
        if(list[j+1] < list[j]){
          const temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
        }
      }
    }
    return list; // O(1)
  } // O(n^2)
  

  function factorial(n){
    if(n === 0){
      return 1;
    }else{
      return n * factorial(n-1);
    }
  } // 0(n)
  

  function bobIsFirst(people){
    return people[0] == 'bob'
  } // 0(1)


  function isPalindrome(input){
  const stack = [];
  let output = "";
  for(let i = 0; i < input.length; i++){ // O(n)
    stack.push(input[i]);
  }
  while(stack.length){ // O(n)
    output += stack.pop();
  }
  return output == input
} // O(n)


function sumOfDivisors(n){
    let result = 0;
    let i = 1;
    while(i < n){ // O(n)
      if( n % i == 0){
        result += i;
      }
      i++;
    }
    return result
  } // O(n)
  

  function printAllNumbersThenSumPairs(numArray){
    numArray.forEach((num)=>{ // O(n)
      console.log(num);
    });
    numArray.forEach((num, index)=>{ // O(n)
      if(index < numArray.length - 1){
        console.log(num + numArray[index+1])
      }
    });
  } // O(n)


  function isPrime(num){
    if(num == 1 || num == 2){ // O(1)
      return false
    }
    for(let i = 2; i < num - 1; i++){ // O(n)
      if(num % i == 0){
        return false
      }
    }
    return true // O(1)
  } // O(n)
  
  