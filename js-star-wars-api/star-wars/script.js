const url = "https://swapi.dev/api/people/";

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const h1El = document.querySelector("h1");

buttonEl.addEventListener("click", () => {
    console.log("clicked");
    const inputValue = inputEl.value;
    console.log(inputValue);

    fetch(`${url}${inputValue}`)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then((data) => console.log(data.results));
});
