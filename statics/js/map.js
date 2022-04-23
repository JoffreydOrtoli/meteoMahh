
/**
 * récupération des values de lat et long pour utilisation dans la map
 */
const latLong = document.getElementById("lat-long");
const coordonnes = latLong.textContent.split(" ");
const lat = coordonnes[1];
const long = coordonnes[4];

/**
 * appel API pour la map
 */
const map = L.map('map').setView([lat, long], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFoaDMxIiwiYSI6ImNsMjlka2NiaDAzcDEzZ214czZ1cDRnOHcifQ.-P-HkC-XqJW1S0DIzHnpGw'
}).addTo(map);

/**
 * Bouton pour faire apparaitre les heures de la journée en bas de page
 */
const button = document.getElementById("day-click");
button.addEventListener("click", () => {
    const meteoDay = document.querySelectorAll(".toggle");
    for (const hour of meteoDay) {
        hour.classList.toggle("display");
    }
});