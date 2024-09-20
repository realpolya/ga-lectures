
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
        .then((res) => displayPerson(res))
});


const displayPerson = (personData) => {
    console.log(personData);

    const containerEl = document.getElementById("person-info");

    const personHTML = `
        <ulk>
            <li>
                <h2>Name: ${personData.name}</h2>
            </li>
            <li>
                Eye-color: ${personData.eye_color}
            </li>
            <li>
                Skin-color: ${personData.skin_color}
            </li>
        </ul>
    `

    containerEl.insertAdjacentHTML("beforeend", personHTML);
}