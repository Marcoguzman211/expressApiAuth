const express = require('express');
const userRoutes = require('./routes/user') 
const InitiateMongoServer = require('./db')

//Initiate Mongo Server
InitiateMongoServer()

const app = express()

//Port choice
const PORT = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Api Working' })
})

app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server Started at PORT  ${PORT}`)
})

