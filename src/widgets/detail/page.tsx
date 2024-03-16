"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";
import { Gap } from "@shared/atom/gap";

export default function Detail() {

  return (
    <Column as="section" className="w-full px-20">
      <Gap />
      <Column className="w-full h-full">
        <Gallery
          header={`보다 자세하게 들여다보기.`}
          className="w-full z-[1]"
          description={[
            `언리얼 엔진 5로 창조된 마법이 공존하는\n13세기 유럽 대륙을 배경으로 블록체인 이코노미가 접목된\n\n최고의 P&E 게임입니다.`,
            `언리얼 엔진 5로 창조된 마법이 공존하는\n13세기 유럽 대륙을 배경으로 블록체인 이코노미가 접목된\n\n최고의 P&E 게임입니다.`,
          ]}
          label="노란색 드레스를 입은 여성을 iPhone 15으로 촬영한 초고해상도 사진."
          srcSet={[
            "/assets/night-crow/night-crow.png",
            "/assets/night-crow/night-crow2.png",
          ]}
        />
      </Column>
    </Column>
  );
}
