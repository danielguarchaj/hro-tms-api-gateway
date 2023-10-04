import createHttpError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

const logger = morgan;

import { getAccessTokenRoute } from "./routes/authentication";
import { protectedRoute } from "./controllers/authentication";
import { searchPatientRoute } from "./routes/patients";
import { createTurnRoute, getTurnsOfTheDayRoute } from "./routes/turns";
import {
  createAppointmentRoute,
  getAppointmentsRoute,
  getAppointmentsCsvRoute,
} from "./routes/appointments";

var app = express();

// Configure CORS to allow requests from React app's origin
app.use(cors({ origin: "http://localhost:3000" }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(getAccessTokenRoute);
app.use(protectedRoute(searchPatientRoute));
app.use(protectedRoute(createTurnRoute));
app.use(protectedRoute(getTurnsOfTheDayRoute));
app.use(protectedRoute(createAppointmentRoute));
app.use(protectedRoute(getAppointmentsRoute));
app.use(protectedRoute(getAppointmentsCsvRoute));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
