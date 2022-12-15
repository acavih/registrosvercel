const { PrismaClient, Prisma } = require('@prisma/client')
const express = require('express')

const client = new PrismaClient()

const resourcesRouter = express.Router()

resourcesRouter.get('/', async (req, res) => {
    const resources = await client.resources.findMany({})

    res.status(200).json({
        message: 'Listado de elementos',
        payload: resources
    })
})

module.exports = resourcesRouter
