import mongoose, { Schema } from "mongoose";

export interface dailyReportDocument extends mongoose.Document {
  stationId: string;
  allTotalLizerLiter: number;
  allTotalLizerPrice: number;
  date: Date;
}

const dailyReportSchema = new Schema({
  stationId: {
    type: Schema.Types.ObjectId,
    ref: "stationDetail",
    required: true,
  },
  allTotalLizerLiter: { type: Number, default: 0 },
  allTotalLizerPrice: { type: Number, default: 0 },
  date: { type: Date, default: new Date() },
});

const dailyReportModel = mongoose.model<dailyReportDocument>(
  "dailyReport",
  dailyReportSchema
);

export default dailyReportModel;
