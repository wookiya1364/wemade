import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사전제출 메인 페이지",
  description:
    "메인 페이지에요. Apple의 디자인 요소를 참고해서 애니메이션이 최대한 부각될 수 있도록 만들었어요.",
  openGraph: {
    title: "사전제출 메인 페이지",
    description:
      "메인 페이지에요. Apple의 디자인 요소를 참고해서 애니메이션이 최대한 부각될 수 있도록 만들었어요.",
    url: "/pages-flat",
    siteName: "wemade 사전제출",
    images: [
      {
        url: "/assets/everyfarm/everyfarm.jpeg",
        width: 800,
        height: 500,
        alt: "나이트크로우 사진입니다.",
      },
      {
        url: "/assets/everyfarm/everyfarm.jpeg",
        width: 1920,
        height: 1080,
        alt: "나이트크로우 사진입니다.",
      },
    ],
    locale: "ko",
    type: "website"
  },
  icons: {
    icon: "/assets/everyfarm/everyfarm.jpeg",
    shortcut: "/assets/everyfarm/everyfarm.jpeg",
    apple: "/assets/everyfarm/everyfarm.jpeg",
    other: {
      rel: "/assets/everyfarm/everyfarm",
      url: "/assets/everyfarm/everyfarm.jpeg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Fragment>{children}</Fragment>;
}
