import {
  getPermitHandler,
  addPermitHandler,
  deletPermitHandler,
} from "../controller/permit.controller";
import { permitSchema, allSchemaId } from "../utils/schema";
import { validateAll, validateToken } from "../middleware/validator";
import { roleValidator } from "../middleware/roleValidator";

const permitRoute = require("express").Router();

permitRoute.get("/", validateToken, roleValidator("admin"), getPermitHandler);
permitRoute.post(
  "/",
  //four
  addPermitHandler
);
permitRoute.delete(
  "/",
  validateAll(allSchemaId),
  validateToken,
  roleValidator("admin"),
  deletPermitHandler
);

export default permitRoute;
