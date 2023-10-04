import axios from "axios";
import { SERVICES } from "../utils/services";

export const createAppointmentService = async (data) => {
  try {
    const response = await axios.post(
      SERVICES.appointments.createAppointments,
      data
    );
    return { data: response.data };
  } catch (error) {
    return error;
  }
};

export const getAppointmentsService = async (fromDate, toDate) => {
  try {
    const response = await axios.get(
      `${SERVICES.appointments.getAppointments}?fromDate=${fromDate}&toDate=${toDate}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
