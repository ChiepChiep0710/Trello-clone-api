import  Label  from './labels.model'
const addLabels = async (body: any) =>{
  try {
    const label= await Label.create(body);
    return {label: label, status: 201};
  } catch(error){
    return {error: error.message, status: 400 }
  }
};
export default {
  addLabels,
}