"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Column } from "@shared/index";
import Gallery from "@widgets/gallery/page";
import GalleryTitle from "@widgets/gallery/title";
import GalleryPlay from "@widgets/gallery/play";

const Gap = () => <Column className="h-[100vh]" />;

export default function Highlight() {
  const [view, inView] = useInView({ triggerOnce: false, threshold: 0.2 }); // 화면의 20%가 보일 때 애니메이션이 실행되도록 설정
  const [play, inPlay] = useInView({ triggerOnce: false, threshold: 1 }); // 화면의 100%가 보일 때 애니메이션이 실행되도록 설정

  return (
    <Column as="section" className="px-20">
      <Gap />
      <Column className="w-full h-full">
        <GalleryTitle description="일단 핵심부터." inView={inView} />
        <Gallery
          description={"미르4"}
          label="노란색 드레스를 입은 여성을 iPhone 15으로 촬영한 초고해상도 사진."
          ref={view}
          playRef={play}
          srcSet={
            "https://www.apple.com/v/iphone-15/c/images/overview/highlights/48mp_camera__kkyuj8fi4nue_medium.jpg"
          }
        >
          <GalleryPlay inPlay={inPlay} />
        </Gallery>
      </Column>
    </Column>
  );
}
