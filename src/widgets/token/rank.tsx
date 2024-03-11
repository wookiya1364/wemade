"use client";

import React from "react";
import useToken from "@features/token/hooks/useToken";
import Image from "next/image";
import { Column, Label, Row } from "@shared/index";

const ErrorWidgetTokenRank = () => {
  const errorMessage = "토큰 정보를 가져오지 못했습니다.";
  return (
    <Row as="section" className="w-full">
      <Row className="w-[150px] h-[150px]"></Row>
      <Label className="w-[100px] h-[20px] mt-2">{errorMessage}</Label>
    </Row>
  );
};

const SkeletonWidgetTokenRank = () => {
  const emptys = Array.from({ length: 8 }, (_, idx) => `skeleton - ${idx}`);
  return (
    <Row as="section" className="w-full overflow-auto">
      {emptys.map((item) => {
        return (
          <Column key={`${item}`} className="relative w-[150px] h-[230px] mr-5">
            <Row className="w-[150px] h-[150px] skeleton_loading"></Row>
            <Label className="w-[100px] h-[20px] mt-2 skeleton_loading"></Label>
            <Label className="w-[100px] h-[20px] mt-2 skeleton_loading"></Label>
            <Label className="w-[100px] h-[20px] mt-2 skeleton_loading"></Label>
          </Column>
        );
      })}
    </Row>
  );
};

export default function WidgetTokenRank() {
  const { data: tokens, error, isPending } = useToken();

  if (isPending) return <SkeletonWidgetTokenRank />;

  if (error) return <ErrorWidgetTokenRank />;

  return (
    <Row as="section" className="w-full overflow-auto">
      {tokens?.map((token) => {
        return (
          <Column
            key={token.chain}
            className="relative w-[150px] h-[230px] mr-5"
          >
            {token.supportedChain.map((support, idx) => {
              return (
                <Image
                  key={`${support.contractAddress}-${support.chain}`}
                  alt={support?.displayName}
                  src={support?.chainImage}
                  quality={80}
                  className="object-cover"
                  width={150}
                  height={150}
                ></Image>
              );
            })}
            <Label>{token?.chain}</Label>
            <Label>{token?.displayName}</Label>
            <Label>{token?.name}</Label>
          </Column>
        );
      })}
    </Row>
  );
}
