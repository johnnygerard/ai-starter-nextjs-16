import { tw } from "@/utils/tw";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { FC, ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Next.js 16 AI Starter";
const TITLE = SITE_NAME;
const DESCRIPTION =
  "Minimal Next.js 16 starter template for AI-driven development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-starter-nextjs-16.vercel.app"),
  icons: ["dark", "light"].map((theme) => ({
    media: `(prefers-color-scheme: ${theme})`,
    type: "image/svg+xml",
    url: `/images/favicon-${theme}.svg`,
  })),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en-US" className={tw(geistSans.variable, geistMono.variable)}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
