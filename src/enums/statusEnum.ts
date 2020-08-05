import { type } from "os";

export enum Statuses {
  ACTIVE = "active",
  AWAY = "away",
  DONOTDISTURB = "donotdisturb",
  INVISIBLE = "invisible",
}

export type Status =
  | Statuses.ACTIVE
  | Statuses.AWAY
  | Statuses.DONOTDISTURB
  | Statuses.INVISIBLE;
