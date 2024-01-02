import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "../lib/theme";

import ReactQueryProvider from "@/context/QueryClientProvider";

import { GeistSans } from "geist/font";
import ModalProvider from "@/context/ModalProvider";

import "@mantine/carousel/styles.css";

export const metadata: Metadata = {
  title: `Gabeth.Ai | Home`,
  description: "Your personal AI assistant.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript
          nonce='8IBTHwOdqNKAWeKl7plt8g=='
          defaultColorScheme='auto'
        />
      </head>
      <body className={GeistSans.className}>
        <MantineProvider theme={theme} defaultColorScheme='auto'>
          <Notifications position='top-right' zIndex={1000} />
          <ReactQueryProvider>
            <ModalProvider>{children}</ModalProvider>
          </ReactQueryProvider>
        </MantineProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
