import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./lib/theme";

import ReactQueryProvider from "@/app/context/QueryClientProvider";

import { GeistSans } from "geist/font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <head>
        <ColorSchemeScript
          nonce='8IBTHwOdqNKAWeKl7plt8g=='
          defaultColorScheme='auto'
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='auto'>
          <Notifications />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </MantineProvider>

        <Analytics />
      </body>
    </html>
  );
}
