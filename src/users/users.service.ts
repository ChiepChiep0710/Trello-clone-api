import User from './users.model'
const addUsers = async (body: any) =>{
  try {
    const user= await User.create(body);
    return {user: user, status: 201};
  } catch(error){
    return {error: error.message, status: 400 }
  }
};
export default {
  addUsers,
}