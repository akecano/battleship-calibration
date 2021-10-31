import express from "express";
import routes from "./routes";
import cors from "cors";
import { errorMiddleware } from "./middleware/errorHandler";
import pino from "pino-http";
import logger from "./utils/logger";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(pino({ logger }));

app.use("/api/calibration", routes);

app.use(errorMiddleware);

const server = app.listen(port, () => {
  console.log(`server started, listening  on port ${port}`);
});

export default server;
