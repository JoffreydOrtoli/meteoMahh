const search = document.querySelector(".search_input");
const suggestion = document.getElementById("suggestion");

async function searchStates(searchText) {
    const result = await fetch('http://localhost:5500/app/data/worldCity.json');
    const states = await result.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
    });
    if (searchText.length < 3) {
        matches = [];
        clearSuggestion();
    }
    if (search.value.length >= 3) {
        outputText(matches);
    };
}

const outputText = matches => {
    if(matches.length > 0) {
        clearSuggestion();
        matches.map(match => {
            const test = document.createElement("h4");
            test.setAttribute("type", "submit");
            test.innerText = match.name;
            suggestion.appendChild(test);
        });
    }
}
search.addEventListener("input", ()=> searchStates(search.value));

suggestion.addEventListener("click", (event)=> {
    search.value = event.target.innerText;
    clearSuggestion();
});

function clearSuggestion() {
    suggestion.innerText = "";
  };