import { Model, DataTypes } from 'sequelize';
import Task from '../tasks/tasks.model';
import database from '../Database/database';
import sequelize from '../Database/database';
const config = {
	tableName: 'User',
	sequelize: database,
};
export class User extends Model {
	id!: number;
	name!: string;
	age!: number;
	image!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
User.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		age: {
			type: DataTypes.INTEGER,
		},
		name: {
			type: DataTypes.STRING,
		},
		image: {
			type: DataTypes.STRING,
		},
	},
	config
);

User.sync({ force: false }).then(() => console.log('User table created'));
//User.belongsToMany(Task, { through: 'userTask'})

User.sync({ force: true }).then(() => console.log('User table created'));
export default User;
