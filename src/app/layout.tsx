"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../../public/globals.css";
import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "../../theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
          <MantineProvider theme={theme}>
            <Container size={"xl"} p={0}>
              {children}
            </Container>
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
