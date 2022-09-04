const btn = document.querySelector(".btn");
const location = document.querySelector(".location");

btn.addEventListener("click",() => {
    navigator.geolocation.getCurrentPosition(showPosition)
    
    
});

function showPosition(position){
    
    location.innerHTML = `
    Latitude : ${position.coords.latitude} <br>
    longitude : ${position.coords.longitude}
    
    `;
}