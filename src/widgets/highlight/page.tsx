"use client";

import React from "react";
import { Column } from "@shared/index";
import VideoGallery from "@features/video-gallery/page";
import useHighlight from "@features/highlight/hooks/useHighlight";

export default function Highlight() {
  const { data, error, isPending } = useHighlight();
  
  if(data === undefined) return <></>

  return (
    <Column as="section" className="w-full">
      <Column className="w-full h-full">
        <VideoGallery
          header="일단 핵심부터."
          className="relative z-[1] w-full"
          label="위메이드의 게임들을 차례대로 보여준다."
          gallerys={data}
        />
      </Column>
    </Column>
  );
}
