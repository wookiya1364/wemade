"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";
import useEveryfarm from "@features/detail/hooks/useEveryfarm";

export default function EveryFarm() {
  const { data, error, isPending } = useEveryfarm();
  if(data === undefined) return <></>
  return (
    <Column as="section" className="w-full">
      <Column className="w-full h-full">
        <Gallery
          header={`에브리팜`}
          className="relative z-[1] w-full"
          description={[`PLAY, HARVEST, AND EARN4.`]}
          label="동시접속자 835명의 에브리팜을 소개한다."
          gallerys={data}
        />
      </Column>
    </Column>
  );
}
