import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, resp) => {
    resp.send('API is running..........')
})

app.get('/api/products', (req, resp) => {
    resp.json(products)
})

app.get('/api/products/:id', (req, resp) => {
    const product = products.find(p => p._id === req.params.id)
    resp.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))