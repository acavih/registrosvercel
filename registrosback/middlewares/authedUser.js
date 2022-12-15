const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')
const { JsonWebTokenError } = require('jsonwebtoken')
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
        if (error instanceof JsonWebTokenError) {
            console.error(error)
            return res.status(httpStatus.FORBIDDEN).json({
                message: 'El token no es valido...',
                payload: {
                    reason: error.message
                }
            })
        } else {
            throw error
        }
    }
}
