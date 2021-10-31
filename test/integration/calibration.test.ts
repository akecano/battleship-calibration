import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/app";
import {
  malformedCalibration,
  goodCalibration,
  badCalibration,
  goodCalibrationReport,
} from "../data/calibration";

chai.use(chaiHttp);
var expect = chai.expect;

describe("calibration", () => {
  describe("setting", () => {
    it("malformed calibration json should fail", async () => {
      await chai
        .request(server)
        .put("/api/calibration/settings")
        .send(malformedCalibration)
        .then(function (res) {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal("Bad request");
        })
        .catch(function (err) {
          throw err;
        });
    });

    it("invalid calibration settings submitted should fail", async () => {
      await chai
        .request(server)
        .put("/api/calibration/settings")
        .send(badCalibration)
        .then(function (res) {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal("Calibration rejected.");
        })
        .catch(function (err) {
          throw err;
        });
    });

    it("submit correct calibration settings should succeed", async () => {
      await chai
        .request(server)
        .put("/api/calibration/settings")
        .send(goodCalibration)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal("Calibration set.");
        })
        .catch(function (err) {
          throw err;
        });
    });
  });

  describe("run", function () {
    it("bad calibration set, run should fail", async function () {
      await chai
        .request(server)
        .put("/api/calibration/settings")
        .send(badCalibration);

      await chai
        .request(server)
        .post("/api/calibration/run")
        .send()
        .then(function (res) {
          expect(res).to.have.status(422);
        })
        .catch(function (err) {
          throw err;
        });
    });

    it("good calibration set, run should succeed", async function () {
      await chai
        .request(server)
        .put("/api/calibration/settings")
        .send(goodCalibration);

      await chai
        .request(server)
        .post("/api/calibration/run")
        .send()
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body).to.eql(goodCalibrationReport);
        })
        .catch(function (err) {
          throw err;
        });
    });
  });

  after(() => {
    server.close();
  });
});
