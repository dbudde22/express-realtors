const apartments = [
    {
        id: 1,
        name: "triangleA",
        address: "West Guadalupe St",
        sqFt: 1000,
        bedrooms: 1,
        price: 1800,
        isPetFriendly: true,
    },
    {
        id: 2,
        name: "triangleB",
        address: "West Guadalupe St",
        sqFt: 1300,
        bedrooms: 2,
        price: 2300,
        isPetFriendly: true,
    }
]

module.exports = {
    getAll: function() {
      return apartments;
    },
 
   getOne: function (id) {
    id = parseInt(id)-1;
     return apartments[id];
   }
};