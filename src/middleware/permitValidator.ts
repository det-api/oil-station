import { NextFunction, Response, Request } from "express";
import { permitDocument } from "../model/permit.model";

export const hasAnyPermit =
  (permits: string[]) => (req: Request, res: Response, next: NextFunction) => {
    let bol: boolean = false;
    // console.log(req.body.user)
    // req.body.user[0].permits.map((ea:any ) => console.log(ea))
    for (let i = 0; i < permits.length; i++) {
      let hasPermit = req.body.user[0].permits.find(
        (ea: permitDocument) => ea.name == permits[i]
      );
      if (hasPermit) {
        // console.log(hasPermit)
        bol = true;
        break;
      }
    }
    if (!bol) return next(new Error("You have not that permit"));
    next();
  };
