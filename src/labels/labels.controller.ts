import {Request, Response} from 'express'
import labelService from './labels.service'
const addLabels = async (req: Request, res: Response) => {
  const {
    label: label,
    status: status,
    error: error,
  } = await labelService.addLabels(req.body)
  if (label) res.status(status).send({label})
  if (error) res.status(status).send({error})
}
export default{
  addLabels,
}
