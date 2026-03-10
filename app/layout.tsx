import type { Metadata } from "next";
import { Space_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "huzlla — The job was always here.",
  description:
    "Africa's first on-demand labor platform. Connecting Nairobi's best fundis, cleaners, guards, and riders with employers who need reliable help now.",
  openGraph: {
    title: "huzlla — The job was always here.",
    description:
      "Africa's first on-demand labor platform. Done by noon. Paid by 5.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Rethink Sans — loaded via Google Fonts link (not yet in next/font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceMono.variable} ${ubuntu.variable}`}
        style={{ fontFamily: "'Rethink Sans', var(--font-rethink, sans-serif)" }}
      >
        {/* Global grain texture */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
