import { NextFunction, Request, Response } from "express";
import { initReport } from "../functions";
import TurretConfig from "../models";
import { ICalibrationSettings } from "../types";

const settings = async (
  req: Request<{}, {}, ICalibrationSettings>,
  res: Response,
  next: NextFunction
) => {
  const turretConfig = TurretConfig.getInstance();

  if (!turretConfig.setTurretConfig(req.body)) {
    return res.status(400).json({
      message: "Calibration rejected.",
    });
  }

  return res.status(200).json({
    message: "Calibration set.",
  });
};

const run = async (req: Request, res: Response, next: NextFunction) => {
  const turretConfig = TurretConfig.getInstance();

  if (!turretConfig.isCalibrated()) {
    return res.status(422).json({
      message: "Calibration unset.",
    });
  }

  const report = initReport();

  for (const tur of turretConfig.getSequence()) {
    report[tur].timesTested += 1;
    report[tur].rotated += turretConfig.getTurretRotation(tur);
  }

  return res.status(200).json(report);
};

export { settings, run };
