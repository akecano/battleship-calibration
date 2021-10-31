import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction // eslint-disable-line
): void => {
  logger.info(err);

  switch (err.name) {
    default:
      res.status(500).json({ message: err.message });
  }
};

export { errorMiddleware };
