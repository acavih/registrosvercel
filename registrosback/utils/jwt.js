const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET || 'mi_secret'
const EXPIRES_IN = process.env.EXPIRES_IN || '6h'

module.exports = {
    createPayload (issuer, payload) {
        return jwt.sign(payload, SECRET, {
            issuer,
            expiresIn: EXPIRES_IN
        })
    },
    tokenIsValid (token) {
        return jwt.verify(token, SECRET)
    }
}
