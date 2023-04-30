import mongoose, { Schema } from "mongoose";

export interface detailSaleDocument extends mongoose.Document {
  dailyReportId: string;
  vocono: string;
  carNo: string;
  vehicleType: string;
  nozzleNo: number;
  fuelType: string;
  liter: number;
  amount: number;
  startPoint: number;
  endPoint: number;
  createAt: Date;
}

const detailSaleSchema = new Schema({
  dailyReportId: { type: Schema.Types.ObjectId },
  vocono: { type: String, required: true, unique: true },
  carNo: { type: String, default: null }, //manual
  vehicleType: { type: String, default: "car" }, //manual
  nozzleNo: { type: Number, required: true },
  fuelType: { type: String, require: true },
  liter: { type: Number, default: 0 },
  amount: { type: Number, default: 0 },
  startPoint: { type: Number, default: 0 },
  endPoint: { type: Number, default: 0 },
  createAt: { type: Date, default: new Date() },
});
    
const detailSaleModel = mongoose.model<detailSaleDocument>(
  "detailSale",
  detailSaleSchema
);

export default detailSaleModel;
