const houses = [
    {
        name: "The Elm Street Bungalow",
        address: "37 Elm St",
        sqFt: 1300,
        bedrooms: 1,
        price: "550,000",
        isAffordable: true,
    },
    {
        name: "The Purple House",
        address: "413 S Burrell St",
        sqFt: 4500,
        bedrooms: 4,
        price: "$1,300,000",
        isAffordable: false,
    },
    {
        name: "The MidMod Craftsman",
        address: "45 Avenue B",
        sqFt: 2500,
        bedrooms: 2,
        price: "$1,100,000",
        isAffordable: false,
    },
    {
        name: "The Ranch House",
        address: "300 Dandelion Way",
        sqFt: 3000,
        bedrooms: 3,
        price: "$900,500",
        isAffordable: false,
    }
]

module.exports = {
    getAll: function() {
      return houses;
    },
 
    getOne: function (id) {
        id = parseInt(id)-1;
         return houses[id];
       }
};