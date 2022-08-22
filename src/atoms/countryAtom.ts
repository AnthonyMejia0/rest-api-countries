import { atom } from "recoil";
import { countryType } from "../types/types";

export const countryAtomState = atom({
    key: "countryAtomState",
    default: {} as countryType
});