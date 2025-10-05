import { atom } from "jotai";

type Theme = 'light' | 'dark';

export const userAtom = atom<any>(null);

// export const toggleThemeAtom = atom(null, (get, set) => {
//   const theme = get(themeAtom);
//   set(themeAtom, theme === 'light' ? 'dark' : 'light');

//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// });