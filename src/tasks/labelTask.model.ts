import { Model, DataTypes } from 'sequelize';
import database from '../Database/database';

const config = {
	tableName: 'labelTask',
	sequelize: database,
};
export class labelTask extends Model {
  id!: number;
  task_id: number;
  label_id: number;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
labelTask.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
    task_id:DataTypes.INTEGER,
    label_id: DataTypes.INTEGER,
  },
	config
)

labelTask.sync({ force: true }).then(() => console.log('labelTask table created'));
export default labelTask