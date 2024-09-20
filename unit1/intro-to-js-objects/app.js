let name = "Polina";

const music = {
 currentTrack: "Love Brand New",
 volume: 70
}; // always use const for objects

music.volume = 100; // reassign a previously existing value

music.currentPlaylist = ["Tearing Me Up", "Who Do You Want", "Alejandro", "Poker Face"];

console.log("Step 1: ", music.volume);
console.log("Step 2: ", music);
console.log("Step 3: ", music.currentPlaylist[1]);

// delete a property in an object
delete music.currentTrack
music.currentPlaylist.splice(1, 1);

console.log(music); 

// methods are functions inside of an object
music.mute = function mute() {
 music.volume = 0;
};

music.mute();

music.trackId = 0;
music.currentTrack = "Tearing Me Up";

music.next = function next() {
 music.trackId++;
 music.currentTrack = music.currentPlaylist[music.trackId];
}
// can't use arrow functions for objects

console.log(music);
music.next();
console.log(music.currentPlaylist[music.trackId]);
console.log(music);

music.next();
console.log(music); 

// you can create an array of objects

delete music.currentPlaylist;

music.currentPlaylist = [
 { 
  title: "Just Ken",
  artist: "Ryan Gosling",
  album: "Barbie The Album",
  length: "3:43", 	
 }, {
  title: "Hey Blondie",
  artist: "Dominic Fike",
  album: "Barbie The Album",
  length: "2:21"
 }
];

console.log(music);
console.log(music.currentPlaylist[0].title); 

music.currentPlaylist[1].length = "3:42";
console.log(music.currentPlaylist[1].length); 

// using this keyword
const love = {
	name: "King",
	age: 31,
	loveGrows() {
		this.age ++;
	},
	drama() {
		this.name = "Polchik";
	},
};

console.log(love);
love.loveGrows();
console.log(love);

// iterating through properties, using bracket notation
for (key in love) {
	console.log(`The value of the ${key} property is ${love[key]}`);
}


// shorthand syntax
const title = "To Kill a Mockingbird";
const author = "Harper Lee";
const yearPublished = 1960;

const book = {
	title,
	author,
	yearPublished,
};

console.log(book); 

// referencing memory
const person = { name: "raul" }
const otherPerson = { ...person }

otherPerson.name = "banana"

console.log(person); 
console.log(otherPerson);

