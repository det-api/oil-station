import mongoose, { Schema } from "mongoose";
import { getDailyReportByDate } from "../service/dailyReport.service";
import moment from "moment-timezone";

const localTime = moment().toDate();

export interface detailSaleDocument extends mongoose.Document {
  stationDetailId: string;
  dailyReportDate: string;
  vocono: string;
  carNo: string;
  vehicleType: string;
  nozzleNo: number;
  fuelType: string;
  salePrice: number;
  saleLiter: number;
  totalPrice: number;
  totalizer_liter: number;
  createAt: Date;
}

const detailSaleSchema = new Schema({
  stationDetailId: { type: Schema.Types.ObjectId, ref: "stationDetail" },
  vocono: { type: String, required: true, unique: true },
  carNo: { type: String, default: null }, //manual
  vehicleType: { type: String, default: "car" }, //manual
  nozzleNo: { type: Number, required: true },
  fuelType: { type: String, require: true },
  salePrice: { type: Number, default: 0 },
  saleLiter: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
  totalizer_liter: { type: Number, default: 0 },
  dailyReportDate : {type : String ,default: new Date().toLocaleDateString(`fr-CA`)},
  createAt: { type: Date, default: new Date() },
});

// detailSaleSchema.pre("save", async function (next) {
//   const detail = this as unknown as detailSaleDocument;

//   const startDate = new Date(detail.createAt).toISOString();
//   const [date, time] = startDate.split("T");
  // let result = await getDailyReportByDate(date, date);

  // if (result.length != 1) {
  //   console.log("warinning error in detailsale model");
  //   return;
  // }

  // console.log(startDate);

  // detail.dailyReportId = result[0]._id;

  // return next();
// });

const detailSaleModel = mongoose.model<detailSaleDocument>(
  "detailSale",
  detailSaleSchema
);

export default detailSaleModel;
