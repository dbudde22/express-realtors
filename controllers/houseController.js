const houses = require('../models/houses');

const getApts = (req, res) => {
    res.send({message: "Getting houses"})
}

const index = (req, res) => {
    const homes = house.getAll()
    res.send(homes)
}

const show = (req, res) => {
    const house = houses.getOne(req.params.id)
      res.send(house)
}  

module.exports = {
    getApts,
    index,
    show
  }