"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Column } from "@shared/index";
import Gallery from "@widgets/gallery/page";
import GalleryTitle from "@widgets/gallery/title";
import GalleryPlay from "@widgets/gallery/play";

const Gap = () => <Column className="h-[150vh]" />;

export default function Detail() {
  const [view, inView] = useInView({ triggerOnce: false, threshold: 0.2 }); // 화면의 20%가 보일 때 애니메이션이 실행되도록 설정
  const [play, inPlay] = useInView({ triggerOnce: false, threshold: 1 }); // 화면의 100%가 보일 때 애니메이션이 실행되도록 설정

  return (
    <Column as="section" className="px-20">
      <Gap />
      <Column className="w-full h-full">
        <GalleryTitle
          description={`Dynamic Island.\n그때그때 요긴하게 두둥실.`}
          inView={inView}
        />
        <Gallery
          description={"미르4"}
          label="노란색 드레스를 입은 여성을 iPhone 15으로 촬영한 초고해상도 사진."
          ref={view}
          playRef={play}
          srcSet={
            "https://www.apple.com/v/iphone-15/c/images/overview/dynamic-island/dynamic_island_hw__bq0da9ahwxpy_medium.png"
          }
        >
          <GalleryPlay inPlay={inPlay} />
        </Gallery>
      </Column>
    </Column>
  );
}
