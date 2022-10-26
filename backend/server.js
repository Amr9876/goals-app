require('dotenv').config()

const port = process.env.PORT || 5000
const express = require('express')
const { errorHandler } = require('./middlewares/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const path = require('path')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve('index.html'), { root: __dirname })
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
