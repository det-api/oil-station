import { addDailyReport } from "../service/dailyReport.service";

const cron = require("node-cron");

const dailyReport = {
  stationId: "6449f5a9a1808c9679bbed27",
};

export const daily = () =>
  cron.schedule("0 0 * * *", () => addDailyReport(dailyReport));
