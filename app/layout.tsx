import type { Metadata } from "next";
import "./ui/globals.css";
import { cairo } from "./ui/fonts";

//TODO
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
