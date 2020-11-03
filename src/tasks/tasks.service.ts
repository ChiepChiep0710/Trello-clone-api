import  Task  from './tasks.model'
import  Label from '../labels/labels.model'
const addTasks = async (body: any) =>{
  try {
    
    const task= await Task.create({
      name: body.name,
      toDoList: body.toDoList,
    });
    //await task.addLabels(label)
    return {task: task, status: 201};
  } catch(error){
    return {error: error.message, status: 400 }
  }
};
const addLabelsToTask = async (body: any)=>{
  try{
    const label= await Label.findOne({where: {id: body.labelId} })
    const task= await Task.findOne({where: {id: body.taskId} })
    await task.addLabels(label)
    return {task: task, status: 200}
  } catch(error){
    return {error: error.message, status: 400}
  }
}
export default {
  addTasks,
  addLabelsToTask
}