const input = document.querySelector('.inputForm');
const inputBar = document.querySelector('#inputBar');

let name = document.querySelector("#name");
let address = document.querySelector("#address");
let price = document.querySelector("#price");
let sqFt = document.querySelector("#sqFt");
let bedrooms = document.querySelector("#bedrooms");
let isPetFriendly = document.querySelector("#isPetFriendly");
let isAffordable = document.querySelector("#isAffordable");


input.addEventListener('submit', async (e) => {
    e.preventDefault();
    const selectedHomeType = document.querySelector('input.chooser:checked');
    const response = await axios.get(`http://localhost:3001/${selectedHomeType.value}/${inputBar.value}`);
    name.innerText = `${response.data.name}`;
    address.innerText = `Address: ${response.data.address}`;
    price.innerText = `Price: ${response.data.price}`
    sqFt.innerText = `${response.data.sqFt} square feet`;
    bedrooms.innerText = `Bedrooms: ${response.data.bedrooms}`;
    if (response.data.isPetFriendly) {
        isPetFriendly.innerText = "Pet Friendly!"
    };
    if (response.data.isAffordable) {
        isAffordable.innerText = "It's affordable imo!";
    };
    inputBar.value = "";
})