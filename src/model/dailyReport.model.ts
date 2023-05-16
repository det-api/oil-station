import mongoose, { Schema } from "mongoose";

export interface dailyReportDocument extends mongoose.Document {
  stationId: string;
  date: Date;
}

const dailyReportSchema = new Schema({
  stationId: {
    type: Schema.Types.ObjectId,
    ref: "stationDetail",
    required: true,
  },
  date: { type: Date, default: new Date() },
});

const dailyReportModel = mongoose.model<dailyReportDocument>(
  "dailyReport",
  dailyReportSchema
);

export default dailyReportModel;
