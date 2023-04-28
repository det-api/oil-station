import {
  getStationDetailHandler,
  addStationDetailHandler,
  updateStationDetailHandler,
  deleteStationDetailHandler,
} from "../controller/stationDetail.controller";
const stationDetailRoute = require("express").Router();

stationDetailRoute.get("/", getStationDetailHandler);
stationDetailRoute.post("/", addStationDetailHandler);
stationDetailRoute.patch("/", updateStationDetailHandler);
stationDetailRoute.delete("/", deleteStationDetailHandler);

export default stationDetailRoute;
