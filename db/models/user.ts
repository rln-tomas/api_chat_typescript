'use strict';

import {Model, UUIDV4} from 'sequelize'


// Interface for typescript
interface UserAttributes {
  id: string,
  username: string, 
  password: string, 
  email: string
}

module.exports = (sequelize: any, DataTypes:any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string  // "!" is for non-nullable
    username!: string
    password!: string
    email!: string

    static associate(models:any) {
      // define association here
      User.hasMany(models.Message)
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false, 
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};