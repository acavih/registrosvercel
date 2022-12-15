const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.end('hola mundo')
})

app.use('/api', require('./routes'))

process.on('uncaughtException', (err) => {
    console.error(err)
    console.log('un error tuvo lugar')
})

module.exports = app
