const search = document.querySelector(".search_input");
const matchList = document.querySelector(".search");


const searchStates = async searchText => {
    const result = await fetch('http://localhost:5500/app/data/worldCity.json');
    const states = await result.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
    });
    if(searchText.length < 3) {
        matches = [];
    }
    if (search.value.length >= 3) {
        outputText(matches);
    };
};

const outputText = matches => {
    if(matches.length > 0) {
        
        matches.map(match => {
            if(matchList.test) {
                (()=>{matchList.removeChild(test);})();
            };
            const test = document.createElement("button");
            test.setAttribute("type", "submit");
            test.innerText = match.name;
            matchList.appendChild(test);
        });
    }
}
search.addEventListener("input", ()=> searchStates(search.value));

// matchList.addEventListener("click", (event)=> {
//     search.value = event.target.innerText;
// });