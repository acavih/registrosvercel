import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  res.status(200).end('Hola mudno')
})

export default router