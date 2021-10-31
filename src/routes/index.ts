import { Router } from "express";
import { settings, run } from "../controllers";
import asyncRequestHandler from "../middleware/asyncErrorHandler";
import { validateReqBody } from "../middleware/validate";
import { calibrationSchema } from "../types";

const router = Router();

router.put(
  "/settings",
  validateReqBody(calibrationSchema),
  asyncRequestHandler(settings)
);
router.post("/run", asyncRequestHandler(run));

export default router;
