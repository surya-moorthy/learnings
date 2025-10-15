import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Contact Management app",
  description: "a simple Contact Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          <Navbar/>
          <main className="container mx-auto">
        {children}
          </main>
        </div>
      </body>
    </html>
  );
}
