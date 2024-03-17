"use client";

import React from "react";
import { Column } from "@shared/index";
import VideoGallery from "@features/video-gallery/page";

export default function Highlight() {

  return (
    <Column as="section" className="w-full px-20">
      <Column className="w-full h-full">
        <VideoGallery
          header="일단 핵심부터."
          className="relative z-[1] w-[90vw] h-[30vh] md:w-[90vw] md:h-[50vh] lg:w-full lg:h-screen"
          description={["나이트크로우", "ICARUS M: GUILD WAR", "에브리팜", "MIR4"]}
          label="위메이드의 게임들을 차례대로 보여준다."
          m3u8Set={[
            "/videos/night-crow/night-crow.m3u8",
            "/videos/icarus/icarus.m3u8",
            "/videos/everyfarm/everyfarm.m3u8",
            "/videos/mir4/mir4.m3u8",
          ]}
          srcSet={[
            "/assets/night-crow/night-crow.jpeg",
            "/assets/icarus/icarus.jpeg",
            "/assets/everyfarm/everyfarm.jpeg",
            "/assets/mir4/mir4.jpeg",
          ]}
        />
      </Column>
    </Column>
  );
}
