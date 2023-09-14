import { createTurnService, getTurnsOfTheDayService } from "../services/turns";

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
    const response = await getTurnsOfTheDayService();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "An error occurred while retrieving the turns of the day from the core service",
    });
  }
};
