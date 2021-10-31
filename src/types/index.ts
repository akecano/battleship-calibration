import { JSONSchemaType } from "ajv";

export interface Report {
  [key: number]: RunInfo;
}

interface RunInfo {
  timesTested: number;
  rotated: number;
}

export enum Location {
  Bow,
  Stern,
}

export interface ITurret {
  caliber: number;
  location: string;
  startRotation: number;
  endRotation: number;
}

export interface ICalibrationSettings {
  sequence: Array<number>;
  turrets: Array<ITurret>;
}

const turret: JSONSchemaType<ITurret> = {
  type: "object",
  properties: {
    caliber: {
      type: "number",
    },
    location: {
      type: "string",
      enum: ["Bow", "Stern"],
    },
    startRotation: {
      type: "number",
    },
    endRotation: {
      type: "number",
    },
  },
  required: ["caliber", "location", "startRotation", "endRotation"],
};

const calibrationSchema: JSONSchemaType<ICalibrationSettings> = {
  type: "object",
  properties: {
    sequence: { type: "array", items: { type: "integer" }, minItems: 1 },
    turrets: {
      type: "array",
      items: turret,
      maxItems: 5,
      minItems: 1,
    },
  },
  required: ["sequence", "turrets"],
};

export { calibrationSchema };
