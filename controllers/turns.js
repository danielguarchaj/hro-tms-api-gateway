import {
  createTurnService,
  getTurnsOfTheDayService,
  updateTurnStatusService,
} from "../services/turns";

export const createTurnController = async (req, res) => {
  try {
    const response = await createTurnService(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while generating creating the turn in the core service",
    });
  }
};

export const getTurnsOfTheDayController = async (_req, res) => {
  try {
    const { data, status } = await getTurnsOfTheDayService();
    res.status(status).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "An error occurred while retrieving the turns of the day from the core service",
    });
  }
};

export const updateTurnStatusController = async (req, res) => {
  try {
    const { data, status } = await updateTurnStatusService(req.body);
    res.status(status).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "An error occurred while updating the turn status to the core service",
    });
  }
};
