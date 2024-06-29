import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chuck Norris Facts",
  description: "Fatos reais sobre a lenda Chuck Norris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="forest">
      <body className={inter.className}>
        <Header />
        <div className="max-w-6xl m-auto">{children}</div>
      </body>
    </html>
  );
}
