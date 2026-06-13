import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "NetraSecure AI",
  description: "Premium AI-Powered Cybersecurity Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-dark-bg text-gray-200">{children}</body>
    </html>
  );
}
