// element.addEventListener(type, callbackFunction);

// variables
// const
const likeButtonElement = document.querySelector("#like-button");
const dislikeButtonEl = document.querySelector('#dislike-button');
const bodyElement = document.querySelector("body");


// let
let likesCount = 0;
let dislikesCount = 0;

// naming callback function 
// e stands for the event object inside of addEventListener
// e.target – triggered the event
const handleReaction = (e) => {
    console.log(e);
    if (e.target.id === "like-button") {
        likesCount++;
        console.log("You liked", likesCount);
        likeButtonElement.textContent = `${likesCount} like(s). Like this post!`
    } else if (e.target.id === "dislike-button") {
        dislikesCount++;
        console.log("You disliked", likesCount);
        dislikeButtonEl.textContent = `${dislikesCount} dislike(s). oh no!`
    }
}


likeButtonElement.addEventListener('click', handleReaction);
dislikeButtonEl.addEventListener('click', handleReaction);

/*
bodyElement.innerHTML += `
    <h2>Comments</h2>
    <ul>
        <li>Reading is what? Fundamental!</li>
    </ul>
    <h3>Add a comment</h3>
    <input>
    <button id="comment-button">Add comment</button>
`; */


// comment
const commentButtonElement = document.querySelector("#comment-button");
console.dir(commentButtonElement);

const commentListElement = document.querySelector('ul');
const inputElement = document.querySelector('input');

commentButtonElement.addEventListener('click', () => {
    console.log("Comment button works");
    if (inputElement.value) {
        const commentElement = document.createElement('li');
        commentElement.textContent = inputElement.value;
        commentListElement.appendChild(commentElement);
        inputElement.value = "";
    }
});







