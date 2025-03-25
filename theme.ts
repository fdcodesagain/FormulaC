"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontSmoothing: true,
  primaryColor: "gray",
  defaultRadius: "md",
  primaryShade: 7,
  shadows: {
    sm: "none",
    md: "none",
    lg: "none",
    xl: "none",
  },
});
