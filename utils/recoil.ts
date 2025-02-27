import { atom } from "recoil";
export type themeStateType = "light" | "dark";
export const themeState = atom<themeStateType>({
  key: "themeState", // unique ID (with respect to other atoms/selectors)
  default: "light", // default value (aka initial value)
});

