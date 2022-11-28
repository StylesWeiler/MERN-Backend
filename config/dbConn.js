const mongoose = require('mongoose')

const connectDB = async () => { // connects to database using the URI listed in the .env file 
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err) // log error in case of issue
    }
}

module.exports = connectDB