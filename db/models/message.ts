'use strict';
const {
  Model
} = require('sequelize');

interface MessageAttributes {
  id: number, 
  text: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Message extends Model<MessageAttributes> implements MessageAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number
    text!: string
    static associate(models: any) {
      // define association here
    }
  };
  Message.init({
    id:{
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false, 
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING, 
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};