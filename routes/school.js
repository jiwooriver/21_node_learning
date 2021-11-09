const express = require('express')
const router = express.Router()

//localhost:3000/school
router.get('/', (req, res) => {
    res.send('school 이후 url')
})
//localhost:3000/school/soft
router.get('/soft', (req, res) => {
    res.send('school soft')
})
//localhost:3000/school/bio
router.get('/bio', (req, res) => {
    res.send('school bio')
})
//localhost:3000/school/skills
router.get('/skills', (req, res) => {
    res.send('school skills')
})

module.exports = router
