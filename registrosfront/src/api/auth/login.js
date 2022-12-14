import 'dotenv/config'
import { PrismaClient } from "@prisma/client"

import httpStatus from "http-status"

const client = new PrismaClient({
  
})

/**
 * 
 * @param {import("gatsby").GatsbyFunctionRequest} req 
 * @param {import("gatsby").GatsbyFunctionResponse} res 
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(httpStatus.METHOD_NOT_ALLOWED).json({})
  }
  console.log(process.env)
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
}