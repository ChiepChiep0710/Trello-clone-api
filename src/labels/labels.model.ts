import { Model, DataTypes } from 'sequelize';
import database from '../Database/database';
import Task from '../tasks/tasks.model'
const config = {
	tableName: 'Label',
	sequelize: database,
};
export class Label extends Model {
	id!: number;
	name!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
Label.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
    },
		name: {
			type: DataTypes.STRING,
		},
	},
	config
);


Label.sync({ force: false }).then(() => console.log('Label table created'));
export default Label

