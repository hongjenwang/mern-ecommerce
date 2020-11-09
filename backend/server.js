const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, resp) => {
    resp.send('API is running...')
})

app.get('/api/products', (req, resp) => {
    resp.json(products)
})

app.get('/api/products/:id', (req, resp) => {
    const product = products.find(p => p._id === req.params.id)
    resp.json(product)
})


app.listen(5000, console.log('Server running on 5000'))