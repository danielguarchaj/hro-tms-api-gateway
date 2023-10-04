import express from "express";
const router = express.Router();
import { createAppointmentController, getAppointmentsController } from "../controllers/appointments";

export const createAppointmentRoute = router.post(
  "/appointments",
  createAppointmentController
);

export const getAppointmentsRoute = router.get(
  "/appointments",
  getAppointmentsController
);
