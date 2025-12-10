import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francis | Web Designer/UI Developer",
  description: "Portfolio of Francis, a Web Designer and UI Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins bg-black text-white">{children}</body>
    </html>
  );
}
