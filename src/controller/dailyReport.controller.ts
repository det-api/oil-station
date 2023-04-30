import { Request, Response, NextFunction } from "express";
import fMsg from "../utils/helper";
import {
  getDailyReport,
  addDailyReport,
  updateDailyReport,
  deleteDailyReport,
  getDailyReportByDate,
} from "../service/dailyReport.service";
import { getOneDailyPrice } from "../service/dailyPrice.service";
import {
  getDetailSale,
  getDetailSaleByFuelType,
} from "../service/detailSale.service";

export const getDailyReportHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result = await getDailyReport(req.query);

    await Promise.all(
      result.map(async (ea) => {
        let prices = await getOneDailyPrice({ date: ea["date"] });
        ea["prices"] = prices[0];
      })
    );

    await Promise.all(
      result.map(async (ea) => {
        ea["ninety-two"] = await getDetailSaleByFuelType(ea["_id"], "92");
        ea["ninety-five"] = await getDetailSaleByFuelType(ea["_id"], "95");
        ea["HSD"] = await getDetailSaleByFuelType(ea["_id"], "HSD");
        ea["PHSD"] = await getDetailSaleByFuelType(ea["_id"], "PHSD");
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

export const getDailyReportByDateHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let sDate = req.query.sDate;
    let eDate = req.query.eDate;
    let result;
    if (!sDate) {
      throw new Error("you need date");
    }
    if (!eDate) {
      eDate = new Date().toLocaleDateString(`fr-CA`);
    }
    if (typeof sDate === "string" && typeof eDate === "string") {
      //if date error ? you should use split with T or be sure detail Id

      const startDate = new Date(sDate).toLocaleDateString(`fr-CA`);
      const endDate = new Date(eDate).toLocaleDateString(`fr-CA`);
      result = await getDailyReportByDate(startDate, endDate);
    }
    await Promise.all(
      result.map(async (ea) => {
        let prices = await getOneDailyPrice({ date: ea["date"] });
        ea["prices"] = prices[0];
        return ea;
      })
    );

    await Promise.all(
      result.map(async (ea) => {
        ea["ninety-two"] = await getDetailSaleByFuelType(ea["_id"], "92");
        ea["ninety-five"] = await getDetailSaleByFuelType(ea["_id"], "95");
        ea["HSD"] = await getDetailSaleByFuelType(ea["_id"], "HSD");
        ea["PHSD"] = await getDetailSaleByFuelType(ea["_id"], "PHSD");
      })
    );

    fMsg(res, "between two date", result);
  } catch (e) {
    next(new Error(e));
  }
};
