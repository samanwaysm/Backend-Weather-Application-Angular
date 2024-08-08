import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/sequelize';

interface LocationAttributes {
  id?: number;
  country: string;
  state: string;
  district?: string;
  city: string;
}

interface LocationCreationAttributes extends Optional<LocationAttributes, 'id'> {}

class Location extends Model<LocationAttributes, LocationCreationAttributes> implements LocationAttributes {
  public id!: number;
  public country!: string;
  public state!: string;
  public district!: string;
  public city!: string;
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'locations',
  }
);

export default Location;
