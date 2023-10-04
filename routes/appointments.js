import express from "express";
const router = express.Router();
import { createAppointmentController } from "../controllers/appointments";

export const createAppointmentRoute = router.post(
  "/appointments",
  createAppointmentController
);
