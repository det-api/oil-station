import {
  addDetailSaleHandler,
  deleteDetailSaleHandler,
  getDetailSaleHandler,
  updateDetailSaleHandler,
} from "../controller/detailSale.controller";
import { hasAnyPermit } from "../middleware/permitValidator";
import { roleValidator } from "../middleware/roleValidator";
import { validateAll, validateToken } from "../middleware/validator";
import { allSchemaId, detailSaleSchema } from "../schema/scheama";

const detailSaleRoute = require("express").Router();

detailSaleRoute.get(
  "/",
  validateToken,
  hasAnyPermit(["view"]),
  getDetailSaleHandler
);
detailSaleRoute.post("/", addDetailSaleHandler);
detailSaleRoute.patch(
  "/",
  validateToken,
  roleValidator("admin"),
  hasAnyPermit(["edit"]),
  validateAll(allSchemaId),
  updateDetailSaleHandler
);
detailSaleRoute.delete(
  "/",
  validateToken,
  roleValidator("admin"),
  hasAnyPermit(["delete"]),
  validateAll(allSchemaId),
  deleteDetailSaleHandler
);

export default detailSaleRoute;
