import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";
import Navbar from "@/app/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluciones Dotu",
  description: "Inteligencia de precios para el retail",
  icons: {
    icon: "/dotulogo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {/* Cambia el type para SVG */}
        <link rel="icon" href="/dotulogo.svg" type="image/svg+xml" />
        <title>Dotu</title>
        <meta
          name="description"
          content="Inteligencia de precios para el retail"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
