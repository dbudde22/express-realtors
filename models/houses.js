const houses = [
    {
        name: "triangleA",
        address: "West Guadalupe St",
        sqFt: 1000,
        bedrooms: 1,
        price: 1800,
        isPetFriendly: true,
    },
    {
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
      return houses;
    },
 
    getOne: function (id) {
        id = parseInt(id)-1;
         return houses[id];
       }
};