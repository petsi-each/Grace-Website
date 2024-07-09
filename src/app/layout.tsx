import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

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

      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
