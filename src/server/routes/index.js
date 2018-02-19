import express from 'express'
import userCtrl from '../controllers/user'
import taskCtrl from '../controllers/task'
import auth from '../middlewares/auth'

const api = express.Router()

api.get('task', taskCtrl.getTasks)
api.get('task/:taskId', taskCtrl.getTask)
api.post('task', taskCtrl.saveTask)
api.put('task', taskCtrl.updateTask)
api.delete('task/:taskId', taskCtrl.delelteTask)

api.post('/singUp', userCtrl.signUp)
api.post('/signIn', userCtrl.signIn)

//Se envía tráfico a react
app.get('/', (req, res) => { res.sendFile('index.html') });
