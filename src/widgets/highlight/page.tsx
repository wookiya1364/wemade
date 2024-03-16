"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";
import { Gap } from "@shared/atom/gap";

export default function Highlight() {

  return (
    <Column as="section" className="w-full px-20">
      <Gap />
      <Column className="w-full h-full">
        <Gallery
          header="일단 핵심부터."
          className="relative w-full h-full z-[1]"
          description={["나이트크로우", "ICARUS M: GUILD WAR", "에브리팜", "MIR4"]}
          label="위메이드의 게임들을 차례대로 보여준다."
          srcSet={[
            "/assets/night-crow/night-crow.png",
            "/assets/icarus/icarus.jpeg",
            "/assets/everyfarm/everyfarm.jpeg",
            "/assets/mir4/mir4.jpeg",
          ]}
        />
      </Column>
    </Column>
  );
}
