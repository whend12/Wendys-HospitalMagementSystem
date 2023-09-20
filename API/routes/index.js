import express from "express";

import { createPatient } from "../controllers/patientController.js";

import { createDoctor } from "../controllers/doctorController.js";

import { createDrug } from "../controllers/drugController.js";

import { createPolyclinic } from "../controllers/polyclinicController.js";

const router = express.Router();

router.route("/patient").post(createPatient);
router.route("/doctor").post(createDoctor);
router.route("/drug").post(createDrug);
router.route("/polyclinic").post(createPolyclinic);

export default router;
