import { themeAtom } from "@atoms/themeAtom";
import { useAtomValue } from "jotai";

// export interface ColorPalette {
//   background: string;
//   foreground: string;
//   card: string;
//   cardForeground: string;
//   popover: string;
//   popoverForeground: string;
//   primary: string;
//   primaryForeground: string;
//   secondary: string;
//   secondaryForeground: string;
//   muted: string;
//   mutedForeground: string;
//   accent: string;
//   accentForeground: string;
//   destructive: string;
//   destructiveForeground: string;
//   border: string;
//   input: string;
//   ring: string;
//   // Neumorphism Shadows
//   shadowLight: string;
//   shadowDark: string;
//   // Sidebar Colors
//   sidebar: string;
//   sidebarForeground: string;
//   sidebarPrimary: string;
//   sidebarPrimaryForeground: string;
//   sidebarAccent: string;
//   sidebarAccentForeground: string;
//   sidebarBorder: string;
//   sidebarRing: string;
// }

// export const LIGHT_COLORS: ColorPalette = {
//   background: '#FFFFFF',
//   foreground: '#1A1926',
//   card: '#FFFFFF',
//   cardForeground: '#1A1926',
//   popover: '#FFFFFF',
//   popoverForeground: '#1A1926',
//   primary: '#2D2B44',
//   primaryForeground: '#FBFBFB',
//   secondary: '#F7F7F9',
//   secondaryForeground: '#2D2B44',
//   muted: '#F7F7F9',
//   mutedForeground: '#787799',
//   accent: '#F7F7F9',
//   accentForeground: '#2D2B44',
//   destructive: '#E8704D',
//   destructiveForeground: '#FEFEFF',
//   border: '#E8E9EF',
//   input: '#E8E9EF',
//   ring: '#A6A5C2',

//   // Neumorphism Shadows
//   shadowLight: '#FFFFFF',
//   shadowDark: '#D1D1DB',

//   // Sidebar Colors
//   sidebar: '#FBFBFB',
//   sidebarForeground: '#1A1926',
//   sidebarPrimary: '#2D2B44',
//   sidebarPrimaryForeground: '#FBFBFB',
//   sidebarAccent: '#F7F7F9',
//   sidebarAccentForeground: '#2D2B44',
//   sidebarBorder: '#E8E9EF',
//   sidebarRing: '#A6A5C2',
// };

// /**
//  * @description Dark Mode (.dark) Color Palette - HEX/RGBA
//  */
// export const DARK_COLORS: ColorPalette = {
//   background: '#1A1926',
//   foreground: '#FBFBFB',
//   card: '#2D2B44',
//   cardForeground: '#FBFBFB',
//   popover: '#2D2B44',
//   popoverForeground: '#FBFBFB',
//   primary: '#E8E9EF',
//   primaryForeground: '#2D2B44',
//   secondary: '#3F3E5E',
//   secondaryForeground: '#FBFBFB',
//   muted: '#3F3E5E',
//   mutedForeground: '#A6A5C2',
//   accent: '#3F3E5E',
//   accentForeground: '#FBFBFB',
//   destructive: '#E88C78',
//   destructiveForeground: '#EEEEF0',
//   // Alpha transparency requires rgba() string
//   border: 'rgba(255, 255, 255, 0.1)',
//   input: 'rgba(255, 255, 255, 0.15)',
//   ring: '#77759C',

//   // Neumorphism Shadows
//   shadowLight: '#393744',
//   shadowDark: '#1D1C2A',

//   // Sidebar Colors
//   sidebar: '#2D2B44',
//   sidebarForeground: '#FBFBFB',
//   // This color needs specific conversion for contrast
//   sidebarPrimary: '#75739D',
//   sidebarPrimaryForeground: '#FBFBFB',
//   sidebarAccent: '#3F3E5E',
//   sidebarAccentForeground: '#FBFBFB',
//   sidebarBorder: 'rgba(255, 255, 255, 0.1)',
//   sidebarRing: '#77759C',
// };

export type ColorPalette = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
};

// 🌞 Light Mode
export const LIGHT_COLORS: ColorPalette = {
  background: "#FFFFFF",
  foreground: "#1A1926",
  card: "#FFFFFF",
  cardForeground: "#1A1926",
  popover: "#FFFFFF",
  popoverForeground: "#1A1926",
  primary: "#2D2B44",
  primaryForeground: "#FBFBFB",
  secondary: "#F7F7F7",
  secondaryForeground: "#2D2B44",
  muted: "#F7F7F7",
  mutedForeground: "#7F7F7F",
  accent: "#F7F7F7",
  accentForeground: "#2D2B44",
  destructive: "#C7463D",
  destructiveForeground: "#FFFFFF",
  border: "#EAEAEA",
  input: "#EAEAEA",
  ring: "#B5B5B5",
  chart1: "#D97706", // orange-ish
  chart2: "#2563EB", // blue
  chart3: "#4F46E5", // indigo
  chart4: "#22C55E", // green
  chart5: "#E11D48", // rose
  sidebar: "#FBFBFB",
  sidebarForeground: "#1A1926",
  sidebarPrimary: "#2D2B44",
  sidebarPrimaryForeground: "#FBFBFB",
  sidebarAccent: "#F7F7F7",
  sidebarAccentForeground: "#2D2B44",
  sidebarBorder: "#EAEAEA",
  sidebarRing: "#B5B5B5",
};

// 🌚 Dark Mode
export const DARK_COLORS: ColorPalette = {
  background: "#1A1926",
  foreground: "#FBFBFB",
  card: "#2D2B44",
  cardForeground: "#FBFBFB",
  popover: "#2D2B44",
  popoverForeground: "#FBFBFB",
  primary: "#E8E9EF",
  primaryForeground: "#2D2B44",
  secondary: "#3F3E5E",
  secondaryForeground: "#FBFBFB",
  muted: "#3F3E5E",
  mutedForeground: "#A1A1AA",
  accent: "#3F3E5E",
  accentForeground: "#FBFBFB",
  destructive: "#B91C1C",
  destructiveForeground: "#FECACA",
  border: "#3F3E5E",
  input: "#3F3E5E",
  ring: "#71717A",
  chart1: "#7C3AED", // violet
  chart2: "#0EA5E9", // sky
  chart3: "#10B981", // emerald
  chart4: "#F59E0B", // amber
  chart5: "#EF4444", // red
  sidebar: "#2D2B44",
  sidebarForeground: "#FBFBFB",
  sidebarPrimary: "#7C3AED",
  sidebarPrimaryForeground: "#FBFBFB",
  sidebarAccent: "#3F3E5E",
  sidebarAccentForeground: "#FBFBFB",
  sidebarBorder: "#3F3E5E",
  sidebarRing: "#71717A",
};


export const useThemeColors = (): ColorPalette => {
  const theme = useAtomValue(themeAtom);
  return theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
};
