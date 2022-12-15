const express = require('express')
const authRouter = require('./auth')
const resourcesRouter = require('./resources')

const apiRouter = express.Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/resources', resourcesRouter)

module.exports = apiRouter
