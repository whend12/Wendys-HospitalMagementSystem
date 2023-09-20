import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Doctors = db.define(
  "doctors",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: false,
  }
);

export default Doctors;
