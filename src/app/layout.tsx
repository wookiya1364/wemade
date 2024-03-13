import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// import Header from "@pages-flat/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wemade 사전제출",
  description: "사전제출 사이트 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Header/> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
