import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            black: {
                100: "#cccccc",
                200: "#999999",
                300: "#666666",
                400: "#333333",
                500: "#000000",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000",
            },
            blue: {
                100: "#d0d3d8",
                200: "#a1a6b1",
                300: "#727a8b",
                400: "#434d64",
                500: "#14213d",
                600: "#101a31",
                700: "#0c1425",
                800: "#080d18",
                900: "#04070c",
            },
            secondary: {
                100: "#feedcf",
                200: "#fedaa0",
                300: "#fdc870",
                400: "#fdb541",
                500: "#fca311",
                600: "#ca820e",
                700: "#97620a",
                800: "#654107",
                900: "#322103",
            },
            grey: {
                100: "#fafafa",
                200: "#f5f5f5",
                300: "#efefef",
                400: "#eaeaea",
                500: "#e5e5e5",
                600: "#b7b7b7",
                700: "#898989",
                800: "#5c5c5c",
                900: "#2e2e2e",
            },
            primary: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333",
            }
        } : {
            black: {
            },
                100: "#000000",
                200: "#000000",
                300: "#000000",
                400: "#000000",
                500: "#000000",
                600: "#333333",
                700: "#666666",
                800: "#999999",
                900: "#cccccc",
            blue: {
                100: "#04070c",
                200: "#080d18",
                300: "#0c1425",
                400: "#101a31",
                500: "#14213d",
                600: "#434d64",
                700: "#727a8b",
                800: "#a1a6b1",
                900: "#d0d3d8",
            },
            secondary: {
                100: "#322103",
                200: "#654107",
                300: "#97620a",
                400: "#ca820e",
                500: "#fca311",
                600: "#fdb541",
                700: "#fdc870",
                800: "#fedaa0",
                900: "#feedcf",
            },
            grey: {
                100: "#2e2e2e",
                200: "#5c5c5c",
                300: "#898989",
                400: "#b7b7b7",
                500: "#e5e5e5",
                600: "#eaeaea",
                700: "#efefef",
                800: "#f5f5f5",
                900: "#fafafa",
            },
            primary: {
                100: "#333333",
                200: "#666666",
                300: "#999999",
                400: "#cccccc",
                500: "#ffffff",
                600: "#ffffff",
                700: "#ffffff",
                800: "#ffffff",
                900: "#ffffff",
            }
        }
    )
})

//mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens (mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent [500],
                    },
                    neutral: {
                        dark: colors.grey [700],
                        main: colors.grey [500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.primary[500],
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.grey [700],
                        main: colors.grey [500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.black[500],
                    }
                }), 
        },
        typography: {
            fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
            fontSize: 40,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };