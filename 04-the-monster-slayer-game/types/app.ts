import { MethodOptions } from "vue";

export interface DataOutput {
  playerHealth: number;
  monsterHealth: number;
  currentRound: number;
  winner: null | "player" | "monster" | "draw";
  logMessages: {
    actionBy: "player" | "monster";
    actionType: "attack" | "heal";
    actionValue: number;
  }[];
}

type Strict<T> = T & {
  [K in Exclude<string, keyof T>]?: never;
};

type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : symbol extends K
        ? never
        : K]: T[K];
};

type StrictMethods = {
  attackMonster: () => void;
  attackPlayer: () => void;
  specialAttackMonster: () => void;
  healPlayer: () => void;
  startNewGame: () => void;
  surrender: () => void;
  addLogMessage: (
    who: "player" | "monster",
    what: "attack" | "heal",
    value: number,
  ) => void;
};

export type MethodsOutput = RemoveIndexSignature<MethodOptions> & StrictMethods;

export type ComputedOutput = {
  monsterBarStyles: {
    width: string;
  };
  playerBarStyles: {
    width: string;
  };
  mayUseSpecialAttack: boolean;
};

export type AppOutput = DataOutput & MethodsOutput & ComputedOutput;
