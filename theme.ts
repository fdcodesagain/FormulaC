"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontSmoothing: true,
  primaryColor: "dark",
  defaultRadius: "md",
  primaryShade: 6,
  shadows: {
    sm: "none",
    md: "none",
    lg: "none",
    xl: "none",
  },
});
