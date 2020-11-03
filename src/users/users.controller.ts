import { Request, Response } from 'express';
import userService from './users.service';
const addUsers = async (req: Request, res: Response) => {
	const { user: user, status: status, error: error } = await userService.addUsers(req.body);
	if (user) res.status(status).send({ user });
	if (error) res.status(status).send({ error });
};
export default {
	addUsers,
};
