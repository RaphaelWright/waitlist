import type { Metadata } from "next";
import { Space_Mono, Ubuntu, Fraunces, Syne, Plus_Jakarta_Sans } from "next/font/google";
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

const fraunces = Fraunces({
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Display / headlines — sharp, geometric, professional
const syne = Syne({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

// Body / UI — clean, humanist, highly readable
const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "huzlla — Work gets done right.",
  description:
    "Africa's on-demand labour platform. ID-verified workers, escrow-protected pay, GPS check-in. Launching across Ghana, Kenya, Nigeria, and South Africa.",
  openGraph: {
    title: "huzlla — Work gets done right.",
    description:
      "Verified workers. Escrow pay. GPS check-in. Done by noon. Paid by 5.",
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
      <body
        className={`${spaceMono.variable} ${ubuntu.variable} ${fraunces.variable} ${syne.variable} ${jakarta.variable}`}
      >
        {/* Global grain texture */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        {/* Ionicons */}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
      </body>
    </html>
  );
}
