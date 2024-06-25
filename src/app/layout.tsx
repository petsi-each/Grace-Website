import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRACE USP",
  description: 'O GRACE USP é um grupo de extensão cujo objetivo é incentivar a participação feminina na área de tecnologia por meio de atividades para meninas do fundamental à graduação. Aprenda conosco!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      
      <head>
        <link rel="icon" href="./icon.png" sizes="any" />
      </head>

      <body className={`px-8 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
