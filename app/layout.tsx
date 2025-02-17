import "@/app/globals.css";
import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "From Above - Helping Little Hearts Heal",
  description: "Supporting children and families through psychological care and the FRITT SINN program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/from-above-logo.jpg" />
      </head>
      <body className={`${openSans.className} ${poppins.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}