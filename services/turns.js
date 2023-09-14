import axios from "axios";
import { SERVICES } from "../utils/services";

export const createTurnService = async (data) => {
  try {
    const response = await axios.post(SERVICES.turns.createTurn, data);
    return { data: response.data };
  } catch (error) {
    return error;
  }
};

export const getTurnsOfTheDayService = async () => {
  try {
    const response = await axios.get(SERVICES.turns.getTurnsOfTheDay);
    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error, status: 500 };
  }
};

export const updateTurnStatusService = async (payload) => {
  try {
    const response = await axios.put(SERVICES.turns.updateTurn, payload);
    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error, status: 500 };
  }
};
