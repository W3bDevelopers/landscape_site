import type { Metadata } from "next";
import Navbar from "../app/components/navbar"; // Make sure case matches your file name
import "./globals.css";

export const metadata: Metadata = {
  title: "[COMPANY NAME]",
  description: "[COMPANY DESCRIPTION]",
  icons: { icon: '/placeholder.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}