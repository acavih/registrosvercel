const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')
const { tokenIsValid } = require('../utils/jwt')

const client = new PrismaClient()

module.exports = async function authedUser (req, res, next) {
    const { authorization: token } = req.headers

    if (!token) {
        return res.status(httpStatus.FORBIDDEN).json({
            message: 'Es necesario un token'
        })
    }

    try {
        const decoded = tokenIsValid(token)

        const user = await client.users.findFirst({
            where: {
                user: decoded.iss
            }
        })

        if (!user) {
            return res.status(httpStatus.FORBIDDEN).json({
                message: 'Usuario no válido'
            })
        }

        req.user = user

        next()
    } catch (error) {
        console.log(error.name)
        switch (error.name) {
        case 'TokenExpiredError':
            return res.status(httpStatus.FORBIDDEN).json({
                message: 'El token esta expirado'
            })

        default:
            console.error(error)
            return res.status(httpStatus.FORBIDDEN).json({
                message: 'El token no es valido...'
            })
        }
    }
}
