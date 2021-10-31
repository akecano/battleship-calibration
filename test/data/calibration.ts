export const malformedCalibration = {
  bad: "prop",
};

export const goodCalibration = {
  sequence: [0, 1, 3, 4, 2, 1, 3, 4, 2, 0],
  turrets: [
    {
      caliber: 102,
      location: "Bow",
      startRotation: 0,
      endRotation: 180,
    },
    {
      caliber: 450,
      location: "Stern",
      startRotation: 50,
      endRotation: 120,
    },
    {
      caliber: 150,
      location: "Bow",
      startRotation: 70,
      endRotation: 71,
    },
    {
      caliber: 280,
      location: "Stern",
      startRotation: 50,
      endRotation: 150,
    },
    {
      caliber: 320,
      location: "Bow",
      startRotation: 50,
      endRotation: 160,
    },
  ],
};

export const badCalibration = {
  sequence: [0, 1, 3, 4, 2, 1, 3, 4, 2, 0],
  turrets: [
    {
      caliber: 50,
      location: "Bow",
      startRotation: 0,
      endRotation: 180,
    },
    {
      caliber: 450,
      location: "Stern",
      startRotation: 50,
      endRotation: 120,
    },
    {
      caliber: 150,
      location: "Bow",
      startRotation: 70,
      endRotation: 71,
    },
    {
      caliber: 280,
      location: "Stern",
      startRotation: 50,
      endRotation: 150,
    },
    {
      caliber: 320,
      location: "Bow",
      startRotation: 50,
      endRotation: 160,
    },
  ],
};

export const goodCalibrationReport = {
  "0": { timesTested: 2, rotated: 360 },
  "1": { timesTested: 2, rotated: 140 },
  "2": { timesTested: 2, rotated: 2 },
  "3": { timesTested: 2, rotated: 200 },
  "4": { timesTested: 2, rotated: 220 },
};
