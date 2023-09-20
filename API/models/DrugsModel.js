import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Drugs = db.define(
  "drugs",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terms_drug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: false,
  }
);

// Hapus { force: true } agar tidak menghapus tabel setiap kali
Drugs.sync();

export default Drugs;
