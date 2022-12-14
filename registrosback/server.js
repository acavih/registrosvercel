const http = require('http')
const PORT = process.env.PORT || 8080

const server = http.createServer(require('./app'))

console.log('hola')

function aaa () {

}

server.listen(PORT, () => {
    console.log('Escuchando en el puerto ' + PORT)
})
