import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Drugs from "./DrugsModel.js";
import Doctors from "./doctorModel.js";
import Patients from "./patientModel.js";
import Polyclinics from "./polyclinicModel.js";

const { DataTypes } = Sequelize;

const medicalRecords = db.define("medicalRecord", {
  complaints: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  drugsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  polyclinicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Doctors.hasMany(medicalRecords, { foreignKey: "doctorId" });
Patients.hasMany(medicalRecords, { foreignKey: "patientId" });
Polyclinics.hasMany(medicalRecords, { foreignKey: "polyclinicId" });

medicalRecords.sync({ force: true });

export default medicalRecords;
