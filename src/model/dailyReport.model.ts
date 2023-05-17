import mongoose, { Schema } from "mongoose";

export interface dailyReportDocument extends mongoose.Document {
  stationId: string;
  dateOfDay : string;
  date: Date;
}

const dailyReportSchema = new Schema({
  stationId: {
    type: Schema.Types.ObjectId,
    ref: "stationDetail",
    required: true,
  },
  dateOfDay : {type : String , default : new Date().toLocaleDateString(`fr-CA`)},
  date: { type: Date, default: new Date() },
});

const dailyReportModel = mongoose.model<dailyReportDocument>(
  "dailyReport",
  dailyReportSchema
);

export default dailyReportModel;
