"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";

export default function Icarus() {

  return (
    <Column as="section" className="w-full px-20">
      <Column className="w-full h-full">
        <Gallery
          header={`ICARUS M: GUILD WAR`}
          className="w-full z-[1]"
          detailDescription={[
            `▶ 게임 경제 변화의 바람\n모든 게임 경제가 토큰 이코노미에 연결\n완전히 새로워진 경제와 새로운 재화들인 DS(Dragon Scale), SC(Scale Crystal), White Ellun이 여러분을 기다리고 있습니다!`,
            `▶ 길드 워 대규모 리메이크\n텐션과 전략있는 3대3 전투로 변경\n"10대10에서 3대3으로 규모가 작아지고 전략적인 아이템과 빠른 속도로 변화!\n하늘을 지배하는 자가 토큰 경제의 정점에도 설 수 있습니다."`,
          ]}
          description={[
            `It's time for GUILD WAR`,
            `It's time for GUILD WAR`,
          ]}
          label="동시접속자 1,265명의 ICARUS M: GUILD WAR를 소개한다."
          srcSet={[
            "/assets/icarus/icarus.jpeg",
            "/assets/icarus/icarus2.png",
          ]}
        />
      </Column>
    </Column>
  );
}
