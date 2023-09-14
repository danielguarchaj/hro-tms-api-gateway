import express from "express";
import {
  getAccessTokenController,
  getAreasController,
} from "../controllers/authentication";
const router = express.Router();

export const getAccessTokenRoute = router.post(
  "/authentication/get-access-token/",
  getAccessTokenController
);

export const getAreasRoute = router.get(
  "/authentication/areas",
  getAreasController
);
