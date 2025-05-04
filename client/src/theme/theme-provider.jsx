"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeVarsProvider } from "@mui/material/styles";

import { createTheme } from "./create-theme";

// ----------------------------------------------------------------------

export function ThemeProvider({ children, ...other }) {
  const theme = createTheme();

  return (
    <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
      <CssBaseline />

      {children}
    </ThemeVarsProvider>
  );
}
