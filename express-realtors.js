const aptInput = document.querySelector('.aptInputForm');
const aptInputBar = document.querySelector('#aptInputBar');
const houseInput = document.querySelector('.houseInputForm');
const houseInputBar = document.querySelector('#houseInputBar');

let name = document.querySelector("#name");
let address = document.querySelector("#address");

aptInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputVal = aptInputBar.value;
    const response = await axios.get(`http://localhost:3001/apartments/${inputVal}`);
    name.innerText = `${response.data.name}`;
    address.innerText = `The address is ${response.data.address}`;
    aptInputBar.value = "";
})

houseInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputVal = houseInputBar.value;
    const response = await axios.get(`http://localhost:3001/houses/${inputVal}`);
    name.innerText = `${response.data.name}`;
    address.innerText = `The address is ${response.data.address}`;
    aptInputBar.value = "";
})