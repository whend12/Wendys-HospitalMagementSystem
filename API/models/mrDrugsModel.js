import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Drugs from "./DrugsModel.js";
import medicalRecords from "./MedicalrecordModel.js";

const { DataTypes } = Sequelize;

const mrDrugs = db.define(
  "mrDrugs",
  {
    drugsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    rmId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: false,
  }
);

Drugs.hasMany(mrDrugs, { foreignKey: "drugsId" });
medicalRecords.hasMany(mrDrugs, { foreignKey: "rmId" });

mrDrugs.sync({ force: true });

export default mrDrugs;
