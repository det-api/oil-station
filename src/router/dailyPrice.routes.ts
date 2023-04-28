import {
  getDailyPriceHandler,
  addDailyPriceHandler,
  updateDailyPriceHandler,
  deleteDailyPriceHandler,
  dailyPriceByDateHandler,
} from "../controller/dailyPrice.controller";
const dailyPriceRoute = require("express").Router();


dailyPriceRoute.get("/bydate" , dailyPriceByDateHandler)

dailyPriceRoute.get("/", getDailyPriceHandler);
dailyPriceRoute.post("/", addDailyPriceHandler);
dailyPriceRoute.patch("/", updateDailyPriceHandler);
dailyPriceRoute.delete("/", deleteDailyPriceHandler);

export default dailyPriceRoute;
