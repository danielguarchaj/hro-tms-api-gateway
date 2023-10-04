export const AUTH_SERVICE_BASE_URL =
  "http://localhost:8000/authentication_service/";

export const PATIENTS_SERVICE_BASE_URL = "https://localhost:7196/api/";

export const CORE_TURNS_MANAGEMENT_SERVICE = `http://localhost:3001/`;
export const CORE_TURNS_APPOINTMENT_SERVICE = `http://localhost:3001/`;

export const SERVICES = {
  authentication: {
    getAccessToken: `${AUTH_SERVICE_BASE_URL}token/`,
    getAreas: `${AUTH_SERVICE_BASE_URL}areas/`,
    verifyAccessToken: `${AUTH_SERVICE_BASE_URL}token/verify/`,
  },
  patients: {
    searchPatientsByClinicHistory: `${PATIENTS_SERVICE_BASE_URL}Busqueda/paciente/`,
    searchPatientsByNames: `${PATIENTS_SERVICE_BASE_URL}BusquedaLegacy/nombre`,
  },
  turns: {
    createTurn: `${CORE_TURNS_MANAGEMENT_SERVICE}turns`,
    updateTurn: `${CORE_TURNS_MANAGEMENT_SERVICE}turns`,
    getTurnsOfTheDay: `${CORE_TURNS_MANAGEMENT_SERVICE}turns/today`,
  },
  appointments: {
    createAppointments: `${CORE_TURNS_APPOINTMENT_SERVICE}appointments`,
    getAppointments: `${CORE_TURNS_APPOINTMENT_SERVICE}appointments`,
  },
};
