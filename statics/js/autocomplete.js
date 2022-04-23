const search = document.querySelector(".search_input");
const suggestion = document.getElementById("suggestion");

/**
 * function pour comparer le champ recherche du formulaire avec un fichier json de noms de villes
 * @param {string} searchText 
 */
async function searchStates(searchText) {
    // Appel au fichier json pour récupérer les données
    const result = await fetch('http://localhost:5500/app/data/worldCity.json');
    const states = await result.json();
    
    // filtrage du fichier json et comparaison avec le champ imput du form
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
/**
 * fonction pour créer une liste de choix déroulant qui matche en l'input et le fichier js
 * @param {string} matches 
 */
async function outputText(matches) {
    if(matches.length > 0) {
        clearSuggestion();
        matches.map(match => {
            const choice = document.createElement("h4");
            choice.innerText = match.name;
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