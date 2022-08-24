import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const darkAtomState = atom({
  key: "darkAtomState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
