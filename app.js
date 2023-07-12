const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const aptController = require('./controllers/aptController')
const houseController = require('./controllers/houseController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES 

app.get('/', (req, res) => {
    res.send("welcome!")
  })


app.get('/apartments', aptController.index);
app.get('/houses', houseController.index);

app.get('/apartments/:id', aptController.show)
app.get('/houses/:id', houseController.show)


app.listen(PORT, () => console.log(`Server running on ${PORT}`))