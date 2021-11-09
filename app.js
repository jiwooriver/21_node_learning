const express = require('express')
const admin = require('./routes/admin')
const app = express()
const port = 3000

// 포트 개방
app.listen(port, () => {
    console.log('Server ON!!')
})

// 홈 경로
app.get('/', (req, res) => {
    res.send('hello express123')
})

app.use('/admin', admin)

// localhost:3000/yydh 접속했을때 '성공'이라는 문구가 출력되도록 하시오.
app.get('/yydh', (req, res) => {
    res.send('성공')
})

// -----1109응용문제-----
// /school
// /school/soft
// /school/bio
// /school/skills
const school = require('./routes/school')

app.use('/school', school)