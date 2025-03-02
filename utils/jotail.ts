import { atom } from "jotai";
export type themeStateType = "light" | "dark";
export const themeState = atom<themeStateType>('light');
