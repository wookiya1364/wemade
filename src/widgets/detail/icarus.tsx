"use client";

import React from "react";
import { Column } from "@shared/index";
import Gallery from "@features/gallery/page";
import useIcarus from "@features/detail/hooks/useIcarus";

export default function Icarus() {
  const { data, error, isPending } = useIcarus();
  if (data === undefined) return <></>;

  return (
    <Column as="section" className="w-full">
      <Column className="w-full h-full">
        <Gallery
          header={`ICARUS M: GUILD WAR`}
          className="relative z-[1] w-full"
          label="동시접속자 1,265명의 ICARUS M: GUILD WAR를 소개한다."
          description={[`It's time for GUILD WAR`]}
          gallerys={data}
        />
      </Column>
    </Column>
  );
}
