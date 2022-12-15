const express = require('express')
const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')
const bcryptjs = require('bcryptjs')
const { createPayload } = require('../../utils/jwt')
const authedUser = require('../../middlewares/authedUser')

const client = new PrismaClient()

const authRouter = express.Router()

authRouter.post('/login', async (req, res) => {
    const user = await client.users.findFirst({
        where: {
            user: req.body.email
        }
    })

    if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            message: 'Credenciales incorrectas'
        })
    }

    const passEqual = await bcryptjs.compare(req.body.password, user.password)

    if (!passEqual) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            message: 'Credenciales incorrectas'
        })
    }

    const { password, ...payload } = user

    res.status(200).json({
        token: createPayload(user.user, payload),
        userInfo: payload
    })
})

authRouter.get('/profile', authedUser, (req, res) => {
    const { password, ...profile } = req.user
    res.json({ profileInfo: profile })
})

module.exports = authRouter
