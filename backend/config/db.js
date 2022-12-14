const mongoose = require('mongoose')

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI)

    console.log('MongoDB Connected'.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
