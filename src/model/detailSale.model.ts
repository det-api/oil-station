import mongoose, { Schema } from "mongoose";

export interface detailSaleDocument extends mongoose.Document {
  pprd_license_number: string;
  voucher_number: string;
  carNo: string;
  vehicleType: string;
  // nozzleNo: number;
  fuel_type: string;
  sale_price: number;
  sale_liter: number;
  total_price: number;
  totalizer_liter: number;
  createAt: Date;
}

const detailSaleSchema = new Schema({
  pprd_license_number: { type: Schema.Types.ObjectId },
  voucher_number: { type: String, required: true, unique: true },
  carNo: { type: String, default: null }, //manual
  vehicleType: { type: String, default: "car" }, //manual
  // nozzleNo: { type: Number, required: true },
  fuel_type: { type: String, require: true },
  sale_price: { type: Number, default: 0 },
  sale_liter: { type: Number, default: 0 },
  total_price: { type: Number, default: 0 },
  totalizer_liter: { type: Number, default: 0 },
  createAt: { type: Date, default: new Date() },
});

const detailSaleModel = mongoose.model<detailSaleDocument>(
  "detailSale",
  detailSaleSchema
);

export default detailSaleModel;
