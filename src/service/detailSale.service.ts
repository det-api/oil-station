import { FilterQuery, UpdateQuery } from "mongoose";
import detailSaleModel, { detailSaleDocument } from "../model/detailSale.model";

export const getDetailSale = async (query: FilterQuery<detailSaleDocument>) => {
  try {
    return await detailSaleModel.find(query).lean().select("-__v");
  } catch (e) {
    throw new Error(e);
  }
};

export const addDetailSale = async (body: detailSaleDocument) => {
  try {
    return await new detailSaleModel(body).save();
  } catch (e) {
    throw new Error(e);
  }
};

export const updateDetailSale = async (
  query: FilterQuery<detailSaleDocument>,
  body: UpdateQuery<detailSaleDocument>
) => {
  try {
    await detailSaleModel.updateMany(query, body);
    return await detailSaleModel.find(query).lean();
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteDetailSale = async (
  query: FilterQuery<detailSaleDocument>
) => {
  try {
    let DetailSale = await detailSaleModel.find(query);
    if (!DetailSale) {
      throw new Error("No DetailSale with that id");
    }
    return await detailSaleModel.deleteMany(query);
  } catch (e) {
    throw new Error(e);
  }
};

export const getDetailSaleByFuelType = async (
  dateOfDay: string,
  fuelType: string
) => {
  let fuel = await getDetailSale({
    dailyReportDate: dateOfDay,
    fuelType: fuelType,
  });
  // console.log(fuel)
  let fuelLength = fuel.length ? +1 : 0;
  let fuelLiter = fuel
    .map((ea) => ea["saleLiter"])
    .reduce((pv: number, cv: number): number => pv + cv, 0);
  let fuelAmount = fuel
    .map((ea) => ea["totalPrice"])
    .reduce((pv: number, cv: number): number => pv + cv, 0);
  return { count: fuelLength, liter: fuelLiter, price: fuelAmount };
};

// export const detailSaleByDate = async (
//   d1: any,
//   d2: any
// ) => {
//   let result = await detailSaleModel.find({
//     createAt: { $gte: `${d1}T00:00:00Z`, $lte: `${d2}T23:59:59Z` },
//   });
//   let PHSD = result.filter((ea) => ea.fuelType == "PHSD");
//   let nineTwo = result.filter((ea) => ea.fuelType == "92");
//   let nineFive = result.filter((ea) => ea.fuelType == "95");
//   let nineSeven = result.filter((ea) => ea.fuelType == "97");
//   let HSD = result.filter((ea) => ea.fuelType == "HSD");

//   PHSD.reduce(ea)
//   return [

//   ];
// };
