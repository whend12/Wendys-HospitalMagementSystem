import express from "express";
import { Login, createUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.post("/login", Login);

export default router;
