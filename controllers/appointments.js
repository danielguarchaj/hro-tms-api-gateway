import {
  createAppointmentService,
  getAppointmentsService,
} from "../services/appointments";

export const createAppointmentController = async (req, res) => {
  try {
    const response = await createAppointmentService(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while generating creating the appointment in the core service",
    });
  }
};

export const getAppointmentsController = async (req, res) => {
  try {
    const { fromDate, toDate } = req.query;
    const response = await getAppointmentsService(fromDate, toDate);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the appointments",
    });
  }
};
