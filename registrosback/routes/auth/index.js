const express = require('express')
const { PrismaClient } = require("@prisma/client")
const httpStatus = require("http-status")

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
  
  res.status(200).json({ title: `I am TYPESCRIPT`, message: req.body.message })
})

module.exports = authRouter