const express = require('express')
const authedUser = require('../middlewares/authedUser')
const attentionsRouter = require('./attentions')
const authRouter = require('./auth')
const partnersRouter = require('./partners')
const resourcesRouter = require('./resources')

const apiRouter = express.Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/resources', authedUser, resourcesRouter)
apiRouter.use('/partners', authedUser, partnersRouter)
apiRouter.use('/attentions', authedUser, attentionsRouter)

module.exports = apiRouter
