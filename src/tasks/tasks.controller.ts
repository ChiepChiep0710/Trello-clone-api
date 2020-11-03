import {Request, Response} from 'express'
import taskService from './tasks.service'
const addTasks = async (req: Request, res: Response) => {
  const {
    task: task,
    status: status,
    error: error,
  } = await taskService.addTasks(req.body)
  if (task) res.status(status).send({task})
  if (error) res.status(status).send({error})
}
const addLabelsToTask= async (req: Request, res: Response) => {
  const {
    task: task,
    status: status,
    error: error,
  } = await taskService.addLabelsToTask(req.body)
  if (task) res.status(status).send({task})
  if (error) res.status(status).send({error})
}

export default{
  addTasks,
  addLabelsToTask,
}
