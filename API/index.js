import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import patientRoutes from "./routes/index.js";
import UserRoute from "./routes/UserRoute.js";
import doctorRoutes from "./routes/index.js";
import drugRoutes from "./routes/index.js";
import DrugsMedicalRecord from "./routes/DrugsMedicalRecord.js";
import polyclinicRoutes from "./routes/index.js";
import MedicalRecordRoute from "./routes/MedicalRecordRoute.js";
const app = express();
dotenv.config();

try {
  await db.authenticate();
  console.log("Database Connected!");
} catch (error) {
  console.log("Failed to Connect Database!");
}
(async () => {
  await db.sync();
})();

app.use(express.json());
app.use(
  "/api/v1/",
  patientRoutes,
  UserRoute,
  doctorRoutes,
  drugRoutes,
  polyclinicRoutes,
  DrugsMedicalRecord,
  MedicalRecordRoute
);
app.listen(5000, () => console.log("Server Running at port 5000"));
