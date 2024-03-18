"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";
import useNightcrow from "@features/detail/hooks/useNightcrow";

export default function NightCrow() {
  const { data, error, isPending } = useNightcrow();
  if(data === undefined) return <></>;

  return (
    <Column as="section" className="w-full">
      <Column className="w-full h-full">
        <Gallery
          header={`나이트크로우`}
          className="relative z-[1] w-full"
          label="동시접속자 255,008명의 나이트 크로우를 소개한다."
          description={[
            "언리얼 엔진 5로 창조된 마법이 공존하는\n13세기 유럽 대륙을 배경으로 블록체인 이코노미가 접목된\n\n최고의 P&E 게임입니다.",
          ]}
          gallerys={data}
        />
      </Column>
    </Column>
  );
}
