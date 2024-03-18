"use client";

import React from "react";
import { Column, Row } from "@shared/index";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import GalleryTitle from "@features/gallery/title";
import TokenInfo from "./info";
import GalleryPlay from "@features/play/page";
import useToken from "@features/token-info/hooks/useToken";

export default function Token() {
  const { data, error, isPending } = useToken();
  const [obView, inView, viewEntry] = useInView({
    triggerOnce: false,
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  if (data === undefined) return <></>;
  return (
    <Column as="section" className="w-full bg-neutral-900">
      <GalleryTitle
        className="leading-5 w-full max-w-[460px]"
        description={`게임을 즐기면, 토큰을 획득.`}
        inView={inView}
      />

      <Row className="max-lg:flex-col-reverse justify-center items-center">
        <TokenInfo />

        <Column className="w-[418px] h-[732px] justify-end ml-[80px] max-sm:m-0">
          <Image
            alt={""}
            ref={obView}
            src={"/assets/etc/gamescore.png"}
            className="rounded-3xl grid-item min-w-[400px] w-full h-full relative top-[70%] skew-y-12"
            width={418}
            height={732}
            style={{
              scale: 0.8,
              left: "20px",
            }}
          />
          <Image
            alt={""}
            src={
              "https://www.apple.com/kr/iphone-15-pro/c/images/overview/action-button/hw__cqhc5pponrhy_large.png"
            }
            className="rounded-3xl grid-item min-w-[400px] w-full h-full mask-image"
            width={418}
            height={732}
            style={{
              scale: 0.95,
            }}
          />
        </Column>
      </Row>
      <GalleryPlay
        width="168px"
        gallerys={data}
        inPlay={inView}
      />
    </Column>
  );
}
