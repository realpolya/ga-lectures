/* initialize/Declare variable named nums (convention)
and assign it to an array literal */ 
const nums = [7, 10, 89, 2] // always initialize arrays wiht const

const movies = ["Inception", "Interstellar", "Dumb & Dumber"];

console.log(movies[0]);
console.log(movies.length);


// getting the last element of the array
console.log(movies[movies.length - 1]);

console.log(movies.reverse());

// falsy: NULL, undefined, 0, empty string, NaN, false

/* you can change an element inside the array,
 but not the array itself as an object (it is a const) */
movies[0] = "Barbie";
movies[movies.length] = "Crazy Stupid Love";

console.log(movies);

movies.length = 0; // emptying the array fast way
console.log(movies);

// push and pop
movies.push("Home Alone", "Belly", "Ghost", "Great");
// pop removes the last element of the array (returns it)
const removedMovie = movies.pop();
console.log(movies);
console.log(removedMovie); 

// shift over to the left, returns a new length of the array
console.log(movies.shift());
console.log(movies);

// unshift (add to the front, returns the length)
console.log(movies.unshift("Love"));
console.log(movies);

// syntactical for ... of loop
for (let x of movies) {
    console.log(x);
}

// imperative style of coding (how)
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

// declarative style of coding (what)
for (let movie of movies) {
    console.log(movie);
}

/* forEach() method – loops through all of the
array members and apply the function to it */
movies.forEach((movie) => {
    console.log(movie);
}) // always returns undefined

// movies.forEach(function () {})
// forEach (movie, i , arr)
movies.forEach((movie, index) => {
    if(index === 2) console.log("This is the third movie:");
    console.log(movie, index);
});