import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@widgets/header/page";
import Footer from "@widgets/footer/page";
import { Column } from "@shared/index";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "사전제출 메인 페이지",
  description:
    "메인 페이지에요. Apple의 디자인 요소를 참고해서 애니메이션이 최대한 부각될 수 있도록 만들었어요.",
  openGraph: {
    title: "사전제출 메인 페이지",
    description:
      "메인 페이지에요. Apple의 디자인 요소를 참고해서 애니메이션이 최대한 부각될 수 있도록 만들었어요.",
    url: "/",
    siteName: "wemade 사전제출",
    images: [
      {
        url: "/assets/night-crow/night-crow.jpeg",
        width: 800,
        height: 500,
        alt: "나이트크로우 사진입니다.",
      },
      {
        url: "/assets/night-crow/night-crow.jpeg",
        width: 1920,
        height: 1080,
        alt: "나이트크로우 사진입니다.",
      },
    ],
    locale: "ko",
    type: "website",
  },
  icons: {
    icon: "/assets/night-crow/night-crow.jpeg",
    shortcut: ["/assets/night-crow/night-crow.jpeg"],
    apple: "/assets/night-crow/night-crow.jpeg",
    other: {
      rel: "/assets/night-crow/night-crow",
      url: "/assets/night-crow/night-crow.jpeg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Column as="main" className="px-5">
            {children}
          </Column>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
