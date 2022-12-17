const { PrismaClient } = require('@prisma/client')
const express = require('express')

const client = new PrismaClient()

const partnersRouter = express.Router()

partnersRouter.get('/', async (req, res) => {
    console.log('recuperando los socios')
    const { itemsPerPage = 20, page = 1 } = req.query
    const skip = Number(itemsPerPage) * (Number(page) - 1)
    const partnersWithoutResource = await client.members.findMany({
        take: Number(itemsPerPage),
        skip
    })

    const partners = await Promise.all(
        partnersWithoutResource.map(async p => {
            p.sexo = await client.resources.findFirst({ where: { id: p.sexo } })
            p.ciudadresidencia = await client.resources.findFirst({ where: { id: p.ciudaresidencia } })
            p.socioono = await client.resources.findFirst({ where: { id: p.socioono } })
            p.nacionalidad = await client.resources.findFirst({ where: { id: p.nacionalidad } })
            return p
        })
    )

    const totalPartners = await client.members.count()

    return res.status(200).json({
        message: 'Lista de elemntos',
        payload: { partners, totalPartners }
    })
})

partnersRouter.get('/:id', async (req, res) => {
    const partner = await client.members.findFirst({
        where: {
            id: req.params.id
        }
    })

    return res.status(200).json({
        message: 'Elemento',
        payload: {
            ...partner,
            sexo: await client.resources.findFirst({ where: { id: partner.sexo } }),
            ciudadresidencia: await client.resources.findFirst({ where: { id: partner.ciudadresidencia } }),
            socioono: await client.resources.findFirst({ where: { id: partner.socioono } }),
            nacionalidad: await client.resources.findFirst({ where: { id: partner.nacionalidad } })
        }
    })
})

module.exports = partnersRouter
