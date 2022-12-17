const { PrismaClient } = require('@prisma/client')
const express = require('express')
const httpStatus = require('http-status')

const client = new PrismaClient()

const attentionsRouter = express.Router()

attentionsRouter.get('/by-user/:user', async (req, res) => {
    const attentions = await client.attentions.findMany({
        where: {
            user: req.params.user
        }
    })

    res.status(httpStatus.OK).json({
        message: 'Listado de atenciones',
        payload: attentions
    })
})

module.exports = attentionsRouter
