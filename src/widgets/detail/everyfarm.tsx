"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";

export default function EveryFarm() {
  return (
    <Column as="section" className="w-full px-20">
      <Column className="w-full h-full">
        <Gallery
          header={`에브리팜`}
          className="relative z-[1] w-[90vw] h-[30vh] md:w-[90vw] md:h-[50vh] lg:w-full lg:h-screen"
          description={[
            `PLAY, HARVEST, AND EARN4.`,
          ]}
          detailDescription={[
            "에브리팜은 무료로 플레이가 가능한 농장 운영 소셜네트워크 게임입니다.\n농장에서 농작물을 키우고 제분소, 공장등에서 재료를 가공하며\n레스토랑에서 요리를 제작하여 판매하는 게임입니다.",
            "에브리팜은 싱글플레이 방식의 시뮬레이션 게임이 아니며\n친구를 사귀고 친구의 농장에 방문하여 서로 도움을 주고 받는 방식의 소셜네트워크 게임으로\n여러 국가의 친구들과 친해질 수 있습니다.",
            "대한민국에서 장시간 서비스를 하며 축적된 게임을 재미있게 즐길 수 있는 방대한 컨텐츠 요소들과 더불어 블록체인 환경에 맞추어 여러분들이 획득한 flero 토큰의 시세가 최대한 유지될 수 있는 여러 장치들을 준비하고 있습니다."
          ]}
          label="동시접속자 835명의 에브리팜을 소개한다."
          srcSet={[
            "/assets/everyfarm/everyfarm.jpeg",
            "/assets/everyfarm/everyfarm2.jpeg",
            "/assets/everyfarm/everyfarm3.jpeg",
            "/assets/everyfarm/everyfarm4.jpeg",
          ]}
        />
      </Column>
    </Column>
  );
}
