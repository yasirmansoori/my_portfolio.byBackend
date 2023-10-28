const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('Hello World!')
})
// app.get('/project1.html', (req, res) => {
//     // res.send('Hello World!')
//     console.log(path.join(__dirname, './public/project1.html'))
//     res.sendFile(path.join(__dirname, './public/project1.html'))

// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 