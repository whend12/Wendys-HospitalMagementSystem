import { Sequelize } from 'sequelize';


const db = new Sequelize ('whenn_hospital','root','',{
    host: "localhost",
    dialect: "mysql",
});

export default db;
