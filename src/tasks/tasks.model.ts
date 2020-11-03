import { Model, DataTypes, BelongsToManyAddAssociationMixin, Association} from 'sequelize';

import  Label  from '../labels/labels.model';
import User from '../users/users.model'
import database from '../Database/database';
import labelTask from './labelTask.model'


const config = {
	tableName: 'Task',
	sequelize: database,
};
export class Task extends Model {
	id!: number;
	name!: string;
  image!: string;
	file!: string;
	
	toDoList!: string;
	public readonly labels?: Label[];
	public addLabels!: BelongsToManyAddAssociationMixin<Label, number>
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public static associations: {
    label: Association<Task, Label >;
  };
}
Task.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		image: {
			type: DataTypes.STRING,
    },
    toDoList:{
      type: DataTypes.STRING
    }
	},
	config
);


Task.sync({ force: false }).then(() => console.log('Task table created'));
Task.belongsToMany(Label, { through: labelTask, as: 'label', foreignKey: "task_id", onDelete:'CASCADE', onUpdate:'CASCADE'})
Label.belongsToMany(Task, { through: labelTask, as:'task', foreignKey:"label_id", onDelete:'CASCADE', onUpdate:'CASCADE'})
Task.belongsToMany(User, {through: "userTask", as:'user', foreignKey:"task_id"})
User.belongsToMany(Task, { through: 'userTask', as: 'task', foreignKey:"user_id" })
export default Task



