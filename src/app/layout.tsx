import type { Metadata, Viewport } from "next";

import { fontVariables, vazirmatn } from "@/lib/fonts";
import { createBaseMetadata } from "@/lib/seo/metadata";

import "@/styles/globals.css";

export const metadata: Metadata = createBaseMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={`${fontVariables} ${vazirmatn.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ground text-ink">{children}</body>
    </html>
  );
}
