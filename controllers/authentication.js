import { getAccessTokenService, getAreas } from "../services/authentication";

export const getAccessTokenController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const accessToken = await getAccessTokenService(username, password);
    res.json(accessToken);
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          "An error occurred while generating access token from the authentication service",
      });
  }
};

export const getAreasController = async (_req, res) => {
  try {
    const response = await getAreas();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while fetching the areas from the api gateway service",
    });
  }
};
