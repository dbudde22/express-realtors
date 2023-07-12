const input = document.querySelector('.inputForm');
const inputBar = document.querySelector('#inputBar');

let name = document.querySelector("#name");
let address = document.querySelector("#address");

input.addEventListener('submit', async (e) => {
    e.preventDefault();
    const selectedHomeType = document.querySelector('input.chooser:checked');
    const response = await axios.get(`http://localhost:3001/${selectedHomeType.value}/${inputBar.value}`);
    name.innerText = `${response.data.name}`;
    address.innerText = `The address is ${response.data.address}`;
    inputBar.value = "";
})