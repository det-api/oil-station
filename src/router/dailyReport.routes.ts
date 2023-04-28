import {
  getDailyReportHandler,
  addDailyReportHandler,
  updateDailyReportHandler,
  deleteDailyReportHandler,
} from "../controller/dailyReport.controller";
const dailyReportRoute = require("express").Router();

dailyReportRoute.get("/", getDailyReportHandler);
dailyReportRoute.post("/", addDailyReportHandler);
dailyReportRoute.patch("/", updateDailyReportHandler);
dailyReportRoute.delete("/", deleteDailyReportHandler);

export default dailyReportRoute;
