const express = require('express')
const path = require('path')
const app  = express()

const PORT = process.env.PORT || 80
app.use('/', express.static(path.join(__dirname, 'src')))
app.listen(PORT, () => {
    console.log(`Portfolio site started on ${PORT}`)
})