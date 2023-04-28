import { FilterQuery, UpdateQuery } from "mongoose";
import dailyReportModel, {
  dailyReportDocument,
} from "../model/dailyReport.model";
export const getDailyReport = async (query: FilterQuery<dailyReportDocument>) => {
  try {
    return await dailyReportModel.find(query).lean().populate('stationId').select("-__v");
  } catch (e) {
    throw new Error(e);
  }
};

export const addDailyReport = async (body: dailyReportDocument) => {
  try {
    return await new dailyReportModel(body).save();
  } catch (e) {
    throw new Error(e);
  }
};

export const updateDailyReport = async (
  query: FilterQuery<dailyReportDocument>,
  body: UpdateQuery<dailyReportDocument>
) => {
  try {
    await dailyReportModel.updateMany(query, body);
    return await dailyReportModel.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteDailyReport = async (query: FilterQuery<dailyReportDocument>) => {
  try {
    let DailyReport = await dailyReportModel.find(query);
    if (!DailyReport) {
      throw new Error("No DailyReport with that id");
    }
    return await dailyReportModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};
