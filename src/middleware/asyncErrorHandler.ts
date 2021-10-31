import { NextFunction, Request, RequestHandler, Response } from "express";

const asyncRequestHandler =
  (routeHandler: RequestHandler) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(routeHandler(req, res, next)).catch((err) => next(err));

export default asyncRequestHandler;
