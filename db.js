const mongoose = require('mongoose')

const MONGOURI = 'mongodb+srv://expressapiauthuser:q4g2QNClznh3ZUYT@cluster0.fduei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        })
        console.log('Connected to the Database')
    }
    catch (e) {
        console.log(e)
        throw e
    }
} 

module.exports = InitiateMongoServer;
