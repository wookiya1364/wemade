"use client";

import React from "react";
import { Column } from "@shared/index";
import VideoGallery from "@features/video-gallery/page";
import Gallery from "@features/gallery/page";

export default function NightCrow() {

  return (
    <Column as="section" className="w-full px-20">
      <Column className="w-full h-full">
        <Gallery
          header={`나이트크로우`}
          className="w-full z-[1]"
          detailDescription={[
            `마법이 공존하는 13세기 유럽. 낮과 밤, 밝음과 어둠, 질서와 혼돈, 권력과 반란까지, 모든 것들이 충돌하는 중세 유럽. 언리얼 엔진 5로 그려낸 가장 현실적인 역사 속 유럽 대륙을 경험할 수 있습니다.`,
            `RPG에서의 캐릭터는 또 다른 “나”입니다. 나의 시간, 노력, 그리고 선택에 따른 승급과 전직을 통해 나의 캐릭터는 성장하며, 나이트 크로우 단원으로서 주어진 역할을 수행해 나갑니다.`,
          ]}
          description={[
            `언리얼 엔진 5로 창조된 마법이 공존하는\n13세기 유럽 대륙을 배경으로 블록체인 이코노미가 접목된\n\n최고의 P&E 게임입니다.`,
          ]}
          label="동시접속자 255,008명의 나이트 크로우를 소개한다."
          srcSet={[
            "/assets/night-crow/night-crow2.png",
            "/assets/night-crow/night-crow3.png",
            "/assets/night-crow/night-crow.jpeg",
          ]}
        />
      </Column>
    </Column>
  );
}
