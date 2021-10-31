import { between } from "../functions";
import { ICalibrationSettings, ITurret } from "../types";

class TurretConfig {
  private static instance: TurretConfig;
  private sequence: Array<number> = [];
  private turrets: Array<ITurret> = [];
  private caliberMin: number = 102;
  private caliberMax: number = 450;
  private startRotation: number = 0;
  private endRotation: number = 180;

  private constructor() {}

  public static getInstance(): TurretConfig {
    if (!TurretConfig.instance) {
      TurretConfig.instance = new TurretConfig();
    }

    return TurretConfig.instance;
  }

  public setTurretConfig(config: ICalibrationSettings): boolean {
    const { sequence, turrets } = config;
    this.resetConfig();
    this.setSequence(sequence);
    return this.setTurrets(turrets);
  }

  public setSequence(sequence: Array<number>) {
    this.sequence = sequence;
  }

  public getSequence() {
    return this.sequence;
  }

  public getTurrets() {
    return this.turrets;
  }

  public setTurrets(turrets: Array<ITurret>): boolean {
    for (const turret of turrets) {
      if (!this.validTurret(turret)) {
        this.resetConfig();
        return false;
      }

      this.turrets.push(turret);
    }

    return true;
  }

  public getTurretRotation(index: number) {
    return this.turrets[index].endRotation - this.turrets[index].startRotation;
  }

  public isCalibrated(): boolean {
    return this.sequence.length > 0 && this.turrets.length > 0;
  }

  private resetConfig() {
    this.sequence = [];
    this.turrets = [];
  }

  private validTurret(turret: ITurret): boolean {
    return (
      between(turret.caliber, this.caliberMin, this.caliberMax) &&
      between(turret.startRotation, this.startRotation, this.endRotation) &&
      between(turret.endRotation, this.startRotation, this.endRotation) &&
      turret.endRotation > turret.startRotation
    );
  }
}

export default TurretConfig;
