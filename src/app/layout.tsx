"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../../public/globals.css";
import "@mantine/core/styles.css";
import { Box, Container, MantineProvider } from "@mantine/core";
import { theme } from "../../theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider theme={theme} defaultColorScheme={"dark"} forceColorScheme="dark">
            <Box bg={"#000"} p={{ base: "xs", md: "0" }} pos={"relative"} size={1600}>
              <Navbar />
              {children}
            </Box>
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
