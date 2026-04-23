import { MethodOptions } from "vue";

export interface DataOutput {
  playerHealth: number;
  monsterHealth: number;
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
};

export type MethodsOutput = RemoveIndexSignature<MethodOptions> & StrictMethods;
