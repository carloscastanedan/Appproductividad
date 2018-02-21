import express from 'express'
import userCtrl from '../controllers/user'
import taskCtrl from '../controllers/task'
import auth from '../middlewares/auth'

const api = express.Router()

api.get('/task', taskCtrl.getTasks)
api.get('/task/:taskId', taskCtrl.getTask)
api.post('/task', taskCtrl.saveTask)
api.put('/task/:taskId', taskCtrl.updateTask)
api.delete('/task/:taskId', taskCtrl.delelteTask)

api.post('/signUp', userCtrl.signUp)
api.post('/signIn', userCtrl.signIn)


module.exports = api
