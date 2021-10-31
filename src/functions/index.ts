import { Report } from "../types";

const initReport = () => {
  const report: Report = {};

  for (let i = 0; i < 5; i++) {
    report[i] = {
      timesTested: 0,
      rotated: 0,
    };
  }

  return report;
};

const between = (x: number, min: number, max: number) => {
  return x >= min && x <= max;
};

export { initReport, between };
