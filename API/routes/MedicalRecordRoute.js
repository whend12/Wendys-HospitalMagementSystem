import express from "express";
import { getMedicalRecordById } from "../controllers/MedicalRecordController.js";

const router = express.Router();

router.get("/:id", getMedicalRecordById);

export default router;
