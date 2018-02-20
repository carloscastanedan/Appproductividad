//Asssets
import Task from '../models/task'

function getTasks(req, res)
{
  Task.find({}, (err, taks) => {
    if(err)
    {
      res.status(500).send({ message: `Error al realizar la petición:${err}` })
      return
    }
    if(taks.length == 0)
    {
      res.status(404).send({ message: 'Aún no tinenes Tareas '})
      return
    }
    res.status(200).send({ taks })
  })
}

function getTask(req, res)
{
 let taskId = req.params.taskId

 Task.findById(taskId, (err, task) => {
   if(err)
   {
     res.status(500).send({ message: `Error al realizar la petición:${err}` })
     return
   }
   if(!task)
   {
     res.status(404).send({ message: 'No existe la tarea '})
     return
   }
   res.status(200).send({ task })
 })
}

function saveTask(req, res)
{
  let task = new Task()
  task.name = req.body.name,
  task.description = req.body.description,
  task.active = req.body.active,
  task.color = req.body.color,
  task.duration = req.body.duration

  task.save((err, taskStored) => {
    if(err)
    {
      res.status(500).send({ message: `Error al salvar la tarea:${err}` })
    }
    res.status(200).send({ task: taskStored })
  })
}

function updateTask(req, res)
{
  let taskId = req.params.taskId
  let update = req.body
  Task.findByIdAndUpdate(taskId, update, (err, taskUpdate) => {
    if(err)
    {
      res.status(500).send({ message: `Error al actualizar la tarea:${err}` })
    }
    res.status(200).send({ task: taskUpdate })
  })
}

function delelteTask(req, res)
{
   let taskId = req.params.taskId

   Task.findById(taskId, (err, task) =>{
     if(err)
     {
        res.status(500).send({ message: `Error al eliminar la tarea:${err }` })
     }

     task.remove(err => {
       if(err)
       {
         res.status(500).send({ message: `Error al eliminar la tarea:${err }` })
       }
       res.status(200).send({ message: 'La tarea a sido eliminada'})
     })
   })
}


module.exports = {
  getTasks,
  getTask,
  saveTask,
  updateTask,
  delelteTask
}
