import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import { getDailyReport , addDailyReport , updateDailyReport , deleteDailyReport } from "../service/dailyReport.service";
import {  getOneDailyPrice } from "../service/dailyPrice.service";

export const getDailyReportHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getDailyReport(req.query);

    await Promise.all(
        result.map(async (ea) => {
          console.log(ea['date'])
        //   let prices = await getOneDailyPrice({ date: ea["date"] });
          let prices = await getOneDailyPrice({ date: ea["date"] });
          ea["prices"] = prices;
        })
      );

    fMsg(res, "DailyReport are here", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const addDailyReportHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await addDailyReport(req.body);
    fMsg(res, "New DailyReport data was added", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const updateDailyReportHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await updateDailyReport(req.query, req.body);
    fMsg(res, "updated DailyReport data", result);
  } catch (e) {
    next(new Error(e));
  }
};

export const deleteDailyReportHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteDailyReport(req.query);
    fMsg(res, "DailyReport data was deleted");
  } catch (e) {
    next(new Error(e));
  }
};
