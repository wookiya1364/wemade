import { Column, Label, Row } from "@shared/index";
import Image from "next/image";
import React from "react";
import Channel from "./channel";
import Link from "next/link";

export default function Footer() {
  return (
    <Column as="footer" className="w-full h-full p-8">
      <Row className="w-full items-center max-sm:justify-center max-sm:flex-col max-sm:mb-8">
        <Row className="w-1/2 max-sm:justify-center max-sm:mb-8">
          <Image
            alt="위믹스 플레이 배경입니다."
            src={
              "https://cache.wemixplay.com/WEMIXPLAY-RENEWAL/assets/images/header/logo-wemixplay-white.svg"
            }
            width={123}
            height={24}
          />
        </Row>
        <Channel />
      </Row>

      <Row className="w-full items-center max-sm:justify-center mt-8 max-sm:mt-0 max-sm:flex-col max-sm:mb-8 text-[#8a95a3] text-sm">
        <Label>{"Family Sites"}</Label>
      </Row>
      <Row className="w-full items-center max-sm:justify-center max-sm:flex-col">
        <Row className="w-[370px] items-center max-sm:justify-center max-sm:flex-col justify-between text-[#8a95a3]">
          <Link target="_blank" href="https://40wonders.wemix.com/">{"40 WONDERS"}</Link>
          <Link target="_blank" href="https://www.wemix.com/">{"WEMIX"}</Link>
          <Link target="_blank" href="https://www.nile.io/">{"NILE"}</Link>
          <Link target="_blank" href="https://wemix.fi/">{"WEMIX.Fi"}</Link>
        </Row>
      </Row>
    </Column>
  );
}
