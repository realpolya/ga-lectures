console.log("Hello");

const url = 'https://swapi.dev/api/people'

// making an AJAX request
console.log(1);

// 3 is printed out before 2 as things are
// promised for the future
let starWarsData;
let starWarsJson = fetch(url)
    // .then runs the code if the promise is fulfilled
    .then(res => {
        if (res.ok) {
            console.log(`ok`, 2);
            console.log(res);
        }
        return res.json();
    })
    .then((data) => {
        displayData(data);
    })
    // .catch runs if the promise is rejected
    .catch(err => console.log('oops something went wrong', err));

    // .finally runs no matter if the promise is fulfilled or not
console.log(3);

console.log("this is our starWarsJson: ", starWarsJson);
console.log("this is our starWarsData: ", starWarsData); // returns undefined

function displayData(data) {
    starWarsData = data;
    console.log("with a function", starWarsData);
}

/* Chaining example:

fetch(url)
  .then(res => res.json())
  .then(res => console.log("success!", res))
  .catch(err => console.log("something went wrong...", err));


*/