import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { countryType } from "../types/types";

const { persistAtom } = recoilPersist();

export const countryAtomState = atom({
  key: "countryAtomState",
  default: {} as countryType,
  effects_UNSTABLE: [persistAtom],
});
