import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "@/components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pope Wall",
  description: "Learn a little bit about security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/pope.png" sizes="any" />
      <body className={inter.className}>
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
