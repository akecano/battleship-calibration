import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL,
  prettyPrint: process.env.NODE_ENV !== "prod",
});

export default logger;
