const express = require('express')
const router = express.Router()

//localhost:3000/admin
router.get('/', (req, res) => {
    res.send('admin 이후 url')
})
//localhost:3000/admin/products
router.get('/products', (req, res) => {
    res.send('admin products')
})

module.exports = router
