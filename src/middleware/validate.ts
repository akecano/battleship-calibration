import { Request, Response, NextFunction } from "express";
import Ajv from "ajv";

const validateReqBody =
  (schema: any) => (req: Request<any>, res: Response, next: NextFunction) => {
    const ajv = new Ajv();
    const val = ajv.compile(schema);

    if (val(req.body)) {
      next();
    } else {
      res.status(400).json({
        success: false,
        message: "Bad request",
      });
    }
  };

export { validateReqBody };
