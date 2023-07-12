const apartments = require('../models/apartments');

const getApts = (req, res) => {
    res.send({message: "Getting apartments"})
}

const index = (req, res) => {
    const apts = apartments.getAll()
    res.send(apts)
}

const show = (req, res) => {
    const apt = apartments.getOne(req.params.id)
      res.send(apt)
} 

module.exports = {
    getApts,
    index,
    show
}
