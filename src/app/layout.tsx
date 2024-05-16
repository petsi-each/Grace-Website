import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="px-8">

        <Header />

        {children}

      </body>
    </html>
  );
}
