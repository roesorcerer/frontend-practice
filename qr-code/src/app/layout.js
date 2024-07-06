import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Frontend practice for frontend mentor copying a style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
