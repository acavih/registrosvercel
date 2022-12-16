const express = require('express')
const authRouter = require('./auth')
const partnersRouter = require('./partners')
const resourcesRouter = require('./resources')

const apiRouter = express.Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/resources', resourcesRouter)
apiRouter.use('/partners', partnersRouter)

module.exports = apiRouter
