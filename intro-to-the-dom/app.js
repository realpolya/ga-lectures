const titleElement = document.querySelector("#main-title");
console.log(titleElement);
console.dir(titleElement); // dir turns into object representation
console.log(titleElement.textContent);

const paragraphElement = document.querySelector(".cool");
console.log(paragraphElement);

paragraphElement.textContent = "Well bye Lorem Ipsum";

// innerHTML creates a new element
// paragraphElement.innerHTML = "<p>well bye</p>";

// changing CSS
// convert CSS to camel case
titleElement.style.textAlign = "center";
titleElement.style.backgroundColor = "hotpink";
paragraphElement.style.color = "coral";

// creating elements
const h3Element = document.createElement("h3");
h3Element.textContent = "I love life";

const bodyElement = document.querySelector("body");
bodyElement.appendChild(h3Element);


// choosing ALL elements
const commentElements = document.querySelectorAll("li");

console.log(commentElements)

commentElements.forEach((comment) => {
    console.log(comment.textContent);
    comment.style.fontSize = "30px";
})

// getting attributes
const buttonElement = document.querySelector("button");

if (buttonElement.hasAttribute("disabled")) {
    console.log("Button is disabled");
    buttonElement.removeAttribute("disabled"); // remove the key of the attribute
}

// setAttribute
buttonElement.id = "submit";
buttonElement.setAttribute("class", "banana"); // use for non-standard attribute


