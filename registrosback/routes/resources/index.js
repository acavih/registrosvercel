const { PrismaClient } = require('@prisma/client')
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

resourcesRouter.post('/', async (req, res) => {
    console.log(req.body)
    const createdElement = await client.resources.create({
        data: {
            name: req.body.name,
            type: req.body.type,
            v: 1
        }
    })

    res.status(200).json({
        message: 'Elemento creado',
        payload: createdElement
    })
})

resourcesRouter.put('/:id', async (req, res) => {
    const updatedElement = await client.resources.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name
        }
    })

    res.status(200).json({
        message: 'Elemento actualizado',
        payload: updatedElement
    })
})

module.exports = resourcesRouter
