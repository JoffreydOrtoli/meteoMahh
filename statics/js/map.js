const latLong = document.getElementById("lat-long");
const test = latLong.textContent.split(" ");
const lat = test[1];
const long = test[4];

const map = L.map('map').setView([lat, long], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFoaDMxIiwiYSI6ImNsMjlka2NiaDAzcDEzZ214czZ1cDRnOHcifQ.-P-HkC-XqJW1S0DIzHnpGw'
}).addTo(map);

const button = document.getElementById("day-click");

button.addEventListener("click", () => {
    const meteoDay = document.querySelectorAll(".toggle");
    console.log(meteoDay)
    for (const d of meteoDay) {
        d.classList.toggle("display");
    }
});