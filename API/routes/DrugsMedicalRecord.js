import express from "express";
import { getDrugsMedicalRecordById } from "../controllers/mrDrugsController.js";

const router = express.Router();

router.get("/:id", getDrugsMedicalRecordById);

export default router;
