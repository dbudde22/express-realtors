const apartments = [
    {
        name: "The Triangle, Building A",
        address: "4700 West Guadalupe St Apt A317",
        sqFt: 1000,
        bedrooms: 1,
        price: 1800,
        isPetFriendly: true,
    },
    {
        name: "The Triangle, Building B",
        address: "4700 West Guadalupe St Apt B212",
        sqFt: 1300,
        bedrooms: 2,
        price: 2300,
        isPetFriendly: true,
    },
    {
        name: "The Circle, Second Floor Unit",
        address: "6801 Mallard Circle Way Dr",
        sqFt: 1200,
        bedrooms: 1,
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