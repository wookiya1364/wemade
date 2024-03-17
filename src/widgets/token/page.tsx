"use client";

import React from "react";
import { Column, Row } from "@shared/index";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import GalleryTitle from "@features/gallery/title";
import TokenInfo from "./info";
import GalleryPlay from "@features/play/page";

export default function Token() {
  const [obView, inView, viewEntry] = useInView({
    triggerOnce: false,
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  return (
    <Column as="section" className="w-full p-20 bg-neutral-900">
      <GalleryTitle
        className="leading-5 min-w-[460px] max-w-[460px]"
        description={`게임을 즐기면, 토큰을 획득.`}
        inView={inView}
      />

      <Row className="max-lg:flex-col-reverse">
        <TokenInfo />

        <Column className="w-[418px] h-[732px] justify-end ml-[80px] max-sm:m-0">
          <Image
            alt={""}
            ref={obView}
            src={"/assets/etc/gamescore.png"}
            className="rounded-3xl grid-item min-w-[400px] w-full h-full relative top-[70%] skew-y-12"
            width={1920}
            height={800}
            style={{
              width: "100%",
            }}
          />
          <Image
            alt={""}
            src={
              "https://www.apple.com/kr/iphone-15-pro/c/images/overview/action-button/hw__cqhc5pponrhy_large.png"
            }
            className="rounded-3xl grid-item min-w-[400px] w-full h-full mask-image"
            width={1920}
            height={800}
            style={{
              width: "100%",
            }}
          />
        </Column>
      </Row>
        <GalleryPlay
            width="168px"
            detailDescription={[
            "더 많은 토큰 보상을 얻을 수 있는 기회를 찾아보세요.\nGameFi에서 토큰을 활용한 다양한 서비스와 상품들로 보상을 얻을 수 있어요.\n",
            "WEMIX, WEMIX$가 상장된 거래소에서 구매할 수 있어요.\n",
          ]}
            srcSet={["/assets/etc/wemixplay.png"]}
            inPlay={inView}
          />
    </Column>
  );
}
