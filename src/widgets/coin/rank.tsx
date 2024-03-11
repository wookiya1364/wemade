"use client";

import React from "react";
import useCoin from "@features/coin/hooks/useCoin";
import Image from "next/image";
import { Column, Label, Row } from "@shared/index";

const ErrorWidgetCoinRank = () => {
  const errorMessage = "코인 정보를 가져오지 못했습니다.";
  return (
    <Row as="section" className="w-full">
      <Row className="w-[150px] h-[150px]"></Row>
      <Label className="w-[100px] h-[20px] mt-2">{errorMessage}</Label>
    </Row>
  );
};

const SkeletonWidgetCoinRank = () => {
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

export default function WidgetCoinRank() {
  const { data: coins, error, isPending } = useCoin();

  if (isPending) return <SkeletonWidgetCoinRank />;

  if (error) return <ErrorWidgetCoinRank />;

  return (
    <Row as="section" className="w-full overflow-auto">
      {coins?.map((coin) => {
        return (
          <Column
            key={coin.chain}
            className="relative w-[150px] h-[230px] mr-5"
          >
            <Image
              alt={coin?.name}
              src={coin?.icon}
              quality={80}
              className="object-cover"
              width={150}
              height={150}
            ></Image>
            <Label>{coin?.chain}</Label>
            <Label>{coin?.displayName}</Label>
            <Label>{coin?.name}</Label>
          </Column>
        );
      })}
    </Row>
  );
}
